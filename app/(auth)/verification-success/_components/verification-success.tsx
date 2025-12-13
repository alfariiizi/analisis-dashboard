"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthFormWrapperRandom } from "../../_components/auth-form-wrapper-random";

export const VerificationSuccess = () => {
  return (
    <AuthFormWrapperRandom
      title="Verifikasi Berhasil!"
      description="Email Anda telah terverifikasi. Selamat bergabung dengan OmniTrend!"
      useRandomHero={true}
      useRandomGradient={true}
    >
      <div className="flex flex-col gap-6">
        {/* Success Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>

        {/* Success Message */}
        <div className="space-y-3 text-center">
          <h3 className="text-foreground text-lg font-semibold">Email Terverifikasi!</h3>
          <p className="text-muted-foreground text-sm">
            Akun Anda telah aktif. Sekarang Anda dapat mengakses semua fitur OmniTrend.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full" asChild>
            <a href="/signin">Masuk ke Dashboard</a>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <a href="/">Kembali ke Beranda</a>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-muted-foreground text-center text-xs">
            Selamat! Anda sekarang dapat menganalisis produk marketplace dengan AI,
            menemukan trending products, dan mendapatkan insights bisnis yang powerful.
          </p>
        </div>
      </div>
    </AuthFormWrapperRandom>
  );
};
