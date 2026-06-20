import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import { developmentProducts, readyProducts } from "@/lib/products";
import { pilotSteps } from "@/lib/site";

const focusAreas = [
  {
    title: "Excel и отчётность",
    description: "Автоматизация обработки сложных таблиц, кросс-таблиц, объединённых ячеек и нестандартных форматов."
  },
  {
    title: "Документы и шаблоны",
    description: "Подготовка, проверка и заполнение документов по корпоративным правилам."
  },
  {
    title: "Контроль данных",
    description: "Поиск ошибок, пропусков, дубликатов и несоответствий в таблицах."
  },
  {
    title: "Локальные ИИ-инструменты",
    description: "Решения, которые могут работать внутри инфраструктуры компании."
  }
];

function FlowVisual() {
  const steps = [
    ["Хаотичные файлы", "Excel-отчёты, служебные строки, разные форматы"],
    ["ИИ-инструмент", "Анализ структуры, правило, предпросмотр"],
    ["Готовые данные", "Таблицы для 1С, Power BI, SQL и BI"]
  ];

  return (
    <div className="rounded-[2rem] border border-borderline bg-white p-6 shadow-soft">
      <div className="mb-6 flex items-center justify-between gap-4">
        <StatusBadge tone="blue">Локальная обработка</StatusBadge>
        <StatusBadge tone="green">После пилота</StatusBadge>
      </div>
      <div className="grid gap-4">
        {steps.map(([title, text], index) => (
          <div key={title} className="rounded-2xl border border-borderline bg-slate-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</div>
              <div>
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
              </div>
            </div>
            {index < 2 ? <div className="mx-auto mt-4 h-6 w-px bg-borderline" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const sheetNorm = readyProducts[0];

  return (
    <>
      <Hero
        title={"FormaOps\nПрикладные ИИ-инструменты для бизнеса"}
        subtitle="Разрабатываем локальные продукты для автоматизации работы с Excel-файлами, документами, отчётностью и корпоративными данными."
        note="Первый продукт студии — SheetNorm, система для превращения сложных Excel-отчётов в готовые данные для 1С, Power BI, SQL и BI-аналитики."
        primaryLabel="Посмотреть продукты"
        primaryHref="/products"
        secondaryLabel="Запросить пилот"
        secondaryHref="/pilot"
        visual={<FlowVisual />}
      />

      <section className="container-page py-16">
        <SectionHeading eyebrow="Что мы делаем" title="Прикладная автоматизация там, где ручная работа держится на Excel, документах и проверках" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Первый продукт" title="SheetNorm готов к контролируемому пилоту" />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <ProductCard product={sheetNorm} />
          <div className="rounded-3xl border border-borderline bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-ink">Какую задачу закрывает</h3>
            <p className="mt-4 leading-8 text-muted">
              SheetNorm помогает превратить файлы с объединёнными ячейками, многоуровневыми заголовками, кросс-таблицами и итоговыми строками в повторяемый формат для загрузки в корпоративные системы.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="focus-ring rounded-full bg-primary px-5 py-3 font-semibold text-white transition hover:bg-blue-700" href="/products/sheetnorm">
                Подробнее
              </Link>
              <Link className="focus-ring rounded-full border border-borderline px-5 py-3 font-semibold text-ink transition hover:border-primary hover:text-primary" href="/pilot">
                Запросить демо
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Продукты в разработке"
          title="Линейка решений развивается вокруг регулярных операционных задач"
          description="Мы развиваем линейку прикладных ИИ-продуктов. Сейчас доступен SheetNorm, следующие решения находятся в стадии проектирования и прототипирования."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {developmentProducts.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Как проходит пилот" title="Короткая проверка на реальных обезличенных данных до покупки и внедрения" />
        <div className="mt-10">
          <ProcessSteps steps={pilotSteps} />
        </div>
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
