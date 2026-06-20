import type { Package } from "@/lib/packages";
import { StatusBadge } from "@/components/StatusBadge";

type PackageCardProps = {
  item: Package;
};

export function PackageCard({ item }: PackageCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-borderline bg-surface p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-ink">{item.name}</h3>
          <p className="mt-2 text-muted">{item.audience}</p>
        </div>
        <StatusBadge tone={item.badge === "Team" ? "blue" : "green"}>{item.badge}</StatusBadge>
      </div>
      <p className="mt-5 leading-7 text-ink">{item.summary}</p>
      <ul className="mt-6 space-y-3 text-muted">
        {item.items.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
