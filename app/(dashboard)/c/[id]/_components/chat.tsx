"use client";

import React, { useRef, useState } from "react";
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message";
import ChatPrompt from "@/components/ai/chat-prompt";
import { getChatById } from "@/@data/chat-messages";
import { cn } from "@/lib/utils";
import AnalysisArtifact from "@/components/ai/analysis-artifact";

type Props = {
  id: string;
};

export default function Chat({ id }: Props) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Get chat data based on ID
  const chatData = getChatById(id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex h-full w-full max-w-7xl flex-col gap-20">
      <ChatContainer messages={chatData.messages} />
      <div className="bg-background sticky bottom-0 left-0 w-full pb-3">
        <ChatPrompt
          input={input}
          mode={mode ?? ""}
          onInputChange={setInput}
          onModeChange={setMode}
          onSubmit={handleSubmit}
          textareaRef={textareaRef}
        />
      </div>
    </div>
  );
}

type ChatContainerProps = {
  messages: Array<{
    role: "user" | "assistant";
    content: string;
    analysisId?: string;
  }>;
};

function ChatContainer({ messages }: ChatContainerProps) {
  // If no messages, show empty state
  if (messages.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 py-20">
        <div className="text-muted-foreground text-center">
          <p className="text-lg font-medium">Belum ada percakapan</p>
          <p className="text-sm">Mulai chat untuk menganalisis produk marketplace Anda</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-1 flex-col gap-8">
      {messages.map((message, index) => (
        <Message key={index} className={message.role === "user" ? "justify-end" : "justify-start"}>
          <div className="flex flex-col gap-4">
            <MessageContent
              markdown={message.role === "assistant"}
              className={cn(
                "prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs prose-invert w-full max-w-full",
                message.role === "assistant"
                  ? "bg-transparent p-0 lg:min-w-4xl"
                  : "w-fit max-w-xl min-w-0"
              )}
            >
              {message.content}
            </MessageContent>
            {message.analysisId && message.role === "assistant" && (
              <div className="max-w-2xl">
                <AnalysisArtifact analysisId={message.analysisId} />
              </div>
            )}
          </div>
        </Message>
      ))}
    </div>
  );
}
