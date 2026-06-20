"use client";

import { motion, useReducedMotion } from "motion/react";

type DataFlowLineProps = {
  vertical?: boolean;
  className?: string;
};

export function DataFlowLine({
  vertical = false,
  className = "",
}: DataFlowLineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={[
        "relative overflow-hidden rounded-full bg-slate-200",
        vertical ? "h-12 w-px" : "h-px w-12",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <motion.span
        className={[
          "absolute rounded-full bg-gradient-to-r from-primary to-secondary",
          vertical ? "left-0 h-5 w-px" : "top-0 h-px w-5",
        ].join(" ")}
        animate={
          reduceMotion
            ? undefined
            : vertical
              ? { y: [-20, 48] }
              : { x: [-20, 48] }
        }
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
