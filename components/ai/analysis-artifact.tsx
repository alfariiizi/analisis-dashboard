"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBlockBasedAnalysisById } from "@/@data/analysis-blocks-data";
import { ExternalLink, FileText, Package, Lightbulb } from "lucide-react";
import Link from "next/link";

type Props = {
  analysisId: string;
};

export default function AnalysisArtifact({ analysisId }: Props) {
  const analysis = getBlockBasedAnalysisById(analysisId);

  if (!analysis) {
    return null;
  }

  return (
    <Card className="group relative overflow-hidden border-primary/50 p-6 transition-all hover:border-primary hover:shadow-lg">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
            <FileText className="text-primary h-6 w-6" />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {analysis.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Analisis Lengkap
              </Badge>
            </div>
            <h3 className="line-clamp-2 text-lg font-semibold">{analysis.title}</h3>
          </div>
        </div>

        {/* Summary */}
        <p className="text-muted-foreground line-clamp-2 text-sm">{analysis.summary}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Package className="h-3.5 w-3.5" />
            <span>{analysis.products} produk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lightbulb className="h-3.5 w-3.5" />
            <span>{analysis.insights} insight</span>
          </div>
        </div>

        {/* Action */}
        <Link href={`/analysis/${analysis.id}`} className="w-full">
          <Button className="w-full" variant="default">
            <ExternalLink className="h-4 w-4" />
            Lihat Analisis Lengkap
          </Button>
        </Link>
      </div>

      {/* Decorative gradient */}
      <div className="bg-primary/5 absolute inset-x-0 bottom-0 h-1 transition-all group-hover:h-2" />
    </Card>
  );
}
