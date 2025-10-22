import PageContainer from "@/components/page-container";
import React from "react";
import Chat from "./_components/chat";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const id = (await params).id;

  return (
    <PageContainer className="mx-auto mb-0 flex max-w-5xl flex-col gap-2">
      <Chat id={id} />
    </PageContainer>
  );
}
