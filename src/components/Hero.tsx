import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  note?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  visual?: React.ReactNode;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  note,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  visual
}: HeroProps) {
  return (
    <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
      <div>
        {eyebrow ? (
          <div className="mb-6">
            <StatusBadge tone="green">{eyebrow}</StatusBadge>
          </div>
        ) : null}
        <h1 className="max-w-4xl whitespace-pre-line text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-muted">{subtitle}</p>
        {note ? <p className="mt-5 max-w-3xl leading-8 text-slate-600">{note}</p> : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="focus-ring rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-700" href={primaryHref}>
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link className="focus-ring rounded-full border border-borderline bg-white px-6 py-3 font-semibold text-ink transition hover:border-primary hover:text-primary" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
      {visual ? <div>{visual}</div> : null}
    </section>
  );
}
