import type { Metadata } from "next";
import Link from "next/link";
import { AdvantageCard } from "@/components/AdvantageCard";
import { BeforeAfterTableDemo } from "@/components/BeforeAfterTableDemo";
import { CompetitorComparisonVisual } from "@/components/CompetitorComparisonVisual";
import { CTASection } from "@/components/CTASection";
import { DataFlowVisual } from "@/components/DataFlowVisual";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { LocalDeploymentVisual } from "@/components/LocalDeploymentVisual";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SheetNormInterfaceMockup } from "@/components/SheetNormInterfaceMockup";
import { StatsStrip } from "@/components/StatsStrip";
import { VisualSectionDivider } from "@/components/VisualSectionDivider";
import { sheetNormFaq } from "@/lib/demo";
import { sheetNormPackages } from "@/lib/packages";
import { audienceCards, sheetNormAdvantages } from "@/lib/sheetnorm-content";

export const metadata: Metadata = {
  title: "SheetNorm — нормализация сложных Excel-отчётов",
  description:
    "SheetNorm превращает сложные Excel-отчёты в готовые таблицы для 1С, Power BI, SQL и BI-систем. Готов к контролируемому пилоту.",
  openGraph: {
    title: "SheetNorm — нормализация сложных Excel-отчётов",
    description:
      "Локальная система с ИИ-помощником для подготовки Excel-данных к аналитике и корпоративным системам.",
  },
};

const problems = [
  "объединённые ячейки",
  "многоуровневые заголовки",
  "кросс-таблицы",
  "строки «Итого» и «Всего»",
  "разные форматы дат и чисел",
  "служебные строки",
  "ручная подготовка перед загрузкой",
];

