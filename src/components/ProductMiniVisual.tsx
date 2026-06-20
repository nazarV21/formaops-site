"use client";

import { motion, useReducedMotion } from "motion/react";

type ProductMiniVisualProps = {
  slug: string;
};

const visualRows: Record<string, string[]> = {
  sheetnorm: ["Сложная таблица", "Правило", "Готовые данные"],
  docuflow: ["Шаблон документа", "Поля", "Готовый документ"],
  tendercheck: ["Требования", "Сроки", "Чек-лист"],
  actflow: ["Исходные данные", "Акт", "Согласование"],
  datacheck: ["Таблица", "Проверки", "Предупреждения"],
};

export function ProductMiniVisual({ slug }: ProductMiniVisualProps) {
  const reduceMotion = useReducedMotion();
  const rows = visualRows[slug] || visualRows.sheetnorm;
  const isReady = slug === "sheetnorm";

  return (
    <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
        {rows.map((row, index) => (
          <div key={row} className="contents">
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.04 }}
              className={[
                "min-h-14 rounded-xl border bg-white p-2 text-[10px] font-semibold leading-4 shadow-sm",
                index === rows.length - 1 && isReady
                  ? "border-emerald-200 text-emerald-700"
                  : "border-slate-200 text-slate-600",
              ].join(" ")}
            >
              {row}
            </motion.div>
            {index < rows.length - 1 ? (
              <motion.span
                animate={reduceMotion ? undefined : { x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="text-xs text-primary"
              >
                →
              </motion.span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
