import Link from "next/link";
import type { Product } from "@/lib/products";
import { StatusBadge } from "@/components/StatusBadge";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const isPilot = product.status === "pilot";

  return (
    <article className="flex h-full flex-col rounded-3xl border border-borderline bg-surface p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold text-ink">{product.name}</h3>
        <StatusBadge tone={isPilot ? "green" : "slate"}>{product.statusLabel}</StatusBadge>
      </div>
      <p className="mt-4 flex-1 leading-7 text-muted">{product.description}</p>
      <div className={["mt-6 flex flex-wrap gap-3", compact ? "text-sm" : ""].join(" ")}>
        {product.href ? (
          <Link className="focus-ring rounded-full bg-primary px-5 py-3 font-semibold text-white transition hover:bg-blue-700" href={product.href}>
            Подробнее
          </Link>
        ) : null}
        <Link
          className="focus-ring rounded-full border border-borderline px-5 py-3 font-semibold text-ink transition hover:border-primary hover:text-primary"
          href={isPilot ? "/pilot" : "/contacts"}
        >
          {isPilot ? "Запросить пилот" : "Сообщить об интересе"}
        </Link>
      </div>
    </article>
  );
}
