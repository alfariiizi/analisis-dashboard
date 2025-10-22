"use client";

import { cn } from "@/lib/utils";
import React from "react";

export default function PageContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className={cn("mb-10 flex flex-1 flex-col p-4 md:p-8", className)}>{children}</div>
    </>
  );
}
