import Link from "next/link";
import {
  DarkFeatureSection,
  EditorialSection,
  FinalCTA,
} from "@/components/Editorial";
import {
  FeaturedProductSection,
  PrinciplesStrip,
  RoadmapProductCard,
  StudioBento,
  StudioHeroVisual,
  StudioProcessTimeline,
} from "@/components/StudioSections";
import { developmentProducts } from "@/lib/products";

export default function HomePage() {
  const featuredFuture = developmentProducts.filter((product) =>
    ["docuflow", "tendercheck", "datacheck"].includes(product.slug),
  );
  return (
    <>
      <section className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-10 pb-16 pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:pt-10">
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
            Студия прикладных ИИ-решений
          </p>
          <h1 className="editorial-title mt-6 max-w-3xl text-ink">
            Превращаем ручные процессы в рабочие цифровые инструменты
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            Разрабатываем локальные решения для автоматизации отчётности,
            документов, контроля данных и корпоративных операций.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary"
            >
              Посмотреть продукты
            </Link>
            <Link
              href="/pilot"
              className="rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-ink transition hover:border-primary"
            >
              Как проходит пилот →
            </Link>
          </div>
        </div>
        <StudioHeroVisual />
      </section>
      <PrinciplesStrip
        items={[
          "Локальная обработка",
          "Пилот на обезличенных данных",
          "Проверяемые шаблоны",
          "Внедрение после тестирования",
        ]}
      />

      <EditorialSection
        eyebrow="Направления"
        title="Автоматизируем процессы вокруг данных и документов"
        description="Не начинаем с технологии. Сначала находим повторяемую операцию и формулируем проверяемый результат."
      >
        <StudioBento />
      </EditorialSection>

      <DarkFeatureSection
        eyebrow="Подход FormaOps"
        title="Сначала проверяем эффект. Потом внедряем."
        description="Начинаем с короткого пилота на обезличенных данных и только после проверки результата предлагаем промышленную конфигурацию."
      >
        <StudioProcessTimeline />
      </DarkFeatureSection>

      <EditorialSection
        eyebrow="Первый продукт студии"
        title="SheetNorm готов к контролируемому пилоту"
      >
        <FeaturedProductSection />
      </EditorialSection>

      <EditorialSection
        eyebrow="В разработке"
        title="Следующие продуктовые направления"
        description="На главной показываем только три направления. Полная линейка доступна в каталоге."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featuredFuture.map((product) => (
            <RoadmapProductCard key={product.slug} product={product} />
          ))}
        </div>
        <Link
          href="/products"
          className="mt-8 inline-flex text-sm font-semibold text-primary"
        >
          Смотреть всю продуктовую линейку →
        </Link>
      </EditorialSection>

      <FinalCTA
        title="Есть процесс, который сотрудники повторяют вручную?"
        text="Разберём задачу и проверим возможность автоматизации на коротком пилоте."
      />
    </>
  );
}
