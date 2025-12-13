"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthFormWrapperRandom } from "../../_components/auth-form-wrapper-random";

export const VerifyEmailInfo = () => {
  return (
    <AuthFormWrapperRandom
      title="Cek Email Anda"
      description="Kami telah mengirimkan link verifikasi ke email Anda."
      useRandomHero={true}
      useRandomGradient={true}
    >
      <div className="flex flex-col gap-6">
        {/* Icon */}
        <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
          <Mail className="text-primary h-8 w-8" />
        </div>

        {/* Instructions */}
        <div className="space-y-3 text-center">
          <p className="text-muted-foreground text-sm">
            Kami telah mengirimkan email verifikasi ke:
          </p>
          <p className="text-foreground font-medium">nama@email.com</p>
          <p className="text-muted-foreground text-sm">
            Klik link di email tersebut untuk mengaktifkan akun Anda.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full" asChild>
            <a href="mailto:">Buka Email</a>
          </Button>

          <div className="text-muted-foreground text-center text-sm">
            Tidak menerima email?{" "}
            <a
              href="/resend-verification"
              className="text-secondary-foreground font-medium underline"
            >
              Kirim ulang
            </a>
          </div>
        </div>

        {/* Back to signin */}
        <div className="border-muted-foreground/20 border-t pt-4">
          <div className="text-muted-foreground text-center text-sm">
            <a href="/signin" className="text-secondary-foreground font-medium underline">
              Kembali ke halaman masuk
            </a>
          </div>
        </div>
      </div>
    </AuthFormWrapperRandom>
  );
};
