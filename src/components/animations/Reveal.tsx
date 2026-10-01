"use client";

import { motion, type Variants } from "motion/react";
import React from "react";

const fadeUp = ({
  delay,
  blur = true,
}: {
  delay?: number;
  blur?: boolean;
}): Variants => ({
  hidden: { opacity: 0, y: 40, ...(blur && { filter: "blur(10px)" }) },
  show: {
    opacity: 1,
    y: 0,
    ...(blur && { filter: "blur(0px)" }),
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      ...(delay !== undefined && { delay }),
    },
    ...(blur && { transitionEnd: { filter: "none" } }),
  },
});

const trigger = (inView: boolean) =>
  inView
    ? { whileInView: "show", viewport: { once: true, amount: 0.3 } }
    : { animate: "show" };

export function Reveal({
  children,
  className,
  delay = 0,
  blur = true,
  inView = false,
}: {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
  inView?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...trigger(inView)}
      variants={fadeUp({ delay, blur })}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  delay = 0,
  stagger = 0.15,
  inView = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...trigger(inView)}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren: delay, staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  blur = true,
}: {
  children: React.ReactNode;
  className?: string;
  blur?: boolean;
}) {
  return (
    <motion.div className={className} variants={fadeUp({ blur })}>
      {children}
    </motion.div>
  );
}
