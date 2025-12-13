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
  const form = useForm<SigninFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: SigninFormValues) => {
    console.log("Form submitted!", values);
    alert("Login berhasil!");
    // TODO: Implement actual login logic
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
            <a href="/forgot-password" className="text-sm text-muted-foreground hover:underline">
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
