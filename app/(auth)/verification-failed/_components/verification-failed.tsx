"use client";

import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthFormWrapperRandom } from "../../_components/auth-form-wrapper-random";

export const VerificationFailed = () => {
  return (
    <AuthFormWrapperRandom
      title="Verifikasi Gagal"
      description="Link verifikasi tidak valid atau sudah kadaluarsa."
      useRandomHero={true}
      useRandomGradient={true}
    >
      <div className="flex flex-col gap-6">
        {/* Error Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <XCircle className="h-8 w-8 text-red-600" />
        </div>

        {/* Error Message */}
        <div className="space-y-3 text-center">
          <h3 className="text-foreground text-lg font-semibold">Verifikasi Gagal</h3>
          <p className="text-muted-foreground text-sm">
            Link verifikasi Anda tidak valid atau sudah kadaluarsa.
          </p>
        </div>

        {/* Possible Reasons */}
        <div className="bg-muted/50 space-y-2 rounded-lg p-4 text-left">
          <p className="text-muted-foreground text-sm font-medium">Kemungkinan penyebab:</p>
          <ul className="text-muted-foreground ml-4 list-disc space-y-1 text-xs">
            <li>Link sudah kadaluarsa (lebih dari 24 jam)</li>
            <li>Link sudah pernah digunakan sebelumnya</li>
            <li>Email sudah terverifikasi</li>
            <li>Link tidak lengkap atau rusak</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full" asChild>
            <a href="/resend-verification">Kirim Ulang Link Verifikasi</a>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <a href="/signin">Kembali ke Halaman Masuk</a>
          </Button>
        </div>

        {/* Help */}
        <div className="border-muted-foreground/20 border-t pt-4">
          <p className="text-muted-foreground text-center text-xs">
            Butuh bantuan?{" "}
            <a href="/contact" className="text-secondary-foreground font-medium underline">
              Hubungi Support
            </a>
          </p>
        </div>
      </div>
    </AuthFormWrapperRandom>
  );
};
