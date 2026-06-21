import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, InternalPageHero } from "@/components/Editorial";
import {
  FeaturedProductSection,
  RoadmapProductCard,
} from "@/components/StudioSections";
import { developmentProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Продукты — FormaOps",
  description:
    "Инструменты FormaOps для подготовки данных, документов, отчётности и проверок.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Продукты — FormaOps",
    description: "Продукты для повторяемых корпоративных процессов.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Продукты FormaOps"
        title={"Инструменты для повторяемых\nкорпоративных процессов"}
        description="Создаём продукты для задач, которые компании регулярно выполняют вручную: подготовки данных, документов, отчётности и проверок."
      >
        <div className="flex lg:justify-end">
          <Link
            href="/contacts"
            className="rounded-full bg-ink px-6 py-3.5 font-semibold text-white hover:bg-primary"
          >
            Обсудить задачу
          </Link>
        </div>
      </InternalPageHero>
      <section className="container-page pb-12">
        <div className="min-h-[520px] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-gradient-to-br from-white to-blue-50/70 p-7 sm:p-10">
          <FeaturedProductSection />
        </div>
      </section>
      <section className="container-page section-space">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Будущие продукты
          </p>
          <h2 className="section-title mt-4 text-ink">
            Направления в разработке
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Они не представлены как готовые продукты: карточки показывают
            задачи, которые мы исследуем и прототипируем.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {developmentProducts.map((product) => (
            <RoadmapProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <FinalCTA
        title="Не нашли подходящий продукт?"
        text="Разберём повторяемый процесс вашей компании и оценим возможность создания пилотного решения."
        label="Обсудить индивидуальный пилот"
      />
    </>
  );
}
