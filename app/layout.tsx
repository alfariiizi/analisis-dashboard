import React from "react";

import { Geist, Bricolage_Grotesque } from "next/font/google";
import GoogleAnalyticsInit from "@/lib/ga";

import "./globals.css";
import { ThemeProvider } from "@/components/layout/landing/theme-provider";
import { Watermark } from "@/components/watermark";
import { unstable_noStore } from "next/cache";
import { PublicEnvScript } from "next-runtime-env";
import NextTopLoader from "nextjs-toploader";
import { TanstackQueryProvider } from "./_providers/tanstack-query";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap"
});

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export const dynamic = "force-dynamic"; // Force dynamic rendering for this layout
export const revalidate = 0; // Disable revalidation for this layout

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  unstable_noStore();

  return (
    <html
      lang="id"
      className={`${geist.className} bg-background text-foreground antialiased`}
      suppressHydrationWarning
    >
      <head>
        <PublicEnvScript />
      </head>
      <body className="relative">
        <NextTopLoader showSpinner={false} />
        <ThemeProvider themes={["dark"]} defaultTheme="dark" forcedTheme="dark">
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
          {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
          <Watermark />
        </ThemeProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
