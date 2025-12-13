"use client";

import type React from "react";
import { useState, useRef, useMemo, RefObject } from "react";
import { Button } from "@/components/ui/button";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/animate-ui/components/radix/tooltip";
import ChatPrompt from "@/components/ai/chat-prompt";

const suggestionInput = [
  "Organik skincare untuk kulit orang yang sering olah raga di bawah sinar matahari",
  "Produk fashion yang cocok untuk anak muda di kota besar dengan gaya hidup aktif",
  "Makanan sehat dan praktis untuk pekerja kantoran yang sibuk",
  "Peralatan rumah tangga yang ramah lingkungan dan hemat energi"
];

const headerTitle = [
  "Produk apa yang ingin Anda analisis?",
  "Butuh ide produk baru?",
  "Cari peluang pasar yang menarik?",
  "Ingin tahu tren produk terbaru?",
  "Butuh inspirasi untuk inovasi produk?"
];

interface PromptHistory {
  id: string;
  content: string;
  timestamp: Date;
  opportunityId?: string;
  runningFrom?: Date;
  status?: "completed" | "running" | "failed" | "pending";
  startedAt?: string;
  completedAt?: string;
}

export default function NewChat() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<string | null>(null);

  const shuffledTitle = useMemo(() => [...headerTitle].sort(() => Math.random() - 0.5), []);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const reusePrompt = (content: string) => {
    setInput(content);
    textareaRef.current?.focus();
  };

  return (
    <div className="">
      <div className="w-full">
        {/* <h1 className='text-center text-2xl font-bold'>Mulai Analisis Baru</h1> */}
      </div>
      <TextLoop
        interval={3}
        className="flex justify-center text-center text-lg font-semibold md:text-2xl"
      >
        {shuffledTitle.map((title) => (
          <span key={title} className="text-wrap">
            {title}
          </span>
        ))}
      </TextLoop>

      <div className="px-6 pt-8 pb-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <div className="grid w-full grid-cols-1 gap-x-2 gap-y-1 md:grid-cols-2 lg:grid-cols-4">
            {suggestionInput.map((suggestion) => (
              <Tooltip key={suggestion} delayDuration={-100}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => reusePrompt(suggestion)}
                    className="text-muted-foreground hover:bg-accent/50 flex w-full justify-start gap-1 bg-transparent text-start"
                  >
                    <p className="line-clamp-1 text-sm text-wrap">{suggestion}</p>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-muted text-foreground max-w-[300px]"
                  arrowClassName="bg-muted fill-muted"
                >
                  <p className="text-wrap">{suggestion}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          <ChatPrompt
            input={input}
            mode={mode ?? ""}
            onInputChange={setInput}
            onModeChange={setMode}
            onSubmit={handleSubmit}
            // @ts-ignore
            textareaRef={textareaRef as RefObject<HTMLTextAreaElement | null>}
          />
        </div>
      </div>
    </div>
  );
}
