"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Package, Lightbulb, ArrowLeft, Share2, Download, FileText, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { getBlockBasedAnalysisById } from "@/@data/analysis-blocks-data";
import BlockRenderer from "@/components/blocks/block-renderer";
import ProductOverview from "@/components/ai/product-overview";
import AnalysisDataTable, {
  AnalysisProduct,
  createSortableHeader,
  formatCurrency,
  formatNumber
} from "@/components/analysis/analysis-data-table";
import { ColumnDef } from "@tanstack/react-table";

type Props = {
  analysisId: string;
};

// Define columns for product data table
const productColumns: ColumnDef<AnalysisProduct>[] = [
  {
    accessorKey: "name",
    header: "Nama Produk",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => row.getValue("brand")
  },
  {
    accessorKey: "category",
    header: "Kategori",
    cell: ({ row }) => <Badge variant="outline">{row.getValue("category")}</Badge>
  },
  {
    accessorKey: "price",
    header: createSortableHeader("Harga"),
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      return <div className="font-semibold">{formatCurrency(price)}</div>;
    }
  },
  {
    accessorKey: "sold",
    header: createSortableHeader("Terjual"),
    cell: ({ row }) => {
      const sold = row.getValue("sold") as number;
      return <div>{formatNumber(sold)}</div>;
    }
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
      const rating = row.getValue("rating");
      return <div className="text-center">{rating}</div>;
    }
  },
  {
    accessorKey: "stock",
    header: createSortableHeader("Stok"),
    cell: ({ row }) => {
      const stock = row.getValue("stock") as number;
      const variant = stock === 0 ? "destructive" : stock < 50 ? "secondary" : "default";
      return (
        <Badge variant={variant}>
          {stock === 0 ? "Habis" : `${formatNumber(stock)} unit`}
        </Badge>
      );
    }
  }
];

export default function AnalysisDetail({ analysisId }: Props) {
  const analysis = getBlockBasedAnalysisById(analysisId);

  if (!analysis) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground">Analisis tidak ditemukan</p>
      </div>
    );
  }

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

      {/* Content with Tabs */}
      <Tabs defaultValue="hasil" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="hasil" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Hasil Analisis
          </TabsTrigger>
          <TabsTrigger value="produk" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Data Produk
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hasil" className="mt-6">
          <Card className="p-8">
            <BlockRenderer blocks={analysis.blocks} version={analysis.componentVersion} />
          </Card>
        </TabsContent>

        <TabsContent value="produk" className="mt-6">
          {analysis.productData ? (
            <div className="space-y-6">
              {/* Product Overview with Scatter Chart */}
              {analysis.productOverview && (
                <ProductOverview
                  products={analysis.productOverview.products}
                  statistics={analysis.productOverview.statistics}
                  timeframe={analysis.productOverview.timeframe}
                />
              )}

              {/* Product Data Table */}
              <Card className="p-8">
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold">Data Produk yang Dianalisis</h2>
                  <p className="text-muted-foreground">
                    Berikut adalah {analysis.productData.data.length} produk yang menjadi dasar analisis ini. Data bersifat
                    read-only dan menampilkan snapshot dari waktu analisis dilakukan.
                  </p>
                </div>
                <AnalysisDataTable
                  data={analysis.productData.data}
                  columns={productColumns}
                  searchKey="name"
                  searchPlaceholder="Cari nama produk..."
                />
              </Card>
            </div>
          ) : (
            <Card className="p-8">
              <div className="flex flex-col items-center justify-center py-20">
                <Package className="text-muted-foreground mb-4 h-12 w-12" />
                <p className="text-muted-foreground">Data produk tidak tersedia untuk analisis ini</p>
              </div>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
