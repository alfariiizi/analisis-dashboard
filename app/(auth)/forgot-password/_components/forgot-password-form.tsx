"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const formSchema = z.object({
  email: z.string().email({
    message: "Email tidak valid."
  })
});

type ForgotPasswordFormValues = z.infer<typeof formSchema>;

export const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (values: ForgotPasswordFormValues) => {
    console.log("Reset password requested for:", values.email);
    alert(`Link reset password telah dikirim ke ${values.email}`);
    // TODO: Implement actual forgot password logic
  };

  return (
    <AuthFormWrapperRandom
      title="Lupa Password?"
      description="Masukkan email Anda dan kami akan mengirimkan link untuk reset password."
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
                <FormDescription>
                  Kami akan mengirim link reset password ke email ini.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Mengirim..." : "Kirim Link Reset"}
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
