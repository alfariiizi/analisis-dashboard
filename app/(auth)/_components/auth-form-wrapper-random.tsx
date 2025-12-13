"use client";

import { useState, useEffect } from "react";
import { AuthFormWrapper } from "./auth-form-wrapper";
import { getRandomHeroMessage, getRandomGradient } from "../_data/auth-hero-variants";

interface AuthFormWrapperRandomProps {
  title: string;
  description: string;
  children: React.ReactNode;
  useRandomHero?: boolean;
  useRandomGradient?: boolean;
}

/**
 * AuthFormWrapper dengan Random Hero Message & Gradient
 *
 * ⚠️ PENTING: Random akan berbeda setiap kali page di-refresh/reload
 *
 * Usage:
 * <AuthFormWrapperRandom
 *   title="Masuk ke Akun Anda"
 *   description="Selamat datang kembali!"
 *   useRandomHero={true}        // Random hero message setiap page load
 *   useRandomGradient={true}    // Random gradient setiap page load
 * >
 *   {children}
 * </AuthFormWrapperRandom>
 */
export function AuthFormWrapperRandom({
  title,
  description,
  children,
  useRandomHero = true,
  useRandomGradient = true
}: AuthFormWrapperRandomProps) {
  // State untuk store random values
  const [heroTitle, setHeroTitle] = useState<string | undefined>(undefined);
  const [gradientClassName, setGradientClassName] = useState<string | undefined>(undefined);

  // Generate random values saat component mount (client-side only)
  useEffect(() => {
    if (useRandomHero) {
      setHeroTitle(getRandomHeroMessage());
    }
    if (useRandomGradient) {
      setGradientClassName(getRandomGradient());
    }
  }, [useRandomHero, useRandomGradient]);

  return (
    <AuthFormWrapper
      title={title}
      description={description}
      heroTitle={heroTitle}
      gradientClassName={gradientClassName}
    >
      {children}
    </AuthFormWrapper>
  );
}
