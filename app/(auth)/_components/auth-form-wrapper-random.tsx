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
 * Uses client-only rendering to prevent hydration mismatch.
 * Compatible with React Strict Mode (no double execution).
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
  const [isMounted, setIsMounted] = useState(false);

  // Lazy initialization untuk random values
  const [heroTitle] = useState<string | undefined>(() =>
    useRandomHero ? getRandomHeroMessage() : undefined
  );

  const [gradientClassName] = useState<string | undefined>(() =>
    useRandomGradient ? getRandomGradient() : undefined
  );

  // Wait for client-side mount to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Server-side: render dengan default values (no random)
  if (!isMounted) {
    return (
      <AuthFormWrapper title={title} description={description}>
        {children}
      </AuthFormWrapper>
    );
  }

  // Client-side: render dengan random values
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
