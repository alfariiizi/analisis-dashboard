"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Package,
  Lightbulb,
  ArrowLeft,
  Share2,
  FileText,
  ShoppingCart
} from "lucide-react";
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
      const rating = row.getValue("rating") as number;
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
        <Badge variant={variant}>{stock === 0 ? "Habis" : `${formatNumber(stock)} unit`}</Badge>
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
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <Link href="/analysis">
          <Button variant="ghost" size="sm" className="w-fit">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Kembali ke Daftar Analisis</span>
            <span className="sm:hidden">Kembali</span>
          </Button>
        </Link>

        <div className="flex flex-col gap-4">
          {/* Title and Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-1 flex-col gap-3">
              <Badge variant="secondary" className="w-fit">
                {analysis.category}
              </Badge>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {analysis.title}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                {analysis.summary}
              </p>
            </div>
            <div className="flex gap-2 sm:flex-shrink-0">
              <Button variant="outline" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Meta Info */}
          <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs sm:gap-6 sm:text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{formattedDate}</span>
              <span className="sm:hidden">
                {new Date(analysis.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{analysis.products} produk dianalisis</span>
              <span className="sm:hidden">{analysis.products} produk</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{analysis.insights} insight utama</span>
              <span className="sm:hidden">{analysis.insights} insight</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {analysis.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content with Tabs */}
      <Tabs defaultValue="hasil" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:max-w-md">
          <TabsTrigger
            value="hasil"
            className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm"
          >
            <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Hasil Analisis</span>
            <span className="sm:hidden">Hasil</span>
          </TabsTrigger>
          <TabsTrigger
            value="produk"
            className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm"
          >
            <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Data Produk</span>
            <span className="sm:hidden">Produk</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hasil" className="mt-4 sm:mt-6">
          <Card className="p-4 sm:p-6 lg:p-8">
            <BlockRenderer blocks={analysis.blocks} version={analysis.componentVersion} />
          </Card>
        </TabsContent>

        <TabsContent value="produk" className="mt-4 sm:mt-6">
          {analysis.productData ? (
            <div className="space-y-4 sm:space-y-6">
              {/* Product Overview with Scatter Chart */}
              {analysis.productOverview && (
                <ProductOverview
                  products={analysis.productOverview.products}
                  statistics={analysis.productOverview.statistics}
                  timeframe={analysis.productOverview.timeframe}
                />
              )}

              {/* Product Data Table */}
              <Card className="p-4 sm:p-6 lg:p-8">
                <div className="mb-4 sm:mb-6">
                  <h2 className="mb-2 text-xl font-bold sm:text-2xl">
                    Data Produk yang Dianalisis
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Berikut adalah {analysis.productData.data.length} produk yang menjadi dasar
                    analisis ini. Data bersifat read-only dan menampilkan snapshot dari waktu
                    analisis dilakukan.
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
            <Card className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col items-center justify-center py-12 sm:py-20">
                <Package className="text-muted-foreground mb-4 h-10 w-10 sm:h-12 sm:w-12" />
                <p className="text-muted-foreground text-sm sm:text-base">
                  Data produk tidak tersedia untuk analisis ini
                </p>
              </div>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
