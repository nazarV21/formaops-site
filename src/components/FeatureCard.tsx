"use client";

import { motion, useReducedMotion } from "motion/react";

type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-borderline bg-surface p-6 shadow-sm hover:border-primary/20 hover:shadow-soft"
    >
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </motion.article>
  );
}
