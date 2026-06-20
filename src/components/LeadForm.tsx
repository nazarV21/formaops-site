"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type FormState = {
  name: string;
  company: string;
  role: string;
  email: string;
  contact: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  company: "",
  role: "",
  email: "",
  contact: "",
  message: "",
  consent: false
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Укажите имя.";
  if (!values.company.trim()) errors.company = "Укажите компанию.";
  if (!values.role.trim()) errors.role = "Укажите должность.";
  if (!values.email.trim()) {
    errors.email = "Укажите email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Проверьте формат email.";
  }
  if (!values.contact.trim()) errors.contact = "Укажите Telegram или телефон.";
  if (!values.message.trim()) errors.message = "Кратко опишите задачу.";
  if (!values.consent) errors.consent = "Нужно согласие на обработку персональных данных.";
  return errors;
}

export function LeadForm() {
  const pathname = usePathname();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const isSubmitting = status === "submitting";
  const sourcePage = useMemo(() => pathname || "unknown", [pathname]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sourcePage })
      });

      const result = (await response.json()) as { message?: string; errors?: Errors };

      if (!response.ok) {
        setErrors(result.errors || {});
        setServerMessage(result.message || "Не удалось отправить заявку. Проверьте поля.");
        setStatus("error");
        return;
      }

      setValues(initialState);
      setStatus("success");
      setServerMessage("Заявка отправлена. Мы свяжемся с вами после обработки запроса.");
    } catch {
      setStatus("error");
      setServerMessage("Не удалось отправить заявку. Попробуйте позже или напишите на email.");
    }
  }

  return (
    <form className="rounded-3xl border border-borderline bg-white p-6 shadow-sm sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Имя" error={errors.name}>
          <input className="form-input" value={values.name} onChange={(event) => updateField("name", event.target.value)} name="name" autoComplete="name" />
        </Field>
        <Field label="Компания" error={errors.company}>
          <input className="form-input" value={values.company} onChange={(event) => updateField("company", event.target.value)} name="company" autoComplete="organization" />
        </Field>
        <Field label="Должность" error={errors.role}>
          <input className="form-input" value={values.role} onChange={(event) => updateField("role", event.target.value)} name="role" autoComplete="organization-title" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input className="form-input" value={values.email} onChange={(event) => updateField("email", event.target.value)} name="email" type="email" autoComplete="email" />
        </Field>
        <Field label="Telegram или телефон" error={errors.contact}>
          <input className="form-input" value={values.contact} onChange={(event) => updateField("contact", event.target.value)} name="contact" autoComplete="tel" />
        </Field>
        <div className="hidden md:block" />
        <Field label="Описание задачи" error={errors.message} full>
          <textarea className="form-input min-h-36 resize-y" value={values.message} onChange={(event) => updateField("message", event.target.value)} name="message" />
        </Field>
      </div>

      <label className="mt-5 flex gap-3 text-sm leading-6 text-muted">
        <input
          className="mt-1 h-4 w-4 rounded border-borderline text-primary"
          checked={values.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          type="checkbox"
          name="consent"
        />
        <span>
          Я согласен на обработку персональных данных и понимаю, что не нужно отправлять конфиденциальные файлы через форму.{" "}
          <Link className="text-primary underline-offset-4 hover:underline" href="/privacy">
            Политика обработки данных
          </Link>
          .
        </span>
      </label>
      {errors.consent ? <p className="mt-2 text-sm text-red-600">{errors.consent}</p> : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button className="focus-ring rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </button>
        {serverMessage ? (
          <p className={["text-sm", status === "success" ? "text-emerald-700" : "text-red-600"].join(" ")}>{serverMessage}</p>
        ) : null}
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-500">
        Не отправляйте конфиденциальные файлы через форму. Передача файлов обсуждается отдельно после первичного контакта.
      </p>
    </form>
  );
}

function Field({ label, error, children, full = false }: { label: string; error?: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={full ? "md:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
