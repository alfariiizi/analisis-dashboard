"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TableBlock from "@/components/blocks/v1/table-block";
import { TableColumn } from "@/@types/analysis-blocks";

type Props = {
  totalFound: number;
  previewData: {
    columns: TableColumn[];
    data: Record<string, any>[];
  };
  query?: string;
};

/**
 * Product Preview Component
 * Shows a preview of products found before running full analysis
 * Used in chat to give user transparency about what will be analyzed
 */
export default function ProductPreview({ totalFound, previewData, query }: Props) {
  return (
    <Card className="border-primary/50 p-6">
      <div className="mb-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Preview Data</Badge>
          <Badge variant="outline">{totalFound} produk ditemukan</Badge>
        </div>
        {query && (
          <p className="text-muted-foreground text-sm">
            Query: <span className="font-medium">{query}</span>
          </p>
        )}
      </div>

      <div className="mb-4">
        <p className="text-muted-foreground text-sm">
          Berikut adalah preview {previewData.data.length} produk teratas dari total {totalFound} produk yang
          ditemukan. Data ini akan digunakan untuk analisis lengkap.
        </p>
      </div>

      <TableBlock
        type="table"
        title={`Preview ${previewData.data.length} Produk Teratas`}
        columns={previewData.columns}
        data={previewData.data}
      />

      <div className="bg-muted/50 mt-4 rounded-lg p-4">
        <p className="text-sm font-medium">
          ✨ Ketik <span className="text-primary">&quot;Ya, lanjutkan&quot;</span> untuk memulai analisis lengkap
        </p>
      </div>
    </Card>
  );
}
