"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Package } from "@/lib/packages";
import { StatusBadge } from "@/components/StatusBadge";

type PackageCardProps = {
  item: Package;
};

export function PackageCard({ item }: PackageCardProps) {
  const reduceMotion = useReducedMotion();
  const enterpriseFlow = [
    "Пользователи",
    "Web App",
    "PostgreSQL",
    "Redis Queue",
    "Workers",
    "File Storage",
  ];

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="flex h-full flex-col rounded-3xl border border-borderline bg-surface p-6 shadow-sm hover:border-primary/20 hover:shadow-soft"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-ink">{item.name}</h3>
          <p className="mt-2 text-muted">{item.audience}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <StatusBadge tone={item.badge === "Team" ? "blue" : "green"}>
            {item.badge}
          </StatusBadge>
          <StatusBadge tone="slate">После пилота</StatusBadge>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3">
        {item.badge === "Team" ? (
          <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-600">
            {[
              "Один отдел",
              "10–30 пользователей",
              "База шаблонов",
              "Очередь задач",
              "История обработки",
            ].map((node) => (
              <div
                key={node}
                className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
              >
                {node}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-1.5">
            {enterpriseFlow.map((node, index) => (
              <div key={node} className="contents">
                <span className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-[9px] font-semibold text-slate-600 shadow-sm">
                  {node}
                </span>
                {index < enterpriseFlow.length - 1 ? (
                  <span className="text-xs text-primary">→</span>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="mt-5 leading-7 text-ink">{item.summary}</p>
      <ul className="mt-6 space-y-3 text-muted">
        {item.items.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
