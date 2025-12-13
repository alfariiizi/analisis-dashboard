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

type ResendVerificationFormValues = z.infer<typeof formSchema>;

export const ResendVerificationForm = () => {
  const form = useForm<ResendVerificationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (values: ResendVerificationFormValues) => {
    console.log("Resend verification to:", values.email);
    alert(`Email verifikasi telah dikirim ulang ke ${values.email}`);
    // TODO: Implement actual resend verification logic
  };

  return (
    <AuthFormWrapperRandom
      title="Kirim Ulang Verifikasi"
      description="Masukkan email Anda dan kami akan mengirimkan ulang link verifikasi."
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
                  Kami akan mengirim ulang link verifikasi ke email ini.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Mengirim..." : "Kirim Ulang Verifikasi"}
          </Button>

          <div className="text-muted-foreground text-center text-sm">
            Sudah terverifikasi?{" "}
            <a href="/signin" className="text-secondary-foreground font-medium underline">
              Masuk sekarang
            </a>
          </div>
        </form>
      </Form>
    </AuthFormWrapperRandom>
  );
};
