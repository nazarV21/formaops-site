export function VisualSectionDivider() {
  return (
    <div className="container-page py-2" aria-hidden="true">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-200" />
        <div className="h-2 w-2 rounded-full bg-primary/40" />
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />
      </div>
    </div>
  );
}
