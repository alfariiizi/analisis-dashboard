"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

type ImageFocus = {
  x?: number; // 0–100
  y?: number; // 0–100
};

type ImageBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion";

type Props = {
  title: string;
  description?: string;

  imageSrc?: string;
  imageAlt?: string;

  imageFocus?: ImageFocus;
  imageBlendMode?: ImageBlendMode;

  className?: string;
  classNameTitle?: string;
  classNameDescription?: string;
};

export default function ModuleTitle({
  title,
  description,
  imageSrc,
  imageAlt = "",
  imageFocus = { x: 50, y: 50 },
  imageBlendMode = "normal",
  className,
  classNameTitle,
  classNameDescription
}: Props) {
  const objectPosition = `${imageFocus.x ?? 50}% ${imageFocus.y ?? 50}%`;

  return (
    <div
      className={cn("relative grid w-full gap-6 md:grid-cols-[1fr_0.8fr]", className)}
      style={{ isolation: "isolate" }} // important for blend-mode
    >
      {/* TEXT */}
      <div className="noise-overlay z-10 flex flex-col gap-2 p-4">
        <RoughNotationGroup show>
          <h2
            className={cn(
              "relative w-fit max-w-xl text-3xl font-semibold tracking-tighter md:text-4xl",
              classNameTitle
            )}
          >
            <RoughNotation
              type="highlight"
              strokeWidth={2}
              padding={[0, 4]}
              iterations={3}
              color="var(--background)"
            >
              {title}
            </RoughNotation>
          </h2>

          {description && (
            <p
              className={cn(
                "text-muted-foreground relative max-w-xl text-sm md:text-base",
                classNameDescription
              )}
            >
              <RoughNotation
                type="highlight"
                strokeWidth={2}
                padding={4}
                iterations={2}
                color="var(--background)"
                multiline
              >
                {description}
              </RoughNotation>
            </p>
          )}
        </RoughNotationGroup>
      </div>

      {/* IMAGE (always right) */}
      {imageSrc && (
        <div className="aboslute h-full w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
            style={{
              objectPosition,
              mixBlendMode: imageBlendMode
            }}
          />
        </div>
      )}
    </div>
  );
}
