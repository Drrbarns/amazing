"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  viewport?: UseInViewOptions;
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  viewport = { once: true, margin: "-100px" },
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <ScrollAnimation
      direction="none"
      className={className}
      delay={delay}
      duration={duration}
    >
      {children}
    </ScrollAnimation>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerChildren = 0.1,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      {children}
    </motion.div>
  );
}

