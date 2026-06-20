"use client";

import { motion, useReducedMotion } from "motion/react";

const facts = [
  ["3–5", "обезличенных файлов для пилота"],
  ["Team", "конфигурация для отдела"],
  ["Enterprise", "после нагрузочного тестирования"],
  ["AI → шаблон", "правило создаётся и проверяется человеком"],
  ["Локально", "целевая обработка внутри инфраструктуры"],
];

export function StatsStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="container-page py-6">
      <div className="grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">
        {facts.map(([value, label], index) => (
          <motion.div
            key={value}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="border-b border-slate-200 p-5 last:border-0 sm:border-r lg:border-b-0"
          >
            <p className="text-lg font-semibold text-ink">{value}</p>
            <p className="mt-1 text-xs leading-5 text-muted">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
