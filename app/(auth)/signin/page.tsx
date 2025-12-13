import { AppIcon } from "@/components/svg/app-icon";
import React from "react";
import { SigninForm } from "./_components/signin-form";

type Props = {
  searchParams: Promise<{
    callbackUrl?: string | undefined;
  }>;
};

export default async function page({ searchParams }: Props) {
  const { callbackUrl } = await searchParams;

  return (
    <div>
      <SigninForm />
    </div>
  );
}
