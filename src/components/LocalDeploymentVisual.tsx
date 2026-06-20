"use client";

import { motion, useReducedMotion } from "motion/react";
import { DataFlowLine } from "@/components/DataFlowLine";

const nodes = [
  ["Пользователи", "Рабочая группа"],
  ["SheetNorm", "Web App"],
  ["База правил", "Проверенные шаблоны"],
  ["Хранилище", "Файлы и результаты"],
];

export function LocalDeploymentVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative rounded-[2rem] border border-primary/20 bg-white p-5 shadow-soft sm:p-7">
      <div className="absolute -right-3 -top-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-500 shadow-sm">
        Внешнее облако
        <span className="ml-2 text-rose-500">не обязательно</span>
      </div>
      <div className="rounded-[1.5rem] border-2 border-dashed border-primary/25 bg-blue-50/40 p-4 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Контур компании
            </p>
            <p className="mt-1 text-sm text-muted">
              Целевая локальная конфигурация
            </p>
          </div>
          <motion.span
            className="h-3 w-3 rounded-full bg-secondary"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.45, 1], opacity: [0.5, 1, 0.5] }
            }
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        </div>
        <div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {nodes.map(([title, text], index) => (
            <div key={title} className="contents">
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={[
                  "rounded-2xl border bg-white p-4 shadow-sm",
                  title === "SheetNorm"
                    ? "border-primary/30 ring-4 ring-primary/5"
                    : "border-slate-200",
                ].join(" ")}
              >
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="mt-1 text-xs text-muted">{text}</p>
              </motion.div>
              {index < nodes.length - 1 ? (
                <div className="flex justify-center">
                  <DataFlowLine className="hidden lg:block" />
                  <DataFlowLine vertical className="lg:hidden" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        Конкретная архитектура, права доступа и меры защиты определяются после
        пилота, аудита требований и согласования инфраструктуры.
      </p>
    </div>
  );
}
