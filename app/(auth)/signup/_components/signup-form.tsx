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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { AuthFormWrapperRandom } from "../../_components/auth-form-wrapper-random";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Nama depan harus minimal 2 karakter."
  }),
  lastName: z.string().min(2, {
    message: "Nama belakang harus minimal 2 karakter."
  }),
  phone: z
    .string()
    .min(10, {
      message: "Nomor telepon harus minimal 10 digit."
    })
    .regex(/^[0-9]+$/, {
      message: "Nomor telepon hanya boleh berisi angka."
    }),
  countryCode: z.string(),
  email: z.string().email({
    message: "Email tidak valid."
  }),
  password: z.string().min(8, {
    message: "Password harus minimal 8 karakter."
  })
});

type SignupFormValues = z.infer<typeof formSchema>;

export const SignupForm = () => {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "8123123123",
      countryCode: "+62",
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: SignupFormValues) => {
    console.log("Form submitted!", values);
    alert("Akun berhasil dibuat!");
    form.reset();
  };

  return (
    <AuthFormWrapperRandom
      title="Buat Akun Anda"
      description="Mulai perjalanan Anda dengan OmniTrend. Daftar sekarang untuk mengakses alat dan wawasan terbaik kami."
      useRandomHero={true}
      useRandomGradient={true}
    >
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Nama Depan</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Nama Belakang</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormItem>
            <FormLabel>Nomor Telepon</FormLabel>
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange} disabled>
                      <SelectTrigger className="h-fit w-[100px]">
                        <SelectValue placeholder="Kode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+62">+62</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="8123123123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FormItem>

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
                  <PasswordInput placeholder="Minimal 8 karakter" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Membuat akun..." : "Buat Akun"}
          </Button>

          <div className="text-muted-foreground text-center text-sm">
            Sudah punya akun?{" "}
            <a href="/signin" className="text-secondary-foreground font-medium underline">
              Masuk
            </a>
          </div>
        </form>
      </Form>
    </AuthFormWrapperRandom>
  );
};
