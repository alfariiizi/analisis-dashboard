"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useReducedMotion } from "motion/react";
import { forwardRef } from "react";

interface ShoppingCartIconProps extends HTMLMotionProps<"div"> {
  size?: number;
  speed?: number;
}

const ShoppingCartIcon = forwardRef<HTMLDivElement, ShoppingCartIconProps>(
  ({ className, size = 28, speed = 1, ...props }, ref) => {
    const reduced = useReducedMotion();

    // If reduced motion is requested, make "animate" the same as "normal"
    const cartVariants: Variants = reduced
      ? {
          normal: { y: 0, rotate: 0, scale: 1 },
          animate: { y: 0, rotate: 0, scale: 1 }
        }
      : {
          normal: { y: 0, rotate: 0, scale: 1 },
          animate: {
            y: [0, -3, 0, -1, 0],
            rotate: [0, -4, 3, -2, 0],
            transition: {
              duration: 1.8 * speed,
              repeat: 0,
              ease: "easeInOut"
            }
          }
        };

    const wheelVariants: Variants = reduced
      ? { normal: { rotate: 0 }, animate: { rotate: 0 } }
      : {
          normal: { rotate: 0 },
          animate: {
            rotate: [0, 360],
            transition: { duration: 1 * speed, ease: "linear", repeat: 0 }
          }
        };

    return (
      // Note: we *do not* provide `animate` prop here — the parent will set it.
      <motion.div
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        // child initial is "normal" so it syncs nicely with parent initial
        initial="normal"
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.circle cx="8" cy="21" r="1" variants={wheelVariants} />
          <motion.circle cx="19" cy="21" r="1" variants={wheelVariants} />

          <motion.path
            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
            variants={cartVariants}
          />
        </motion.svg>
      </motion.div>
    );
  }
);

ShoppingCartIcon.displayName = "ShoppingCartIcon";
export { ShoppingCartIcon };
