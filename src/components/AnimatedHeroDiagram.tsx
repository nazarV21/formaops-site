"use client";

import { motion, useReducedMotion } from "motion/react";
import { DataFlowLine } from "@/components/DataFlowLine";
import { FloatingCards } from "@/components/FloatingCards";
import { InterfaceWindow } from "@/components/InterfaceWindow";

const stages = [
  {
    label: "Excel-файл",
    badge: "исходник",
    content: (
      <div className="grid grid-cols-3 gap-1 text-[9px]">
        <div className="col-span-2 rounded bg-blue-100 p-1.5 font-semibold">
          Отчёт филиала
        </div>
        <div className="rounded bg-slate-100 p-1.5">Май</div>
        <div className="rounded bg-slate-100 p-1.5">Отдел</div>
        <div className="rounded bg-slate-100 p-1.5">План</div>
        <div className="rounded bg-slate-100 p-1.5">Факт</div>
        <div className="rounded bg-amber-100 p-1.5">Итого</div>
        <div className="rounded bg-slate-50 p-1.5">—</div>
        <div className="rounded bg-rose-50 p-1.5">1 240,5</div>
      </div>
    ),
  },
  {
    label: "ИИ-помощник",
    badge: "анализ структуры",
    content: (
      <div className="space-y-2">
        <p className="rounded-xl bg-blue-50 p-2 text-[10px] leading-4 text-slate-700">
          Заголовки на строке 4. Удалить «Итого». Месяцы перенести в колонку
          «Период».
        </p>
        <div className="flex flex-wrap gap-1">
          <span className="rounded-full bg-primary/10 px-2 py-1 text-[9px] font-semibold text-primary">
            анализ структуры
          </span>
          <span className="rounded-full bg-secondary/10 px-2 py-1 text-[9px] font-semibold text-emerald-700">
            создание правила
          </span>
        </div>
      </div>
    ),
  },
  {
    label: "Шаблон",
    badge: "проверено",
    content: (
      <div className="space-y-1.5 rounded-xl border border-slate-200 bg-slate-50 p-2 text-[10px]">
        <div className="flex justify-between gap-2">
          <span className="text-slate-500">Правило</span>
          <span className="font-semibold text-ink">Отчёт филиала</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-slate-500">Заголовок</span>
          <span>строка 4</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-slate-500">Разворот</span>
          <span>месяцы → период</span>
        </div>
      </div>
    ),
  },
  {
    label: "Результат",
    badge: "готово для BI",
    content: (
      <div className="space-y-1 text-[9px]">
        {[
          ["Отдел", "Период", "Значение"],
          ["01", "2026-05", "124 500"],
          ["02", "2026-05", "98 240"],
        ].map((row, index) => (
          <div
            key={row.join("-")}
            className={[
              "grid grid-cols-3 gap-1 rounded p-1.5",
              index === 0 ? "bg-emerald-50 font-semibold" : "bg-slate-50",
            ].join(" ")}
          >
            {row.map((cell) => (
              <span key={cell}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    ),
  },
];

export function AnimatedHeroDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <InterfaceWindow title="Поток нормализации" eyebrow="SheetNorm workflow">
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-5">
        <motion.div
          className="absolute right-5 top-5 h-2 w-2 rounded-full bg-secondary"
          animate={
            reduceMotion
              ? undefined
              : { scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }
          }
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <div className="grid items-center gap-3 xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {stages.map((stage, index) => (
            <div key={stage.label} className="contents">
              <FloatingCards
                className={index % 2 === 0 ? "" : "lg:translate-y-4"}
              >
                <motion.article
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.12 * index, duration: 0.45 }}
                  className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-ink">
                      {stage.label}
                    </p>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] font-semibold uppercase tracking-wide text-slate-500">
                      {stage.badge}
                    </span>
                  </div>
                  {stage.content}
                </motion.article>
              </FloatingCards>
              {index < stages.length - 1 ? (
                <div className="flex justify-center">
                  <DataFlowLine className="hidden xl:block" />
                  <DataFlowLine vertical className="xl:hidden" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </InterfaceWindow>
  );
}
