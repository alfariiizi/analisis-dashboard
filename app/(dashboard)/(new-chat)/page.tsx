import PageContainer from "@/components/page-container";
import React from "react";
import NewChat from "./_components/new-chat";

export default function page() {
  return (
    <PageContainer className="flex items-center justify-center">
      <NewChat />
    </PageContainer>
  );
}
