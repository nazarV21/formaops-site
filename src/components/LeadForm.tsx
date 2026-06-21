"use client";

import Link from "next/link";
import { cloneElement } from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";

type FormState = {
  name: string;
  company: string;
  role: string;
  email: string;
  contact: string;
  message: string;
  consent: boolean;
  website: string;
};
type Errors = Partial<Record<keyof FormState, string>>;
const initialState: FormState = {
  name: "",
  company: "",
  role: "",
  email: "",
  contact: "",
  message: "",
  consent: false,
  website: "",
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Укажите имя.";
  if (!values.company.trim()) errors.company = "Укажите компанию.";
  if (!values.role.trim()) errors.role = "Укажите должность.";
  if (!values.email.trim()) errors.email = "Укажите email.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
    errors.email = "Проверьте формат email.";
  if (!values.contact.trim()) errors.contact = "Укажите Telegram или телефон.";
  if (!values.message.trim()) errors.message = "Кратко опишите задачу.";
  if (!values.consent)
    errors.consent = "Нужно согласие на обработку персональных данных.";
  return errors;
}

export function LeadForm() {
  const pathname = usePathname();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("submitting");
    setServerMessage("");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sourcePage: pathname || "unknown" }),
      });
      const result = (await response.json()) as {
        message?: string;
        errors?: Errors;
      };
      if (!response.ok) {
        setErrors(result.errors || {});
        setStatus("error");
        setServerMessage(result.message || "Проверьте поля формы.");
        return;
      }
      setValues(initialState);
      setStatus("success");
      setServerMessage(
        "Заявка отправлена. Мы свяжемся с вами после обработки запроса.",
      );
    } catch {
      setStatus("error");
      setServerMessage(
        "Не удалось отправить заявку. Попробуйте позже или напишите на email.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-96 flex-col items-start justify-center rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-7 sm:p-9"
        role="status"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-xl text-white">
          ✓
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
          Заявка отправлена
        </h3>
        <p className="mt-3 max-w-md leading-7 text-muted">{serverMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="focus-ring mt-6 rounded-full border border-emerald-300 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800"
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="sr-only" aria-hidden="true">
        <label>
          Сайт
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Имя" name="name" error={errors.name} required>
          <input
            className="form-input"
            name="name"
            maxLength={120}
            placeholder="Как к вам обращаться"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </Field>
        <Field label="Компания" name="company" error={errors.company} required>
          <input
            className="form-input"
            name="company"
            maxLength={160}
            placeholder="Название компании"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </Field>
        <Field label="Должность" name="role" error={errors.role} required>
          <input
            className="form-input"
            name="role"
            maxLength={160}
            placeholder="Ваша роль"
            autoComplete="organization-title"
            value={values.role}
            onChange={(event) => updateField("role", event.target.value)}
          />
        </Field>
        <Field label="Email" name="email" error={errors.email} required>
          <input
            className="form-input"
            name="email"
            type="email"
            maxLength={180}
            placeholder="name@company.ru"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </Field>
        <Field
          label="Telegram или телефон"
          name="contact"
          error={errors.contact}
          required
          full
        >
          <input
            className="form-input"
            name="contact"
            maxLength={180}
            placeholder="@username или +7…"
            autoComplete="tel"
            value={values.contact}
            onChange={(event) => updateField("contact", event.target.value)}
          />
        </Field>
        <Field
          label="Описание задачи"
          name="message"
          error={errors.message}
          required
          full
        >
          <textarea
            className="form-input min-h-36 resize-y"
            name="message"
            maxLength={3000}
            placeholder="Какие файлы используются, что делается вручную и какой результат нужен?"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
        </Field>
      </div>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-muted">
        <input
          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-primary focus:ring-primary"
          checked={values.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          type="checkbox"
          name="consent"
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <span>
          Согласен на обработку персональных данных.{" "}
          <Link
            href="/privacy"
            className="text-primary underline-offset-4 hover:underline"
          >
            Политика обработки данных
          </Link>
          .
        </span>
      </label>
      {errors.consent ? (
        <p id="consent-error" className="mt-2 text-sm text-red-600">
          {errors.consent}
        </p>
      ) : null}
      {serverMessage ? (
        <p
          className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {serverMessage}
        </p>
      ) : null}
      <button
        className="focus-ring mt-6 w-full rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
      </button>
      <p className="mt-5 text-xs leading-5 text-slate-500">
        Не отправляйте конфиденциальные файлы через форму. Передача файлов
        обсуждается отдельно.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
  required,
  full,
}: {
  label: string;
  name: keyof FormState;
  error?: string;
  children: React.ReactElement<{
    "aria-invalid"?: boolean;
    "aria-describedby"?: string;
    required?: boolean;
  }>;
  required?: boolean;
  full?: boolean;
}) {
  const errorId = `${name}-error`;
  return (
    <label className={full ? "sm:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-primary" aria-hidden="true">
            *
          </span>
        ) : null}
      </span>
      {cloneElement(children, {
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        required,
      })}
      {error ? (
        <span id={errorId} className="mt-2 block text-sm text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}
