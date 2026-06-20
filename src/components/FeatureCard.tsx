type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-borderline bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </article>
  );
}
