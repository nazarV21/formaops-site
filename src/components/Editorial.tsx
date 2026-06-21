import Link from "next/link";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h1 className="editorial-title mt-5 text-ink">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {description}
      </p>
    </div>
  );
}

export function InternalPageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="container-page section-space pb-12">
      <div
        className={
          children
            ? "grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"
            : "max-w-4xl"
        }
      >
        <PageIntro eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </section>
  );
}

export function EditorialSection({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={["container-page section-space", className].join(" ")}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="section-title mt-4 text-ink">{title}</h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function DarkFeatureSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-8 bg-[#0f172a] text-white sm:my-12">
      <div className="container-page section-space">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="section-title mt-4 max-w-3xl text-white">{title}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          {description}
        </p>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function InlineNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
      {children}
    </div>
  );
}

export function FinalCTA({
  title,
  text,
  label = "Обсудить задачу",
  href = "/contacts",
}: {
  title: string;
  text: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="overflow-hidden rounded-[2rem] bg-[#0f172a] px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
        <div>
          <h2 className="section-title max-w-3xl text-white">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            {text}
          </p>
        </div>
        <Link
          href={href}
          className="focus-ring mt-7 inline-flex shrink-0 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-blue-50 lg:mt-0"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
