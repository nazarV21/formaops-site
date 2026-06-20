"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid-soft opacity-60" />
      <motion.div
        className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 55, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-[28rem] h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -40, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        animate={reduceMotion ? undefined : { x: ["-35%", "35%", "-35%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
