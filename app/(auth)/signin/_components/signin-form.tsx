"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { AuthFormWrapperRandom } from "../../_components/auth-form-wrapper-random";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";
import { setCookie } from "cookies-next";
import { AUTH_SESSION_COOKIE_NAME, AUTH_TOKEN_COOKIE_NAME } from "@/constants/auth";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Email tidak valid."
  }),
  password: z.string().min(1, {
    message: "Password harus diisi."
  })
});

type SigninFormValues = z.infer<typeof formSchema>;

export const SigninForm = () => {
  const loginMutation = useMutation({
    ...api.rq.postAuthLoginMutation(),
    retry: false,
    onSuccess: async (data) => {
      const { access_token, access_token_expires_at, refresh_token, refresh_token_expires_at } =
        data.data;
      await setCookie(AUTH_TOKEN_COOKIE_NAME, access_token, {
        // expires: new Date(access_token_expires_at),
        maxAge: access_token_expires_at - Math.floor(Date.now() / 1000) - 120, // subtract 120 seconds for safety
        path: "/",
        sameSite: "lax",
        secure: true
      });
      await setCookie(AUTH_SESSION_COOKIE_NAME, refresh_token, {
        // expires: new Date(refresh_token_expires_at),
        maxAge: refresh_token_expires_at - Math.floor(Date.now() / 1000) - 120, // subtract 120 seconds for safety
        path: "/",
        sameSite: "lax",
        secure: true
      });
      window.location.href = "/";
    },
    onError: (e) => {
      console.debug("Login error", e);
      toast.error("Email atau password salah. Silakan coba lagi.");
    }
  });

  const form = useForm<SigninFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values: SigninFormValues) => {
    console.log("Form submitted!", values);
    await loginMutation.mutateAsync({
      body: {
        email: values.email,
        password: values.password
      }
    });
  };

  return (
    <AuthFormWrapperRandom
      title="Masuk ke Akun Anda"
      description="Selamat datang kembali! Masukkan kredensial Anda untuk mengakses dashboard OmniTrend."
      useRandomHero={true}
      useRandomGradient={true}
    >
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="nama@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Masukkan password Anda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <a href="/forgot-password" className="text-muted-foreground text-sm hover:underline">
              Lupa password?
            </a>
          </div>

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Masuk..." : "Masuk"}
          </Button>

          <div className="text-muted-foreground text-center text-sm">
            Belum punya akun?{" "}
            <a href="/signup" className="text-secondary-foreground font-medium underline">
              Daftar sekarang
            </a>
          </div>
        </form>
      </Form>
    </AuthFormWrapperRandom>
  );
};
