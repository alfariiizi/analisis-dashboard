"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { AuthFormWrapperRandom } from "../../_components/auth-form-wrapper-random";

const formSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password harus minimal 8 karakter."
    }),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok.",
    path: ["confirmPassword"]
  });

type ResetPasswordFormValues = z.infer<typeof formSchema>;

export const ResetPasswordForm = () => {
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = (values: ResetPasswordFormValues) => {
    console.log("Password reset:", values);
    alert("Password berhasil direset!");
    // TODO: Implement actual reset password logic
    // Redirect to signin after success
  };

  return (
    <AuthFormWrapperRandom
      title="Reset Password"
      description="Masukkan password baru Anda untuk mengamankan akun."
      useRandomHero={true}
      useRandomGradient={true}
    >
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password Baru</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Minimal 8 karakter" {...field} />
                </FormControl>
                <FormDescription>
                  Password harus minimal 8 karakter dengan kombinasi huruf dan angka.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Konfirmasi Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Ketik ulang password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Mereset password..." : "Reset Password"}
          </Button>

          <div className="text-muted-foreground text-center text-sm">
            Ingat password Anda?{" "}
            <a href="/signin" className="text-secondary-foreground font-medium underline">
              Masuk sekarang
            </a>
          </div>
        </form>
      </Form>
    </AuthFormWrapperRandom>
  );
};
