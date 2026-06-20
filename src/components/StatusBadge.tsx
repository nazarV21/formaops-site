type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: "blue" | "green" | "slate";
};

export function StatusBadge({ children, tone = "blue" }: StatusBadgeProps) {
  const tones = {
    blue: "border-primary/20 bg-primary/10 text-primary",
    green: "border-secondary/20 bg-secondary/10 text-emerald-700",
    slate: "border-slate-200 bg-slate-100 text-slate-700"
  };

  return (
    <span className={["inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold", tones[tone]].join(" ")}>
      {children}
    </span>
  );
}
