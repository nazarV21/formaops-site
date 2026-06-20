import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Пилотное внедрение — FormaOps",
  description: "Проверьте SheetNorm и другие решения FormaOps на реальных обезличенных данных компании до внедрения.",
  openGraph: {
    title: "Пилотное внедрение — FormaOps",
    description: "Короткий пилот на обезличенных файлах помогает оценить применимость решения и будущую конфигурацию."
  }
};

const checks = [
  "подходят ли файлы компании для автоматизации",
  "какие правила обработки нужны",
  "сколько времени можно сэкономить",
  "какая конфигурация нужна: Team или Enterprise",
  "какие ограничения есть перед промышленным внедрением"
];

const pilotStages = [
  "Первичное обсуждение задачи.",
  "Передача 3–5 обезличенных файлов.",
  "Анализ структуры таблиц.",
  "Настройка демонстрационного сценария.",
  "Демонстрация результата.",
  "Оценка времени до и после автоматизации.",
  "Рекомендация по внедрению."
];

const outcomes = [
  "демонстрацию на своих данных",
  "понимание применимости решения",
  "пример результата до/после",
  "оценку экономии времени",
  "рекомендации по Team или Enterprise",
  "список ограничений и дальнейших шагов"
];

export default function PilotPage() {
  return (
    <>
      <Hero
        eyebrow="Пилот"
        title="Проверьте решение на своих файлах до внедрения"
        subtitle="Мы начинаем не с покупки продукта, а с короткого пилота на реальных обезличенных данных компании."
        primaryLabel="Оставить заявку"
        primaryHref="#lead-form"
        secondaryLabel="Посмотреть SheetNorm"
        secondaryHref="/products/sheetnorm"
      />

      <section className="container-page py-12">
        <SectionHeading title="Зачем нужен пилот" description="Пилот помогает проверить:" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {checks.map((item) => (
            <li key={item} className="rounded-3xl border border-borderline bg-white p-5 leading-7 text-muted shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page py-12">
        <SectionHeading title="Этапы пилота" />
        <div className="mt-8">
          <ProcessSteps steps={pilotStages} />
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading title="Что получает компания" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => (
            <li key={item} className="rounded-3xl border border-borderline bg-white p-5 leading-7 text-muted shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="lead-form" className="container-page py-16">
        <SectionHeading title="Форма заявки" description="Опишите процесс, который хотите автоматизировать. Файлы передаются отдельно после первичного контакта." />
        <div className="mt-8">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
