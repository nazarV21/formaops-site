import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "О студии — FormaOps",
  description:
    "FormaOps — студия прикладных ИИ-решений для автоматизации конкретных бизнес-процессов.",
  openGraph: {
    title: "О студии — FormaOps",
    description:
      "Прикладные локальные ИИ-инструменты для Excel, документов, отчётности и контроля качества данных.",
  },
};

const principles = [
  [
    "Прикладной подход",
    "Мы начинаем с конкретного ручного процесса, а не с абстрактного внедрения ИИ.",
  ],
  [
    "Пилоты на реальных данных",
    "Решение проверяется на обезличенных файлах компании до промышленной конфигурации.",
  ],
  [
    "Локальная обработка",
    "Продукты проектируются с учётом сценариев работы внутри инфраструктуры компании.",
  ],
  [
    "B2B-ориентация",
    "Фокус — повторяемые задачи отделов, рабочих групп и корпоративных подразделений.",
  ],
  [
    "Развитие продуктовой линейки",
    "SheetNorm доступен для пилота, следующие решения находятся в разработке.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="FormaOps — студия прикладных ИИ-решений для бизнеса"
        subtitle="FormaOps разрабатывает локальные инструменты для автоматизации конкретных бизнес-процессов: подготовки данных, обработки документов, проверки таблиц, формирования отчётов и контроля качества."
        note="Мы не предлагаем «ИИ ради ИИ». Каждый продукт должен решать понятную операционную задачу и давать измеримый эффект: сокращение ручной работы, снижение ошибок, ускорение подготовки данных или документов."
        primaryLabel="Посмотреть продукты"
        primaryHref="/products"
        secondaryLabel="Обсудить пилот"
        secondaryHref="/contacts"
      />

      <section className="container-page py-16">
        <SectionHeading title="Как мы подходим к продуктам" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(([title, description]) => (
            <FeatureCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <CTASection
        title="Есть регулярный ручной процесс?"
        text="Опишите задачу с Excel-файлами, документами или отчётностью. Мы оценим, можно ли начать с пилота."
        buttonLabel="Обсудить задачу"
        href="/contacts"
      />
    </>
  );
}
