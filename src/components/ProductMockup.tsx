"use client";

import { motion, useReducedMotion } from "motion/react";
import { InterfaceWindow } from "@/components/InterfaceWindow";
import { sheetNormMockup } from "@/lib/demo";

const navigation = [
  "Dashboard",
  "Конвертация",
  "AI-помощник",
  "Шаблоны",
  "Задачи",
  "Отчёты",
];

type ProductMockupProps = {
  compact?: boolean;
};

export function ProductMockup({ compact = false }: ProductMockupProps) {
  const reduceMotion = useReducedMotion();

  return (
    <InterfaceWindow title="SheetNorm" eyebrow="Демонстрационный интерфейс">
      <div className="grid min-h-[26rem] grid-cols-[4.75rem_1fr] bg-slate-50 sm:grid-cols-[10rem_1fr]">
        <aside className="border-r border-slate-200 bg-slate-950 p-3 text-white sm:p-4">
          <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-xl bg-primary font-bold">
            S
          </div>
          <nav className="space-y-1.5">
            {navigation.map((item, index) => (
              <div
                key={item}
                className={[
                  "rounded-xl px-2 py-2 text-[10px] sm:px-3 sm:text-xs",
                  index === 4
                    ? "bg-white/12 font-semibold text-white"
                    : "text-slate-400",
                ].join(" ")}
              >
                <span className="sm:hidden">{item.slice(0, 3)}</span>
                <span className="hidden sm:inline">{item}</span>
              </div>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 p-3 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                Задача обработки
              </p>
              <h3 className="mt-1 text-sm font-semibold text-ink sm:text-lg">
                {sheetNormMockup.fileName}
              </h3>
              <p className="mt-1 text-[10px] text-muted sm:text-xs">
                Шаблон: {sheetNormMockup.template}
              </p>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-700">
              {sheetNormMockup.status}
            </span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
              initial={reduceMotion ? { width: "100%" } : { width: 0 }}
              whileInView={{ width: `${sheetNormMockup.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
          </div>

          <div
            className={[
              "mt-5 grid gap-3",
              compact ? "lg:grid-cols-1" : "lg:grid-cols-[0.9fr_1.1fr]",
            ].join(" ")}
          >
            <div>
              <p className="mb-3 text-xs font-semibold text-ink">
                Отчёт качества
              </p>
              <div className="grid grid-cols-2 gap-2">
                {sheetNormMockup.quality.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-xl border border-slate-200 bg-white p-3"
                  >
                    <p className="text-[9px] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-xs font-semibold text-ink">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <p className="mb-3 text-xs font-semibold text-ink">
                Предпросмотр результата
              </p>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                {sheetNormMockup.preview.map((row, rowIndex) => (
                  <div
                    key={row.join("-")}
                    className={[
                      "grid grid-cols-3 border-b border-slate-100 last:border-0",
                      rowIndex === 0 ? "bg-blue-50" : "",
                    ].join(" ")}
                  >
                    {row.map((cell) => (
                      <div
                        key={cell}
                        className="truncate border-r border-slate-100 px-2 py-2 text-[9px] text-slate-600 last:border-0"
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
                <p className="text-[9px] font-medium text-amber-800">
                  2 предупреждения требуют проверки
                </p>
                <button
                  type="button"
                  className="rounded-lg bg-ink px-3 py-1.5 text-[9px] font-semibold text-white"
                >
                  Скачать результат
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InterfaceWindow>
  );
}
