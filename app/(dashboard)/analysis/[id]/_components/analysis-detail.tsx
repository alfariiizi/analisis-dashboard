"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnalysisData } from "@/@data/analysis-data";
import { Calendar, Package, Lightbulb, ArrowLeft, Share2, Download } from "lucide-react";
import Link from "next/link";
import { MessageContent } from "@/components/ui/message";

type Props = {
  analysis: AnalysisData;
};

export default function AnalysisDetail({ analysis }: Props) {
  const formattedDate = new Date(analysis.createdAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <Link href="/analysis">
          <Button variant="ghost" size="sm" className="w-fit">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Analisis
          </Button>
        </Link>

        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-3">
              <Badge variant="secondary" className="w-fit">
                {analysis.category}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight">{analysis.title}</h1>
              <p className="text-muted-foreground text-lg">{analysis.summary}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>{analysis.products} produk dianalisis</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <span>{analysis.insights} insight utama</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {analysis.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <Card className="p-8">
        <MessageContent
          markdown
          className="prose prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-invert w-full max-w-full bg-transparent p-0"
        >
          {analysis.content}
        </MessageContent>
      </Card>
    </div>
  );
}
