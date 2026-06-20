"use client";

import { motion, useReducedMotion } from "motion/react";
import { pilotTimeline } from "@/lib/demo";

export function PilotTimelineVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute bottom-6 left-5 top-6 w-px bg-slate-200 lg:bottom-auto lg:left-6 lg:right-6 lg:top-6 lg:h-px lg:w-auto" />
      <motion.div
        className="absolute bottom-6 left-5 top-6 w-px origin-top bg-gradient-to-b from-primary to-secondary lg:hidden"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={reduceMotion ? undefined : { scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-6 right-6 top-6 hidden h-px origin-left bg-gradient-to-r from-primary to-secondary lg:block"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={reduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <ol className="relative grid gap-4 lg:grid-cols-7">
        {pilotTimeline.map((step, index) => (
          <motion.li
            key={step.title}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            className="grid grid-cols-[3rem_1fr] gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm lg:block lg:min-h-[13rem] lg:p-3"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-background bg-ink text-xs font-bold text-white shadow-sm">
              {step.icon}
            </div>
            <div className="lg:mt-5">
              <h3 className="text-sm font-semibold leading-5 text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
