"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

export default function CloseButton({}: Props) {
  const router = useRouter();
  return (
    <Button
      variant="secondary"
      className="absolute top-4 right-4 flex w-fit cursor-pointer items-center justify-center"
      onClick={() => router.back()}
    >
      <X className="size-4" />
    </Button>
  );
}
