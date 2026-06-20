import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ProductScreenshotFrame } from "@/components/ProductScreenshotFrame";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import { VisualSectionDivider } from "@/components/VisualSectionDivider";
import { developmentProducts } from "@/lib/products";

const focusAreas = [
  {
    title: "Excel и отчётность",
    description:
      "Сложные таблицы, кросс-таблицы, объединённые ячейки и нестандартные форматы.",
  },
  {
    title: "Документы и шаблоны",
    description:
      "Подготовка, проверка и заполнение документов по корпоративным правилам.",
  },
  {
    title: "Контроль данных",
    description:
      "Поиск ошибок, пропусков, дубликатов и несоответствий в таблицах.",
  },
  {
    title: "Локальные инструменты",
    description:
      "Решения, которые могут работать внутри инфраструктуры компании.",
  },
];

const studioSteps = [
  [
    "01",
    "Фиксируем процесс",
    "Разбираем ручную операцию и ожидаемый результат.",
  ],
  [
    "02",
    "Проверяем данные",
    "Работаем с обезличенными примерами и ограничениями.",
  ],
  ["03", "Собираем пилот", "Показываем рабочий сценарий на типовых данных."],
  [
    "04",
    "Предлагаем конфигурацию",
    "Оцениваем эффект и требования к внедрению.",
  ],
];

const sheetNormBenefits = [
  "сложные Excel-структуры",
  "AI-помощник с проверкой человеком",
  "повторяемые шаблоны обработки",
  "история задач и отчёт качества",
];

export default function HomePage() {
  return (
    <>
      <Hero
        title={"FormaOps\nПрикладные ИИ-инструменты для бизнеса"}
        subtitle="Превращаем хаос в рабочие инструменты."
        note="Разрабатываем локальные продукты для автоматизации работы с Excel-файлами, документами, отчётностью и корпоративными данными."
        primaryLabel="Посмотреть продукты"
        primaryHref="/products"
        secondaryLabel="Запросить пилот"
        secondaryHref="/pilot"
        visual={
          <Image
            src="/illustrations/hero-studio-flow.svg"
            alt="FormaOps превращает хаотичные файлы и документы в рабочие инструменты"
            width={1200}
            height={820}
            priority
            className="h-auto w-full drop-shadow-[0_28px_55px_rgba(15,23,42,0.12)]"
          />
        }
      />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Что автоматизируем"
          title="Операционные задачи вокруг данных и документов"
          description="Фокусируемся на процессах, где результат можно проверить, повторить и измерить — без абстрактного «ИИ ради ИИ»."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <VisualSectionDivider />

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <SectionHeading
            eyebrow="Как работаем"
            title="От конкретной задачи — к проверенному пилоту"
            description="Сначала подтверждаем применимость решения, затем обсуждаем промышленную конфигурацию."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {studioSteps.map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/20"
              >
                <span className="text-xs font-bold tracking-[0.18em] text-primary">
                  {number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white to-blue-50/60 p-6 shadow-sm sm:p-10">
          <div className="grid items-center gap-10 xl:grid-cols-[0.68fr_1.32fr]">
            <div>
              <StatusBadge tone="green">Готов к пилоту</StatusBadge>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Первый продукт студии
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink">
                SheetNorm
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                Локальная система с ИИ-помощником для нормализации сложных
                Excel-отчётов и подготовки данных к 1С, Power BI, SQL и BI.
              </p>
              <ul className="mt-6 space-y-3">
                {sheetNormBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-emerald-700">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products/sheetnorm"
                  className="focus-ring cta-glow rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Подробнее
                </Link>
                <Link
                  href="/pilot"
                  className="focus-ring rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-primary"
                >
                  Запросить пилот
                </Link>
              </div>
            </div>
            <Reveal delay={0.08}>
              <ProductScreenshotFrame
                fallbackSrc="/illustrations/sheetnorm-product-mockup.svg"
                alt="Демонстрационный интерфейс SheetNorm"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="До и после"
          title="Сложный Excel → готовые данные"
          description="Визуальный пример показывает саму задачу продукта: превратить удобный для ручного заполнения отчёт в плоскую проверяемую таблицу."
        />
        <Reveal className="mt-10">
          <Image
            src="/illustrations/before-after-excel.svg"
            alt="Сравнение сложного Excel-отчёта до обработки и нормализованных данных после SheetNorm"
            width={1400}
            height={720}
            className="h-auto w-full rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
          />
        </Reveal>
      </section>

      <VisualSectionDivider />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Продукты в разработке"
          title="Линейка решений для регулярных операционных задач"
          description="Следующие продукты находятся в стадии проектирования и прототипирования. Их визуалы показывают направление, а не готовую функциональность."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {developmentProducts.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Пилот"
          title="Семь шагов до рекомендации по внедрению"
          description="Пилот проверяет применимость решения на обезличенных данных и не подменяет промышленное тестирование."
        />
        <Reveal className="mt-10">
          <Image
            src="/illustrations/pilot-timeline.svg"
            alt="Этапы пилотного внедрения FormaOps"
            width={1400}
            height={440}
            className="h-auto w-full rounded-[2rem] shadow-sm"
          />
        </Reveal>
      </section>

      <CTASection
        title="Хотите проверить решение на своих файлах?"
        text="Начните с пилота на обезличенных данных компании. Это позволит оценить применимость решения до покупки и промышленного внедрения."
        buttonLabel="Запросить пилот"
        href="/pilot"
      />
    </>
  );
}
