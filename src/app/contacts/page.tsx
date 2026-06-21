import type { Metadata } from "next";
import { ContactMethodCard } from "@/components/ContactMethodCard";
import { InternalPageHero } from "@/components/Editorial";
import { LeadFormPanel } from "@/components/LeadFormPanel";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты — FormaOps",
  description: "Обсудите процесс, который можно автоматизировать с FormaOps.",
  alternates: { canonical: "/contacts" },
};
export default function ContactsPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Контакты"
        title="Обсудим процесс, который можно автоматизировать"
        description="Расскажите о работе с Excel-файлами, документами, отчётностью или проверками. Мы оценим задачу и предложим следующий шаг."
      />
      <section className="container-page grid gap-10 pb-24 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="max-w-md leading-7 text-muted">
            Для первичного обсуждения достаточно описания процесса. Файлы
            передаются отдельно после согласования.
          </p>
          <div className="mt-8 divide-y divide-slate-200">
            <ContactMethodCard
              label="Email"
              value={siteConfig.contacts.email}
              href={`mailto:${siteConfig.contacts.email}`}
              icon="@"
            />
            <ContactMethodCard
              label="Telegram"
              value={siteConfig.contacts.telegram}
              icon="TG"
            />
            <ContactMethodCard
              label="Город"
              value={siteConfig.contacts.city}
              icon="•"
            />
          </div>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-ink">
              Что лучше указать в заявке
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {[
                "какие файлы используются",
                "что сотрудники делают вручную",
                "какой результат ожидается",
                "как часто повторяется процесс",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <LeadFormPanel />
      </section>
    </>
  );
}
