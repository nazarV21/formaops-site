type InterfaceWindowProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export function InterfaceWindow({
  title,
  eyebrow,
  children,
  className = "",
}: InterfaceWindowProps) {
  return (
    <div
      className={[
        "overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50/90 px-5 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="min-w-0">
          {eyebrow ? (
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <p className="truncate text-sm font-semibold text-ink">{title}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
