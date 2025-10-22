"use client";

import React, { useRef, useState } from "react";
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message";
import ChatPrompt from "@/components/ai/chat-prompt";

type Props = {
  id: string;
};

export default function Chat({ id }: Props) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex h-full flex-col gap-20">
      <ChatContainer />
      <div className="sticky bottom-0 left-0">
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

function ChatContainer() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <Message className="justify-end">
        <MessageContent>Hello! How can I help you today?</MessageContent>
      </Message>

      <Message className="justify-start">
        <MessageContent markdown className="bg-transparent p-0">
          I can help with a variety of tasks: answering questions, providing information, assisting
          with coding, generating creative content. What would you like help with today?
        </MessageContent>
      </Message>

      <Message className="justify-end">
        <MessageContent>Hello! How can I help you today?</MessageContent>
      </Message>

      <Message className="justify-start">
        <MessageContent markdown className="bg-transparent p-0">
          I can help with a variety of tasks: answering questions, providing information, assisting
          with coding, generating creative content. What would you like help with today?
        </MessageContent>
      </Message>

      <Message className="justify-end">
        <MessageContent>Hello! How can I help you today?</MessageContent>
      </Message>

      <Message className="justify-start">
        <MessageContent markdown className="bg-transparent p-0">
          I can help with a variety of tasks: answering questions, providing information, assisting
          with coding, generating creative content. What would you like help with today?
        </MessageContent>
      </Message>

      <Message className="justify-end">
        <MessageContent>Hello! How can I help you today?</MessageContent>
      </Message>

      <Message className="justify-start">
        <MessageContent markdown className="bg-transparent p-0">
          I can help with a variety of tasks: answering questions, providing information, assisting
          with coding, generating creative content. What would you like help with today?
        </MessageContent>
      </Message>
    </div>
  );
}
