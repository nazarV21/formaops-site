import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { PilotTimelineVisual } from "@/components/PilotTimelineVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsStrip } from "@/components/StatsStrip";
import { VisualSectionDivider } from "@/components/VisualSectionDivider";
import { sheetNormFaq } from "@/lib/demo";

export const metadata: Metadata = {
  title: "Пилотное внедрение — FormaOps",
  description:
    "Проверьте SheetNorm и другие решения FormaOps на реальных обезличенных данных компании до внедрения.",
  openGraph: {
    title: "Пилотное внедрение — FormaOps",
    description:
      "Короткий пилот на обезличенных файлах помогает оценить применимость решения и будущую конфигурацию.",
  },
};

const checks = [
  "подходят ли файлы компании для автоматизации",
  "какие правила обработки нужны",
  "сколько времени можно сэкономить",
  "какая конфигурация нужна: Team или Enterprise",
  "какие ограничения есть перед промышленным внедрением",
];

const outcomes = [
  "демонстрацию на своих данных",
  "понимание применимости решения",
  "пример результата до/после",
  "оценку экономии времени",
  "рекомендации по Team или Enterprise",
  "список ограничений и дальнейших шагов",
];

export default function PilotPage() {
  return (
    <>
      <Hero
        eyebrow="Пилот"
        title="Проверьте решение на своих файлах до внедрения"
        subtitle="Мы начинаем не с покупки продукта, а с короткого пилота на реальных обезличенных данных компании."
        note="Пилот помогает измерить применимость решения и зафиксировать ограничения до обсуждения промышленной конфигурации."
        primaryLabel="Оставить заявку"
        primaryHref="#lead-form"
        secondaryLabel="Посмотреть SheetNorm"
        secondaryHref="/products/sheetnorm"
      />

      <StatsStrip />
      <VisualSectionDivider />

      <section className="container-page py-12">
        <SectionHeading
          title="Зачем нужен пилот"
          description="Пилот помогает проверить:"
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {checks.map((item, index) => (
            <li
              key={item}
              className="group flex gap-4 rounded-3xl border border-borderline bg-white p-5 leading-7 text-muted shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-soft"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary transition group-hover:bg-primary group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          title="Этапы пилота"
          description="Линия показывает последовательность проверки — от постановки задачи до рекомендации по внедрению."
        />
        <div className="mt-10">
          <PilotTimelineVisual />
        </div>
      </section>

      <VisualSectionDivider />

      <section className="container-page py-12">
        <SectionHeading title="Что получает компания" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => (
            <li
              key={item}
              className="rounded-3xl border border-borderline bg-white p-5 leading-7 text-muted shadow-sm transition hover:-translate-y-1 hover:border-secondary/30"
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 font-bold text-emerald-700">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="FAQ"
          title="Что важно знать до начала пилота"
        />
        <div className="mt-8">
          <FAQAccordion items={sheetNormFaq} />
        </div>
      </section>

      <section id="lead-form" className="container-page py-16">
        <SectionHeading
          title="Форма заявки"
          description="Опишите процесс, который хотите автоматизировать. Файлы передаются отдельно после первичного контакта."
        />
        <div className="mt-8">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
