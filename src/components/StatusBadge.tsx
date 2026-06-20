"use client";

import { motion, useReducedMotion } from "motion/react";

type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: "blue" | "green" | "slate";
};

export function StatusBadge({ children, tone = "blue" }: StatusBadgeProps) {
  const reduceMotion = useReducedMotion();
  const tones = {
    blue: "border-primary/20 bg-primary/10 text-primary",
    green: "border-secondary/20 bg-secondary/10 text-emerald-700",
    slate: "border-slate-200 bg-slate-100 text-slate-700",
  };

  return (
    <motion.span
      whileHover={reduceMotion ? undefined : { scale: 1.04 }}
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
      ].join(" ")}
    >
      {children}
    </motion.span>
  );
}
