import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { PackageCard } from "@/components/PackageCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import { sheetNormPackages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "SheetNorm — нормализация сложных Excel-отчётов",
  description:
    "SheetNorm превращает сложные Excel-отчёты в готовые таблицы для 1С, Power BI, SQL и BI-систем. Готов к контролируемому пилоту.",
  openGraph: {
    title: "SheetNorm — нормализация сложных Excel-отчётов",
    description: "Локальная система с ИИ-помощником для подготовки Excel-данных к аналитике и корпоративным системам."
  }
};

const problems = [
  "объединённые ячейки",
  "многоуровневые заголовки",
  "кросс-таблицы",
  "строки «Итого» и «Всего»",
  "разные форматы дат и чисел",
  "служебные строки",
  "ручная подготовка перед загрузкой"
];

const workSteps = [
  "Загрузка Excel",
  "Анализ структуры",
  "Инструкция простым языком",
  "Формирование правила",
  "Предпросмотр результата",
  "Сохранение шаблона",
  "Повторная обработка похожих файлов"
];

const companyValue = [
  ["Сокращение ручной подготовки", "Меньше времени на очистку и перекладывание данных перед загрузкой."],
  ["Снижение количества ошибок", "Правило проверяется на предпросмотре и затем применяется повторяемо."],
  ["Единый формат таблиц", "Итоговые файлы проще загружать в 1С, Power BI, SQL и BI-системы."],
  ["Повторяемые шаблоны", "Утверждённая логика сохраняется для похожих файлов."],
  ["История операций", "Команда видит, какие файлы обработаны и с каким результатом."],
  ["Отчёт качества", "Фиксируются строки, колонки, предупреждения и статус результата."],
  ["Локальная обработка", "Файлы могут обрабатываться внутри инфраструктуры компании."],
  ["Подготовка данных для BI", "Сложные отчёты приводятся к формату, пригодному для аналитики."]
];

export default function SheetNormPage() {
  return (
    <>
      <Hero
        eyebrow="Готов к пилоту"
        title={"SheetNorm\nНормализация сложных Excel-отчётов для аналитики"}
        subtitle="Локальная система с ИИ-помощником, которая превращает файлы с объединёнными ячейками, многоуровневыми заголовками, кросс-таблицами и служебными строками в готовые таблицы для 1С, Power BI, SQL и BI-систем."
        primaryLabel="Запросить пилот"
        primaryHref="/pilot"
        secondaryLabel="Посмотреть конфигурации"
        secondaryHref="#packages"
        visual={
          <div className="rounded-[2rem] border border-borderline bg-white p-6 shadow-soft">
            <div className="flex flex-wrap gap-3">
              <StatusBadge tone="green">Локальная обработка</StatusBadge>
              <StatusBadge tone="blue">Шаблоны</StatusBadge>
              <StatusBadge tone="slate">Контроль результата</StatusBadge>
            </div>
            <div className="mt-6 space-y-3">
              {["Сложный отчёт.xlsx", "AI-помощник формирует проект правила", "Пользователь проверяет предпросмотр", "Готовая таблица + processing summary"].map((item) => (
                <div key={item} className="rounded-2xl border border-borderline bg-slate-50 px-5 py-4 font-medium text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Проблема"
          title="Excel-файлы удобно заполнять вручную, но сложно загружать автоматически"
          description="Компании регулярно получают Excel-файлы от филиалов, подрядчиков и подразделений. Такие файлы удобно заполнять вручную, но сложно автоматически загружать в аналитические системы."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {problems.map((problem) => (
            <span key={problem} className="rounded-full border border-borderline bg-white px-4 py-2 text-sm font-medium text-muted">
              {problem}
            </span>
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading eyebrow="Как работает SheetNorm" title="ИИ помогает создать правило, массовая обработка идёт по проверенным шаблонам" />
        <div className="mt-8">
          <ProcessSteps steps={workSteps} />
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading title="Что получает компания" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {companyValue.map(([title, description]) => (
            <FeatureCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <section id="packages" className="container-page py-14">
        <SectionHeading eyebrow="Конфигурации" title="Team и Enterprise подбираются после пилота" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {sheetNormPackages.map((item) => (
            <PackageCard key={item.name} item={item} />
          ))}
        </div>
        <p className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-900">
          Промышленная конфигурация подбирается после пилотного проекта и тестирования на файлах компании. Нагрузка, количество пользователей и SLA не обещаются без отдельного нагрузочного тестирования.
        </p>
      </section>

      <section className="container-page py-14">
        <div className="rounded-3xl border border-borderline bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Пилот"
            title="Для проверки достаточно 3–5 обезличенных Excel-файлов"
            description="Для пилота достаточно 3–5 обезличенных Excel-файлов и описания ожидаемого результата. По итогам пилота компания получает демонстрацию обработки, оценку применимости решения и рекомендацию по конфигурации Team или Enterprise."
          />
          <Link className="focus-ring mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-700" href="/pilot">
            Запросить пилот
          </Link>
        </div>
      </section>

      <CTASection title="Проверьте SheetNorm на своих форматах" text="Пилот показывает, насколько типовые файлы компании подходят для автоматизации, какие правила нужны и какие ограничения нужно учесть перед production." buttonLabel="Запросить пилот" href="/pilot" />
    </>
  );
}
