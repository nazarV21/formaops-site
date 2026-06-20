"use client";

import { motion, useReducedMotion } from "motion/react";

type FloatingCardsProps = {
  children: React.ReactNode;
  className?: string;
};

export function FloatingCards({
  children,
  className = "",
}: FloatingCardsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
