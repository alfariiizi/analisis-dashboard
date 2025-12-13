"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_WATERMARK = "omnitrend.id";

// Palette: array of [bgColor, fgColor] pairs (CSS values)
const DEFAULT_PALETTE: [string, string][] = [
  ["var(--foreground)", "var(--background)"],
  ["var(--chart-1)", "var(--foreground)"]
];

export interface WatermarkProps {
  show?: boolean;
  text?: string;
  palette?: [string, string][];
  intervalMs?: number;
  className?: string;
}

export function Watermark({
  show = true,
  text = DEFAULT_WATERMARK,
  palette = DEFAULT_PALETTE,
  intervalMs = 10000,
  className
}: WatermarkProps) {
  const prefersReduced = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!show) return;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setIdx((i) => (i + 1) % palette.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [show, prefersReduced, intervalMs, palette.length]);

  const [bgColor, fgColor] = palette[idx] || palette[0];

  if (!show) return null;

  return (
    <motion.div
      // animate background and text color when palette changes
      animate={{ backgroundColor: bgColor, color: fgColor }}
      transition={prefersReduced ? { duration: 0 } : { duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "noise-overlay pointer-events-none fixed right-0 bottom-1 hidden items-center justify-center px-2 py-0 font-semibold opacity-80 select-none md:flex md:px-3 md:py-1",
        className
      )}
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "rotate(180deg)",
        zIndex: 50,
        minWidth: 24
      }}
      aria-hidden={true}
    >
      <p className="text-[10px] leading-0 whitespace-nowrap md:text-xs">{text}</p>
    </motion.div>
  );
}
