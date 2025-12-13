"use client";

import { AppIcon } from "@/components/svg/app-icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AuthFormWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  heroTitle?: string;
  gradientClassName?: string;
}

export function AuthFormWrapper({
  title,
  description,
  children,
  heroTitle = "Buka wawasan marketplace dengan kecerdasan produk berbasis AI.",
  gradientClassName = "bg-[linear-gradient(248deg,_#d08700_0%,_#0d63a5_3%,_#0d63a5_7%,_#ca3500_100%)]"
}: AuthFormWrapperProps) {
  return (
    <div className="p-4l flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative flex w-full max-w-5xl flex-col overflow-hidden shadow-xl md:flex-row">
        {/* Hero Section - Left Side */}
        <div
          className={cn(
            "noise-overlay relative overflow-hidden p-8 md:w-1/2 md:p-12",
            gradientClassName
          )}
          suppressHydrationWarning
        >
          <h1
            className="relative z-10 text-2xl leading-tight font-medium tracking-tight md:text-3xl"
            suppressHydrationWarning
          >
            {heroTitle}
          </h1>
        </div>

        {/* Form Section - Right Side */}
        <div className="bg-secondary text-secondary-foreground z-99 flex flex-col p-8 md:w-1/2 md:p-12">
          <div className="items-left mb-8 flex flex-col">
            <Link
              href="https://omnitrend.id"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:bg-muted-foreground/10 mb-3 flex w-fit items-center gap-2 duration-200"
              )}
            >
              <AppIcon className="text-primary size-5" />
              <h2 className="text-base font-semibold">OmniTrend</h2>
            </Link>
            <h2 className="mb-2 text-3xl font-medium tracking-tight">{title}</h2>
            <p className="text-left opacity-80">{description}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
