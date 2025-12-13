"use client";

import React from "react";
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar
} from "@/components/ui/shadcn-io/ai/prompt-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";

type Props = {
  input: string;
  mode: string;
  onInputChange: (input: string) => void;
  onModeChange: (mode: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
};

export default function ChatPrompt({
  input,
  mode,
  onInputChange: setInput,
  onModeChange: setMode,
  onSubmit: handleSubmit,
  textareaRef
}: Props) {
  return (
    <div className="space-y-4">
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputTextarea
          ref={textareaRef}
          value={input}
          onChange={(e: any) => setInput(e.currentTarget.value)}
          placeholder="Tanyakan apa saja tentang produk atau ide bisnis Anda..."
          autoFocus
          className="min-h-[100px] md:min-h-[60px]"
        />
        <PromptInputToolbar>
          <Select
            value={mode ?? undefined}
            onValueChange={(val) => {
              setMode(val);
            }}
          >
            <SelectTrigger className="relative w-[180px]">
              <GlowEffect
                colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={0.9}
                className="opacity-20"
              />
              <SelectValue placeholder="Mode" className="bg-background relative z-10 text-white" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chat">Percakapan</SelectItem>
              <SelectItem value="analysis">Analisis</SelectItem>
            </SelectContent>
          </Select>
          <div>
            <PromptInputSubmit disabled={!input.trim() || !mode?.trim()} />
          </div>
        </PromptInputToolbar>
      </PromptInput>

      <p className="text-muted-foreground ml-2 text-xs">
        Tekan <kbd className="bg-muted rounded px-2 py-1 text-xs">Enter</kbd> untuk submit,{" "}
        <kbd className="bg-muted rounded px-2 py-1 text-xs">Shift+Enter</kbd> untuk baris baru
      </p>
    </div>
  );
}
