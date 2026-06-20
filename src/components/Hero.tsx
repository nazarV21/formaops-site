"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { StatusBadge } from "@/components/StatusBadge";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  note?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  visual?: React.ReactNode;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  note,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  visual,
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={[
        "container-page grid gap-10 py-16 lg:items-center lg:py-24",
        visual ? "lg:grid-cols-[1.05fr_0.95fr]" : "",
      ].join(" ")}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow ? (
          <div className="mb-6">
            <StatusBadge tone="green">{eyebrow}</StatusBadge>
          </div>
        ) : null}
        <h1 className="max-w-4xl whitespace-pre-line text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-muted">
          {subtitle}
        </p>
        {note ? (
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">{note}</p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="focus-ring cta-glow rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            href={primaryHref}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              className="focus-ring rounded-full border border-borderline bg-white px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              href={secondaryHref}
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </motion.div>
      {visual ? (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {visual}
        </motion.div>
      ) : null}
    </section>
  );
}