const companyValue = [
  [
    "Сокращение ручной подготовки",
    "Меньше времени на очистку и перекладывание данных перед загрузкой.",
  ],
  [
    "Снижение количества ошибок",
    "Правило проверяется на предпросмотре и затем применяется повторяемо.",
  ],
  [
    "Единый формат таблиц",
    "Итоговые файлы проще загружать в 1С, Power BI, SQL и BI-системы.",
  ],
  [
    "Повторяемые шаблоны",
    "Утверждённая логика сохраняется для похожих файлов.",
  ],
  [
    "История операций",
    "Команда видит, какие файлы обработаны и с каким результатом.",
  ],
  [
    "Отчёт качества",
    "Фиксируются строки, колонки, предупреждения и статус результата.",
  ],
  [
    "Локальная обработка",
    "Файлы могут обрабатываться внутри инфраструктуры компании.",
  ],
  [
    "Подготовка данных для BI",
    "Сложные отчёты приводятся к формату, пригодному для аналитики.",
  ],
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
        visual={<SheetNormInterfaceMockup compact />}
      />

      <StatsStrip />
      <VisualSectionDivider />

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Проблема"
          title="Excel удобно заполнять вручную, но сложно загружать автоматически"
          description="Компании регулярно получают Excel-файлы от филиалов, подрядчиков и подразделений. Такие отчёты хорошо читаются человеком, но требуют ручной очистки перед загрузкой в аналитические системы."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {problems.map((problem) => (
            <span
              key={problem}
              className="rounded-full border border-borderline bg-white px-4 py-2 text-sm font-medium text-muted shadow-sm"
            >
              {problem}
            </span>
          ))}
        </div>
        <Reveal className="mt-10">
          <BeforeAfterTableDemo />
        </Reveal>
      </section>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Как работает SheetNorm"
          title="AI помогает создать правило, массовая обработка идёт по проверенным шаблонам"
          description="Пользователь сохраняет контроль: проверяет структуру, уточняет инструкцию и подтверждает результат до повторного применения."
        />
        <div className="mt-8">
          <DataFlowVisual />
        </div>
      </section>

      <VisualSectionDivider />

      <section className="container-page py-14">
        <SectionHeading title="Что получает компания" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {companyValue.map(([title, description]) => (
            <FeatureCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:items-center sm:p-8">
          <SectionHeading
            eyebrow="Подготовка до BI"
            title="Когда обычных Excel-инструментов недостаточно"
            description="SheetNorm полезен там, где файлы поступают в разных форматах, содержат объединённые ячейки, многоуровневые заголовки, кросс-таблицы и служебные строки."
          />
          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
            <p className="text-lg font-semibold text-ink">
              Не замена Power Query и BI-инструментам
            </p>
            <p className="mt-3 leading-7 text-muted">
              SheetNorm помогает подготовить и унифицировать данные до загрузки
              в существующий аналитический контур. Power Query, 1С, Power BI,
              SQL и корпоративные хранилища остаются системами назначения.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Преимущества"
          title="Почему SheetNorm закрывает задачу, которую сложно решить обычными Excel-инструментами"
          description="SheetNorm не заменяет Excel, Power Query или BI-системы. Он помогает подготовить данные до загрузки в них: привести сложные Excel-отчёты к повторяемому и проверяемому формату."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sheetNormAdvantages.map((advantage) => (
            <AdvantageCard key={advantage.title} {...advantage} />
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <div className="rounded-[2rem] border border-primary/15 bg-gradient-to-br from-white to-blue-50/70 p-6 shadow-sm sm:p-8">
          <SectionHeading
            eyebrow="Позиционирование"
            title="Не ещё один чат с Excel"
            description="SheetNorm — не просто AI-чат для таблиц. Продукт строится вокруг повторяемого процесса: загрузка файла, анализ структуры, создание правила, проверка результата, сохранение шаблона и повторная обработка похожих файлов."
          />
          <div className="mt-8">
            <DataFlowVisual />
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Экосистема"
          title="Где место SheetNorm в существующей экосистеме"
          description="Компании уже используют Excel, Power Query, BI-системы и ручные скрипты. Каждый инструмент полезен в своей зоне, а SheetNorm закрывает промежуток между хаотичными Excel-файлами и корпоративной аналитикой."
        />
        <div className="mt-8">
          <CompetitorComparisonVisual />
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Для кого"
          title="Особенно полезно командам с регулярной входящей отчётностью"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {audienceCards.map(([title, description], index) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/20"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="packages" className="container-page py-14">
        <SectionHeading
          eyebrow="Конфигурации после пилота"
          title="Team для отдела, Enterprise для корпоративной инфраструктуры"
          description="Карточки показывают целевую архитектуру. Точный состав и параметры определяются только после пилота."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {sheetNormPackages.map((item) => (
            <PackageCard key={item.name} item={item} />
          ))}
        </div>
        <p className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-900">
          Промышленная конфигурация подбирается после пилотного проекта и
          тестирования на файлах компании. Нагрузка, количество пользователей и
          SLA не обещаются без отдельного нагрузочного тестирования.
        </p>
      </section>

      <section className="container-page grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading
          eyebrow="Локальная обработка"
          title="Без обязательной передачи файлов во внешние AI API"
          description="Целевая конфигурация может работать внутри инфраструктуры компании. Конкретные меры защиты, права доступа и хранение файлов требуют отдельного согласования и аудита."
        />
        <LocalDeploymentVisual />
      </section>

      <VisualSectionDivider />

      <section className="container-page py-14">
        <div className="rounded-3xl border border-borderline bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Пилот"
            title="Для проверки достаточно 3–5 обезличенных Excel-файлов"
            description="По итогам пилота компания получает демонстрацию обработки, оценку применимости решения и рекомендацию по конфигурации Team или Enterprise."
          />
          <Link
            className="focus-ring cta-glow mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            href="/pilot"
          >
            Запросить пилот
          </Link>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Частые вопросы о SheetNorm и пилоте"
        />
        <div className="mt-8">
          <FAQAccordion items={sheetNormFaq} />
        </div>
      </section>

      <CTASection
        title="Проверьте SheetNorm на своих форматах"
        text="Пилот показывает, насколько типовые файлы компании подходят для автоматизации, какие правила нужны и какие ограничения следует учесть перед промышленной эксплуатацией."
        buttonLabel="Запросить пилот"
        href="/pilot"
      />
    </>
  );
}
