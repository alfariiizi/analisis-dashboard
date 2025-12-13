import * as React from "react";
import { cn } from "@/lib/utils";

export interface AppIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Controls which gradient to use
   */
  gradient?: "brand" | "blue" | "green";
}

export const AppIcon = React.forwardRef<SVGSVGElement, AppIconProps>(
  ({ className, gradient = "brand", width, height, ...props }, ref) => {
    // Avoid gradient ID collision when used multiple times
    const id = React.useId();

    const gradients = {
      brand: {
        g0: (
          <>
            <stop stopColor="#0073D4" />
            <stop offset="0.3" stopColor="#1D9EFF" />
            <stop offset="0.7" stopColor="#995CFF" />
          </>
        ),
        g1: (
          <>
            <stop stopColor="#00E7BE" />
            <stop offset="0.587" stopColor="#1D9EFF" />
            <stop offset="1" stopColor="#0073D4" />
          </>
        )
      },
      blue: {
        g0: (
          <>
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#60a5fa" />
          </>
        ),
        g1: (
          <>
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#2563eb" />
          </>
        )
      },
      green: {
        g0: (
          <>
            <stop stopColor="#22c55e" />
            <stop offset="1" stopColor="#16a34a" />
          </>
        ),
        g1: (
          <>
            <stop stopColor="#4ade80" />
            <stop offset="1" stopColor="#22c55e" />
          </>
        )
      }
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={width}
        height={height}
        className={cn("shrink-0", className)}
        aria-hidden="true"
        {...props}
      >
        <path
          fill={`url(#paint0-${id})`}
          d="M425.566 168.516c5.019-8.692 17.439-8.687 21.603.445C459.262 195.479 466 224.953 466 256c0 115.98-94.02 210-210 210-52.29 0-100.116-19.112-136.875-50.731-4.6-3.957-5.536-10.641-2.502-15.895l96.827-167.709a1.04 1.04 0 0 1 1.937.435l13.366 163.173a19.69 19.69 0 0 0 9.778 15.442l18.351 10.596c9.416 5.436 21.457 2.21 26.894-7.206z"
        />
        <path
          fill={`url(#paint1-${id})`}
          d="M256 46c49.919 0 95.769 17.418 131.806 46.507 4.835 3.903 5.9 10.761 2.793 16.142L275.175 308.571a1.357 1.357 0 0 1-2.528-.573l-12.569-162.186a19.69 19.69 0 0 0-9.784-15.529l-18.937-10.933c-9.416-5.437-21.457-2.21-26.893 7.206L83.31 336.4c-5.12 8.867-17.835 8.628-21.716-.846C51.542 311.017 46 284.156 46 256c0-115.98 94.02-210 210-210"
        />

        <defs>
          <linearGradient
            id={`paint0-${id}`}
            x1="456.035"
            x2="197.841"
            y1="174.193"
            y2="618.304"
            gradientUnits="userSpaceOnUse"
          >
            {gradients[gradient].g0}
          </linearGradient>

          <linearGradient
            id={`paint1-${id}`}
            x1="386.097"
            x2="133.9"
            y1="70.609"
            y2="507.426"
            gradientUnits="userSpaceOnUse"
          >
            {gradients[gradient].g1}
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

AppIcon.displayName = "AppIcon";
