import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты — FormaOps",
  description: "Оставьте заявку на пилот FormaOps или обсудите задачу автоматизации Excel-файлов, документов и отчётности.",
  openGraph: {
    title: "Контакты — FormaOps",
    description: "Форма заявки и контакты FormaOps."
  }
};

export default function ContactsPage() {
  return (
    <>
      <Hero
        eyebrow="Контакты"
        title="Обсудить пилот или задачу"
        subtitle="Расскажите, какие Excel-файлы, документы или отчётные процессы вы хотите автоматизировать. Мы оценим задачу и предложим формат пилота."
        primaryLabel="Заполнить форму"
        primaryHref="#lead-form"
        secondaryLabel="Посмотреть продукты"
        secondaryHref="/products"
      />

      <section className="container-page grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-3xl border border-borderline bg-white p-6 shadow-sm">
          <SectionHeading title="Контакты" />
          <dl className="mt-8 space-y-5 text-muted">
            <div>
              <dt className="font-semibold text-ink">Email</dt>
              <dd className="mt-1">
                <a className="text-primary underline-offset-4 hover:underline" href={"mailto:" + siteConfig.contacts.email}>
                  {siteConfig.contacts.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Telegram</dt>
              <dd className="mt-1">{siteConfig.contacts.telegram}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Город</dt>
              <dd className="mt-1">{siteConfig.contacts.city}</dd>
            </div>
          </dl>
        </aside>
        <div id="lead-form">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
