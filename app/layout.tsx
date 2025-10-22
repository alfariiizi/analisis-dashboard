import React from "react";

import { Geist, Bricolage_Grotesque } from "next/font/google";
import GoogleAnalyticsInit from "@/lib/ga";

import "./globals.css";
import { ThemeProvider } from "@/components/layout/landing/theme-provider";
import { Watermark } from "@/components/watermark";

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geist.className} bg-background text-foreground antialiased`}
      suppressHydrationWarning
    >
      <body className="relative">
        <ThemeProvider themes={["dark"]} defaultTheme="dark" forcedTheme="dark">
          {children}
          {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
          <Watermark />
        </ThemeProvider>
      </body>
    </html>
  );
}
