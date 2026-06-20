import { AnimatedHeroDiagram } from "@/components/AnimatedHeroDiagram";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { LocalDeploymentVisual } from "@/components/LocalDeploymentVisual";
import { PilotTimelineVisual } from "@/components/PilotTimelineVisual";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SheetNormInterfaceMockup } from "@/components/SheetNormInterfaceMockup";
import { StatsStrip } from "@/components/StatsStrip";
import { VisualSectionDivider } from "@/components/VisualSectionDivider";
import { developmentProducts, readyProducts } from "@/lib/products";

const focusAreas = [
  {
    title: "Excel и отчётность",
    description:
      "Автоматизация обработки сложных таблиц, кросс-таблиц, объединённых ячеек и нестандартных форматов.",
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
    title: "Локальные ИИ-инструменты",
    description:
      "Решения, которые могут работать внутри инфраструктуры компании.",
  },
];

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
        visual={<AnimatedHeroDiagram />}
      />

      <StatsStrip />
      <VisualSectionDivider />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Что мы делаем"
          title="Автоматизация там, где ручная работа держится на Excel, документах и проверках"
          description="Визуализируем процесс, формализуем правила и превращаем повторяемую ручную работу в контролируемый инструмент."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="section-surface p-1 sm:p-6">
          <SectionHeading
            eyebrow="Первый продукт"
            title="SheetNorm выглядит и работает как прикладной продукт"
            description="Интерфейс объединяет загрузку файлов, AI-помощник, библиотеку шаблонов, задачи обработки и контроль качества результата."
          />
          <div className="mt-10 grid items-start gap-7 xl:grid-cols-[0.7fr_1.3fr]">
            <ProductCard product={sheetNorm} />
            <Reveal delay={0.08}>
              <SheetNormInterfaceMockup />
            </Reveal>
          </div>
        </div>
      </section>

      <VisualSectionDivider />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading
          eyebrow="Локальная обработка"
          title="Данные остаются внутри инфраструктуры компании"
          description="SheetNorm может разворачиваться локально. Для пилота используются обезличенные файлы, а промышленная конфигурация подбирается после тестирования и согласования требований."
        />
        <Reveal delay={0.08}>
          <LocalDeploymentVisual />
        </Reveal>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Продукты в разработке"
          title="Линейка решений вокруг регулярных операционных задач"
          description="Сейчас доступен SheetNorm. Следующие продукты находятся в стадии проектирования и прототипирования — их визуалы показывают направление, а не готовую функциональность."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {developmentProducts.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
        </div>
      </section>

      <VisualSectionDivider />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Как проходит пилот"
          title="Семь шагов от задачи до рекомендации по внедрению"
          description="Пилот проверяет применимость решения на обезличенных данных и не подменяет промышленное тестирование."
        />
        <div className="mt-10">
          <PilotTimelineVisual />
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
