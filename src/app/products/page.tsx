import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { developmentProducts, readyProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Продукты — FormaOps",
  description:
    "Каталог продуктов FormaOps: SheetNorm готов к пилоту, DocuFlow, TenderCheck, ActFlow и DataCheck находятся в разработке.",
  openGraph: {
    title: "Продукты — FormaOps",
    description:
      "Каталог прикладных ИИ-продуктов FormaOps для Excel, документов, отчётности и контроля данных.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Hero
        eyebrow="Каталог продуктов"
        title="Продукты FormaOps"
        subtitle="Прикладные ИИ-инструменты для повторяемых бизнес-процессов: Excel, документы, отчётность, проверка данных и подготовка к аналитике."
        primaryLabel="Запросить пилот"
        primaryHref="/pilot"
        secondaryLabel="Обсудить задачу"
        secondaryHref="/contacts"
      />

      <section className="container-page py-12">
        <SectionHeading title="Готов к пилоту" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {readyProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading title="В разработке" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {developmentProducts.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <div className="rounded-3xl border border-borderline bg-white p-8 shadow-sm">
          <SectionHeading
            title="Индивидуальный пилот"
            description="Если у компании есть регулярный ручной процесс с Excel-файлами, документами или отчётностью, FormaOps может оценить возможность автоматизации и подготовить пилотное решение."
          />
          <Link
            className="focus-ring mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            href="/contacts"
          >
            Обсудить задачу
          </Link>
        </div>
      </section>

      <CTASection
        title="Начните с проверки на своих данных"
        text="Пилот помогает понять применимость решения, ограничения и будущую конфигурацию до промышленного внедрения."
        buttonLabel="Запросить пилот"
        href="/pilot"
      />
    </>
  );
}
