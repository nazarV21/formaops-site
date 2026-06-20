"use client";

import { motion, useReducedMotion } from "motion/react";
import type { AdvantageKind } from "@/lib/sheetnorm-content";

type AdvantageCardProps = {
  title: string;
  description: string;
  kind: AdvantageKind;
};

function AdvantageVisual({ kind }: { kind: AdvantageKind }) {
  if (kind === "messy") {
    return (
      <div className="grid grid-cols-4 gap-1 text-[9px]">
        <span className="col-span-2 rounded bg-blue-100 p-2">Отчёт</span>
        <span className="rounded bg-slate-100 p-2">Янв.</span>
        <span className="rounded bg-slate-100 p-2">Фев.</span>
        <span className="rounded bg-amber-100 p-2">Итого</span>
        <span className="rounded bg-slate-50 p-2">—</span>
        <span className="col-span-2 rounded bg-rose-50 p-2">
          разные форматы
        </span>
      </div>
    );
  }

  if (kind === "ai") {
    return (
      <div className="flex items-center gap-2 text-[10px] font-semibold">
        {[
          ["Инструкция", "bg-blue-50 text-primary"],
          ["Правило", "bg-slate-100 text-slate-700"],
          ["Проверка", "bg-emerald-50 text-emerald-700"],
        ].map(([label, classes], index) => (
          <div key={label} className="contents">
            <span className={["rounded-xl p-3", classes].join(" ")}>
              {label}
            </span>
            {index < 2 ? <span className="text-primary">→</span> : null}
          </div>
        ))}
      </div>
    );
  }

  if (kind === "templates") {
    return (
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[9px]">
        <div className="space-y-1">
          {["май.xlsx", "июнь.xlsx", "июль.xlsx"].map((file) => (
            <div key={file} className="rounded bg-white p-2 shadow-sm">
              {file}
            </div>
          ))}
        </div>
        <span className="text-primary">→</span>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 font-semibold text-emerald-700">
          Один проверенный шаблон
        </div>
      </div>
    );
  }

  if (kind === "quality") {
    return (
      <div className="grid grid-cols-3 gap-2 text-[9px]">
        {[
          ["Статус", "Готово"],
          ["До / после", "148 / 96"],
          ["Предупр.", "2"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-white p-2 shadow-sm">
            <span className="text-slate-400">{label}</span>
            <strong className="mt-1 block text-ink">{value}</strong>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "packages") {
    return (
      <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-primary">
          Team · отдел
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-emerald-700">
          Enterprise · компания
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-dashed border-primary/25 bg-blue-50/50 p-3 text-[10px]">
      <p className="font-semibold text-primary">Контур компании</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {["SheetNorm", "База правил", "File Storage"].map((item) => (
          <span
            key={item}
            className="rounded-lg bg-white px-2 py-1.5 text-slate-600 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AdvantageCard({
  title,
  description,
  kind,
}: AdvantageCardProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -7, scale: 1.01 }}
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:border-primary/20 hover:shadow-soft"
    >
      <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-3">
        <AdvantageVisual kind={kind} />
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </motion.article>
  );
}
