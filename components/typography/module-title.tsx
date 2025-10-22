"use client";

import { cn } from "@/lib/utils";
import React from "react";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

type Props = {
  title: string;
  description?: string;
  className?: string;
  classNameTitle?: string;
  classNameDescription?: string;
};

export default function ModuleTitle({
  title,
  description,
  className,
  classNameTitle,
  classNameDescription
}: Props) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <RoughNotationGroup show>
        <h2
          className={cn(
            "w-fit max-w-xl text-3xl font-semibold tracking-tighter md:text-4xl",
            classNameTitle
          )}
        >
          <RoughNotation
            type="highlight"
            strokeWidth={2}
            padding={[0, 0]}
            iterations={3}
            color="var(--primary)"
          >
            {title}
          </RoughNotation>
        </h2>
        {description && (
          <p
            className={cn(
              "text-muted-foreground max-w-xl text-sm md:text-base",
              classNameDescription
            )}
          >
            <RoughNotation
              type="underline"
              strokeWidth={2}
              padding={[0, 0]}
              iterations={2}
              color="var(--primary)"
              multiline={true}
            >
              {description}
            </RoughNotation>
          </p>
        )}
      </RoughNotationGroup>
    </div>
  );
}
