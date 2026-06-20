import { WorkflowVisual } from "@/components/WorkflowVisual";

export function DataFlowVisual() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-50/70 p-4 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">Повторяемый процесс</p>
          <p className="mt-1 text-xs text-muted">
            AI участвует в создании правила, шаблон — в массовой обработке
          </p>
        </div>
        <div className="flex gap-2 text-[10px] font-semibold">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
            AI: создание правила
          </span>
          <span className="rounded-full bg-secondary/10 px-3 py-1 text-emerald-700">
            Шаблон: повторная обработка
          </span>
        </div>
      </div>
      <WorkflowVisual />
    </div>
  );
}
