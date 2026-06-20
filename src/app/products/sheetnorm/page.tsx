import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdvantageCard } from "@/components/AdvantageCard";
import { CompetitorComparisonVisual } from "@/components/CompetitorComparisonVisual";
import { CTASection } from "@/components/CTASection";
import { DataFlowVisual } from "@/components/DataFlowVisual";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { ProductScreenshotFrame } from "@/components/ProductScreenshotFrame";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
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

export default function SheetNormPage() {
  return (
    <>
      <Hero
        eyebrow="Готов к пилоту"
        title={"SheetNorm\nНормализация сложных Excel-отчётов для аналитики"}
        subtitle="Локальная система с ИИ-помощником, которая превращает файлы с объединёнными ячейками, многоуровневыми заголовками, кросс-таблицами и служебными строками в готовые таблицы для 1С, Power BI, SQL и BI-систем."
        note="AI помогает создать правило, пользователь проверяет результат, а повторная обработка выполняется по сохранённому шаблону."
        primaryLabel="Запросить пилот"
        primaryHref="/pilot"
        secondaryLabel="Посмотреть конфигурации"
        secondaryHref="#packages"
        visual={
          <ProductScreenshotFrame
            fallbackSrc="/illustrations/sheetnorm-product-mockup.svg"
            alt="Демонстрационный интерфейс SheetNorm"
            priority
          />
        }
      />

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Исходная проблема"
          title="Excel удобно заполнять вручную, но сложно загружать автоматически"
          description="Компании получают отчёты от филиалов, подрядчиков и подразделений. Такие файлы читаются человеком, но требуют ручной очистки перед загрузкой в аналитические системы."
        />
        <div className="mt-7 flex flex-wrap gap-3">
          {problems.map((problem) => (
            <span
              key={problem}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-muted shadow-sm"
            >
              {problem}
            </span>
          ))}
        </div>
        <Reveal className="mt-10">
          <Image
            src="/illustrations/before-after-excel.svg"
            alt="Excel до и после нормализации в SheetNorm"
            width={1400}
            height={720}
            className="h-auto w-full rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
          />
        </Reveal>
      </section>

      <VisualSectionDivider />

      <section className="container-page py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeading
              eyebrow="Почему SheetNorm"
              title="Подготовка сложной Excel-отчётности как управляемый процесс"
              description="Продукт объединяет работу со сложной структурой, создание правила, проверку результата, повторяемые шаблоны и контроль задач."
            />
            <p className="mt-6 leading-7 text-muted">
              SheetNorm не заменяет Excel, Power Query или BI-системы. Он
              помогает привести исходные отчёты к повторяемому и проверяемому
              формату до загрузки в существующий контур.
            </p>
          </div>
          <Reveal delay={0.08}>
            <Image
              src="/illustrations/why-sheetnorm.svg"
              alt="Шесть ключевых преимуществ SheetNorm"
              width={1200}
              height={760}
              className="h-auto w-full rounded-[2rem] shadow-sm"
            />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sheetNormAdvantages.map((advantage) => (
            <AdvantageCard key={advantage.title} {...advantage} />
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <div className="rounded-[2rem] border border-primary/15 bg-gradient-to-br from-white to-blue-50/70 p-6 shadow-sm sm:p-9">
          <SectionHeading
            eyebrow="Позиционирование"
            title="Не ещё один чат с Excel"
            description="AI используется для создания и уточнения правила. Пользователь проверяет результат, а массовая повторная обработка идёт по сохранённому шаблону."
          />
          <div className="mt-8">
            <DataFlowVisual />
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Место в экосистеме"
          title="Между хаотичными Excel-файлами и корпоративной аналитикой"
          description="Excel, Power Query, Copilot, OpenRefine и Python полезны в своих зонах. SheetNorm закрывает этап подготовки сложных Excel-файлов к повторяемой загрузке и анализу."
        />
        <div className="mt-8">
          <CompetitorComparisonVisual />
        </div>
      </section>

      <VisualSectionDivider />

      <section id="packages" className="container-page py-14">
        <SectionHeading
          eyebrow="Конфигурации после пилота"
          title="Team для отдела, Enterprise для корпоративной инфраструктуры"
          description="Архитектурная схема показывает целевое направление. Точный состав сервисов и параметры определяются только после пилота."
        />
        <Reveal className="mt-10">
          <Image
            src="/illustrations/team-enterprise-architecture.svg"
            alt="Сравнение целевой архитектуры SheetNorm Team и Enterprise"
            width={1400}
            height={800}
            className="h-auto w-full rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
          />
        </Reveal>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {sheetNormPackages.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-ink">{item.name}</h3>
                <StatusBadge tone={item.badge === "Team" ? "blue" : "green"}>
                  После пилота
                </StatusBadge>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 leading-7 text-amber-900">
          Промышленная конфигурация подбирается после пилотного проекта и
          тестирования на файлах компании. Нагрузка, количество пользователей и
          SLA не обещаются без отдельного нагрузочного тестирования.
        </p>
      </section>

      <section className="container-page py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading
            eyebrow="Локальная обработка"
            title="Данные могут оставаться внутри инфраструктуры компании"
            description="Целевая конфигурация предполагает локальный контур: пользователи, SheetNorm, база правил, файловое хранилище и отчёты. Конкретные меры защиты требуют отдельного согласования и аудита."
          />
          <Reveal delay={0.08}>
            <Image
              src="/illustrations/local-deployment.svg"
              alt="Целевой локальный контур развёртывания SheetNorm"
              width={1200}
              height={720}
              className="h-auto w-full rounded-[2rem] shadow-sm"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="Для кого"
          title="Команды с регулярной входящей отчётностью"
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
