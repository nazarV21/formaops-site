import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadInput = {
  name?: unknown;
  company?: unknown;
  role?: unknown;
  email?: unknown;
  contact?: unknown;
  message?: unknown;
  consent?: unknown;
  sourcePage?: unknown;
  website?: unknown;
};

type StoredLead = {
  name: string;
  company: string;
  role: string;
  email: string;
  contact: string;
  message: string;
  sourcePage: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "leads.json");

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: LeadInput) {
  const lead = {
    name: stringValue(payload.name),
    company: stringValue(payload.company),
    role: stringValue(payload.role),
    email: stringValue(payload.email),
    contact: stringValue(payload.contact),
    message: stringValue(payload.message),
    sourcePage: stringValue(payload.sourcePage) || "unknown",
  };

  const errors: Partial<Record<keyof LeadInput, string>> = {};

  if (!lead.name) errors.name = "Укажите имя.";
  if (!lead.company) errors.company = "Укажите компанию.";
  if (!lead.role) errors.role = "Укажите должность.";
  if (!lead.email) {
    errors.email = "Укажите email.";
  } else if (!/^\S+@\S+\.\S+$/.test(lead.email)) {
    errors.email = "Проверьте формат email.";
  }
  if (!lead.contact) errors.contact = "Укажите Telegram или телефон.";
  if (!lead.message) errors.message = "Кратко опишите задачу.";
  if (payload.consent !== true)
    errors.consent = "Нужно согласие на обработку персональных данных.";

  if (lead.name.length > 120) errors.name = "Слишком длинное имя.";
  if (lead.company.length > 160)
    errors.company = "Слишком длинное название компании.";
  if (lead.role.length > 160) errors.role = "Слишком длинная должность.";
  if (lead.email.length > 180) errors.email = "Слишком длинный email.";
  if (lead.contact.length > 180) errors.contact = "Слишком длинный контакт.";
  if (lead.message.length > 3000)
    errors.message = "Описание задачи слишком длинное.";

  return { lead, errors };
}

async function readLeads(): Promise<StoredLead[]> {
  try {
    const file = await readFile(leadsFile, "utf8");
    const parsed = JSON.parse(file) as unknown;
    return Array.isArray(parsed) ? (parsed as StoredLead[]) : [];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") return [];
    throw error;
  }
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { message: "API принимает только JSON и не принимает файлы." },
      { status: 415 },
    );
  }

  let payload: LeadInput;
  try {
    payload = (await request.json()) as LeadInput;
  } catch {
    return NextResponse.json(
      { message: "Некорректный JSON." },
      { status: 400 },
    );
  }

  if (stringValue(payload.website)) {
    return NextResponse.json({ message: "Заявка принята." }, { status: 201 });
  }

  const { lead, errors } = validate(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: "Проверьте поля формы.", errors },
      { status: 400 },
    );
  }

  const storedLead: StoredLead = {
    ...lead,
    createdAt: new Date().toISOString(),
  };

  await mkdir(dataDir, { recursive: true });
  const leads = await readLeads();
  leads.push(storedLead);
  await writeFile(leadsFile, JSON.stringify(leads, null, 2), "utf8");

  return NextResponse.json(
    {
      message: "Заявка отправлена. Мы свяжемся с вами после обработки запроса.",
    },
    { status: 201 },
  );
}
