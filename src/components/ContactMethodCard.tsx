type ContactMethodCardProps = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};
export function ContactMethodCard({
  label,
  value,
  href,
  icon,
}: ContactMethodCardProps) {
  const content = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-primary">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.14em] text-slate-400">
          {label}
        </span>
        <span className="mt-1 block text-lg font-semibold text-ink">
          {value}
        </span>
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      className="focus-ring flex items-center gap-4 rounded-xl py-3 transition hover:translate-x-1"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4 rounded-xl py-3">{content}</div>
  );
}
