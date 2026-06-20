"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { afterTable, beforeTable } from "@/lib/demo";

type Mode = "before" | "after" | "compare";

function DemoTable({
  title,
  rows,
  after = false,
}: {
  title: string;
  rows: string[][];
  after?: boolean;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <span
          className={[
            "rounded-full px-2.5 py-1 text-[10px] font-semibold",
            after
              ? "bg-emerald-50 text-emerald-700"
              : "bg-amber-50 text-amber-700",
          ].join(" ")}
        >
          {after ? "готово к загрузке" : "требует подготовки"}
        </span>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <div className={after ? "min-w-[34rem]" : "min-w-[27rem]"}>
          {rows.map((row, rowIndex) => (
            <div
              key={`${title}-${rowIndex}`}
              className={[
                "grid border-b border-slate-100 last:border-0",
                after ? "grid-cols-5" : "grid-cols-4",
                rowIndex < 2 && !after
                  ? "bg-amber-50/70"
                  : rowIndex === 0
                    ? "bg-emerald-50"
                    : "bg-white",
              ].join(" ")}
            >
              {row.map((cell, cellIndex) => (
                <div
                  key={`${cell}-${cellIndex}`}
                  className={[
                    "border-r border-slate-100 px-2.5 py-2 text-[10px] text-slate-600 last:border-0",
                    !after && rowIndex === 0 && cellIndex === 0
                      ? "col-span-2 font-semibold"
                      : "",
                    cell === "Итого" ? "font-semibold text-amber-700" : "",
                  ].join(" ")}
                >
                  {cell || "—"}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterTableDemo() {
  const [mode, setMode] = useState<Mode>("compare");
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-4 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">
            Интерактивное сравнение
          </p>
          <p className="mt-1 text-xs text-muted">Все данные синтетические</p>
        </div>
        <div className="flex rounded-full border border-slate-200 bg-white p-1">
          {(["before", "after", "compare"] as Mode[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              className={[
                "focus-ring rounded-full px-3 py-1.5 text-xs font-semibold transition",
                mode === item
                  ? "bg-ink text-white shadow-sm"
                  : "text-muted hover:text-ink",
              ].join(" ")}
            >
              {item === "before"
                ? "До"
                : item === "after"
                  ? "После"
                  : "Сравнить"}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className={mode === "compare" ? "grid gap-4 lg:grid-cols-2" : ""}
        >
          {mode !== "after" ? (
            <DemoTable
              title="Как файл выглядит до обработки"
              rows={beforeTable}
            />
          ) : null}
          {mode !== "before" ? (
            <DemoTable title="После SheetNorm" rows={afterTable} after />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
