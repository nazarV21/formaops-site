"use client";

import { motion, useReducedMotion } from "motion/react";
import { DataFlowLine } from "@/components/DataFlowLine";

const steps = [
  ["01", "Загрузка", "Excel-файл попадает в локальный контур"],
  ["02", "Анализ", "Определяется структура и начало данных"],
  ["03", "Инструкция", "Пользователь описывает нужный результат"],
  ["04", "Правило", "Создаётся проект повторяемого шаблона"],
  ["05", "Проверка", "Сравнивается предпросмотр до и после"],
  ["06", "Шаблон", "Проверенная логика сохраняется"],
  ["07", "Повтор", "Похожие файлы обрабатываются по шаблону"],
];

export function WorkflowVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-x-auto pb-3">
      <div className="flex min-w-[68rem] items-stretch gap-3">
        {steps.map(([number, title, text], index) => (
          <div key={title} className="flex flex-1 items-center gap-3">
            <motion.article
              whileHover={reduceMotion ? undefined : { y: -5, scale: 1.015 }}
              className="h-full min-w-[8rem] flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="text-[10px] font-bold tracking-[0.16em] text-primary">
                {number}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted">{text}</p>
            </motion.article>
            {index < steps.length - 1 ? <DataFlowLine /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
