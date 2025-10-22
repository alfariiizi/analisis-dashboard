// Shadcn-style React Rough Notation Components
// File: shadcn-rough-components.tsx
// Usage: drop this file into your components folder in a Next.js / React + Tailwind project.
// Install dependencies:
//   npm install react-rough-notation rough-notation framer-motion
// or
//   yarn add react-rough-notation rough-notation framer-motion

import React from "react";
import { RoughNotation as RN, RoughNotationGroup } from "react-rough-notation";

// -------------------------
// Tokens + Types
// -------------------------
export type RnType = "underline" | "box" | "circle" | "highlight" | "strike-through" | "bracket";

export interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

type Variant = "default" | "secondary" | "accent" | "muted" | "destructive";

const VARIANT_TOKENS: Record<Variant, { color: string; className: string }> = {
  default: {
    color: "var(--primary)",
    className: "text-primary-foreground"
  },
  secondary: {
    color: "var(--secondary)",
    className: "text-secondary-foreground"
  },
  accent: {
    color: "var(--accent)",
    className: "text-accent-foreground"
  },
  destructive: {
    color: "var(--destructive)",
    className: "text-destructive-foreground"
  },
  muted: {
    color: "var(--muted)",
    className: "text-muted-foreground"
  }
  // ring: {
  //   color: "hsl(var(--ring))",
  //   className: "bg-transparent text-foreground",
  // },
  // foreground: {
  //   color: "hsl(var(--foreground))",
  //   className: "bg-transparent text-foreground",
  // },
  // none: {
  //   color: "hsl(var(--border))",
  //   className: "bg-transparent text-foreground",
  // },
};

// -------------------------
// RoughNotation (single)
// -------------------------
export interface RoughNotationProps extends BaseProps {
  type?: RnType;
  color?: string;
  show?: boolean;
  animationDuration?: number;
  strokeWidth?: number;
  padding?: number;
  iterations?: number;
  multiline?: boolean;
  variant?: Variant;
}

export function RoughItem({
  type = "underline",
  color,
  show = true,
  animationDuration = 800,
  strokeWidth = 2,
  padding = 6,
  iterations = 1,
  multiline = false,
  variant = "default",
  children
}: RoughNotationProps) {
  const variantToken = VARIANT_TOKENS[variant] ?? VARIANT_TOKENS.default;
  const strokeColor = color ?? variantToken.color;

  // return (
  //   <motion.span
  //     initial={{ opacity: 0, y: 2 }}
  //     animate={{ opacity: show ? 1 : 0.6, y: 0 }}
  //     transition={{ duration: 0.22 }}
  //     className={`inline-flex items-center gap-2 rounded-md px-1.5 py-0.5 text-sm ${className}`}
  //     aria-live="polite"
  //   >
  //     <RN
  //       type={type}
  //       color={strokeColor}
  //       show={show}
  //       animationDuration={animationDuration}
  //       strokeWidth={strokeWidth}
  //       padding={padding}
  //       iterations={iterations}
  //       multiline={multiline}
  //     >
  //       <span className={`inline-flex items-center ${variantToken.className}`}>{children}</span>
  //     </RN>
  //   </motion.span>
  // );

  return (
    <RN
      type={type}
      color={strokeColor}
      show={show}
      animationDuration={animationDuration}
      strokeWidth={strokeWidth}
      padding={padding}
      iterations={iterations}
      multiline={multiline}
    >
      <span className={`inline-flex items-center ${variantToken.className}`}>{children}</span>
    </RN>
  );
}

// -------------------------
// RoughGroup (wrapper for sequencing)
// -------------------------
export interface RoughGroupProps extends BaseProps {
  show?: boolean;
  // if true, annotations animate one after another (using group's behavior)
  sequential?: boolean;
  // expose group-level animationDuration override (applies only if child doesn't pass it)
  animationDuration?: number;
}

export function RoughGroup({ show = true, children }: RoughGroupProps) {
  // RoughNotationGroup from react-rough-notation will sequence children when show toggles
  // We keep a small motion wrapper to match shadcn UI mounting behavior.

  return (
    <RoughNotationGroup show={show}>
      {/* <motion.div */}
      {/*   initial={{ opacity: 0 }} */}
      {/*   animate={{ opacity: show ? 1 : 0 }} */}
      {/*   transition={{ duration: 0.18 }} */}
      {/*   className={`inline-flex items-center gap-2 ${className}`} */}
      {/* > */}
      {/* </motion.div> */}
      {React.Children.map(children, (child) => {
        // If child is a RoughNotation we could inject animationDuration but we avoid heavy introspection.
        return child;
      })}
    </RoughNotationGroup>
  );
}

// -------------------------
// Rough (one group + one notation) - convenience
// -------------------------
export interface RoughProps extends RoughNotationProps {
  // allow passing group props
  className?: string;
}

export function Rough({ show = true, className = "", ...notationProps }: RoughProps) {
  return (
    <RoughNotationGroup show={show}>
      <RoughItem {...notationProps} />
    </RoughNotationGroup>
  );
}

// -------------------------
// Example usage
// -------------------------
// import { Rough, RoughGroup, RoughNotation } from "./shadcn-rough-components";
//
// export default function Demo() {
//   const [show, setShow] = React.useState(true);
//   return (
//     <div className="space-y-6 p-6">
//       <div className="flex items-center gap-3">
//         <RoughNotation type="highlight" variant="accent" show={show}>
//           <strong>Standalone</strong> annotation
//         </RoughNotation>
//         <button onClick={() => setShow((s) => !s)} className="rounded-md px-3 py-1 border text-sm">
//           Toggle
//         </button>
//       </div>
//
//       <div className="">
//         <Rough groupShow={show} type="box" color="#059669" animationDuration={1100} strokeWidth={3}>
//           Boxed single group
//         </Rough>
//       </div>
//
//       <div className="">
//         <RoughGroup show={show}>
//           <RoughNotation type="underline" variant="subtle">First</RoughNotation>
//           <RoughNotation type="circle" variant="accent">Second</RoughNotation>
//           <RoughNotation type="bracket" variant="muted">Third</RoughNotation>
//         </RoughGroup>
//       </div>
//     </div>
//   );
// }
