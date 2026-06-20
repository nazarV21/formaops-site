"use client";

import { motion, useReducedMotion } from "motion/react";
import { competitorRows } from "@/lib/sheetnorm-content";

export function CompetitorComparisonVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="hidden grid-cols-[0.65fr_1fr_1.25fr_1.25fr] bg-slate-950 px-5 py-4 text-xs font-semibold text-white lg:grid">
        <span>Инструмент</span>
        <span>Для чего подходит</span>
        <span>Ограничение</span>
        <span>Где помогает SheetNorm</span>
      </div>
      <div className="divide-y divide-slate-200">
        {competitorRows.map((row, index) => (
          <motion.article
            key={row.tool}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.05 }}
            className="grid gap-4 p-5 lg:grid-cols-[0.65fr_1fr_1.25fr_1.25fr] lg:gap-6"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 lg:hidden">
                Инструмент
              </p>
              <p className="mt-1 font-semibold text-ink lg:mt-0">{row.tool}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 lg:hidden">
                Подходит
              </p>
              <p className="mt-1 text-sm leading-6 text-muted lg:mt-0">
                {row.fit}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 lg:hidden">
                Ограничение
              </p>
              <p className="mt-1 text-sm leading-6 text-muted lg:mt-0">
                {row.limit}
              </p>
            </div>
            <div className="rounded-xl bg-blue-50/70 p-3 lg:-my-2">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-primary lg:hidden">
                Роль SheetNorm
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700 lg:mt-0">
                {row.role}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
