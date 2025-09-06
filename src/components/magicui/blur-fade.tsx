"use client";

import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type MarginObject = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

type MarginInput = string | number | MarginObject;

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginInput;
  blur?: string;
}

function toRootMarginString(margin: MarginInput | undefined): string | undefined {
  if (margin == null) return undefined;
  if (typeof margin === "string") {
    const parts = margin.trim().split(/\s+/);
    if (parts.length === 1) {
      const v = parts[0];
      if (/(px|%)$/.test(v)) return `0px 0px ${v} 0px`;
      const n = parseFloat(v);
      if (!isNaN(n)) return `0px 0px ${n}px 0px`;
      return undefined;
    }
    return margin;
  }
  if (typeof margin === "number") {
    const v = `${margin}px`;
    return `${v} ${v} ${v} ${v}`;
  }
  const top = `${margin.top ?? 0}px`;
  const right = `${margin.right ?? 0}px`;
  const bottom = `${margin.bottom ?? 0}px`;
  const left = `${margin.left ?? 0}px`;
  return `${top} ${right} ${bottom} ${left}`;
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef(null);

  const rootMargin = toRootMarginString(inViewMargin);

  const inViewResult = useInView(ref, { once: true, margin: rootMargin as any });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;
