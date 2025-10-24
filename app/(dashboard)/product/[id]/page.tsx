import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Star,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  ShoppingCart,
  Activity,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  ExternalLink
} from "lucide-react";
import { generateMeta } from "@/lib/generate-meta";
import { promises as fs } from "fs";
import path from "path";
import PageContainer from "@/components/page-container";
import { Progress } from "@/components/ui/progress";
import { ShopeeImage, TokopediaImage, BlibliImage, TikTokShopImage } from "@/assets/image";

interface Product {
  id: string;
  product_name: string;
  image: string;
  marketplace: "tokopedia" | "shopee" | "tiktok" | "blibli";
  marketplace_url: string;
  price: number;
  original_price: number;
  rating: number;
  sold: number;
  stock: number;
  category: string;
  condition: string;
  shop: {
    name: string;
    location: string;
    rating: number;
  };
  discount: number;
  shipping: string;
}

export async function generateMetadata() {
  return generateMeta({
    title: "Analisis Performa Produk",
    description: "Lihat analisis mendalam performa produk dari marketplace Indonesia",
    canonical: "/product"
  });
}

async function getProduct(id: string): Promise<Product | null> {
  const data = await fs.readFile(path.join(process.cwd(), "app/(dashboard)/product/data.json"));
  const products: Product[] = JSON.parse(data.toString());
  return products.find((p) => p.id === id) || null;
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <PageContainer>
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Produk Tidak Ditemukan</h2>
            <p className="text-muted-foreground mt-2">Produk yang Anda cari tidak tersedia</p>
            <Button asChild className="mt-4">
              <Link href="/product">Kembali ke Daftar Produk</Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    );
  }

  // Simulated analytics data
  const salesVelocity = ((product.sold / 30) * 100).toFixed(0); // units per month
  const conversionRate = ((product.sold / (product.sold * 20)) * 100).toFixed(1);
  const revenueEstimate = product.price * product.sold;
  const competitorCount = 47;
  const pricePosition = "Kompetitif"; // Low, Competitive, High
  const demandTrend = "Naik"; // Rising, Stable, Declining

  // Price history simulation (last 30 days)
  const priceHistory = [
    { date: "30 hari lalu", price: product.original_price },
    { date: "20 hari lalu", price: product.original_price * 0.95 },
    { date: "10 hari lalu", price: product.original_price * 0.85 },
    { date: "Hari ini", price: product.price }
  ];

  // Stock history simulation
  const stockTrend = [
    { period: "Minggu 1", stock: product.stock + 200 },
    { period: "Minggu 2", stock: product.stock + 150 },
    { period: "Minggu 3", stock: product.stock + 80 },
    { period: "Minggu 4", stock: product.stock }
  ];

  // Rating distribution
  const ratingDistribution = [
    { stars: 5, percentage: 65, count: Math.floor(product.sold * 0.65) },
    { stars: 4, percentage: 25, count: Math.floor(product.sold * 0.25) },
    { stars: 3, percentage: 7, count: Math.floor(product.sold * 0.07) },
    { stars: 2, percentage: 2, count: Math.floor(product.sold * 0.02) },
    { stars: 1, percentage: 1, count: Math.floor(product.sold * 0.01) }
  ];

  // Marketplace configuration
  const marketplaceConfig = {
    tokopedia: {
      name: "Tokopedia",
      logo: TokopediaImage,
      url: product.marketplace_url
    },
    shopee: {
      name: "Shopee",
      logo: ShopeeImage,
      url: product.marketplace_url
    },
    tiktok: {
      name: "TikTok Shop",
      logo: TikTokShopImage,
      url: product.marketplace_url
    },
    blibli: {
      name: "Blibli",
      logo: BlibliImage,
      url: product.marketplace_url
    }
  };

  const currentMarketplace = marketplaceConfig[product.marketplace];

  return (
    <PageContainer>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <Button asChild variant="link" className="h-auto p-0">
          <Link href="/product">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Daftar Produk
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Analisis dengan AI
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={currentMarketplace.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Lihat di {currentMarketplace.name}
            </a>
          </Button>
        </div>
      </div>

      {/* Product Overview Card */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex gap-6">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border">
              <Image
                src={product.image}
                alt={product.product_name}
                fill
                className="object-cover"
                unoptimized
              />
              {product.discount > 0 && (
                <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
                  -{product.discount}%
                </Badge>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{product.product_name}</h1>
                  <div className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
                    <Image
                      src={currentMarketplace.logo}
                      alt={currentMarketplace.name}
                      width={80}
                      height={24}
                      className="size-10 object-contain"
                    />
                    <span>•</span>
                    <span className="capitalize">{product.category.replace(/-/g, " ")}</span>
                    <span>•</span>
                    <span>{product.shop.name}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm">
                  ID: {product.id}
                </Badge>
              </div>
              <div className="mt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground text-sm">Rating</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-semibold">{product.sold.toLocaleString("id-ID")}</span>
                  <span className="text-muted-foreground text-sm">Terjual</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span className="font-semibold">{product.stock.toLocaleString("id-ID")}</span>
                  <span className="text-muted-foreground text-sm">Stok</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Harga Saat Ini</CardTitle>
            <DollarSign className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp{product.price.toLocaleString("id-ID")}</div>
            {product.discount > 0 && (
              <p className="text-muted-foreground flex items-center gap-1 text-xs">
                <TrendingDown className="h-3 w-3 text-green-500" />
                <span className="line-through">
                  Rp{product.original_price.toLocaleString("id-ID")}
                </span>
                <Badge variant="destructive" className="ml-1 text-xs">
                  -{product.discount}%
                </Badge>
              </p>
            )}
            <p className="text-muted-foreground mt-1 text-xs">Posisi: {pricePosition}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Kecepatan Penjualan</CardTitle>
            <Activity className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesVelocity}</div>
            <p className="text-muted-foreground text-xs">unit/bulan</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3" />
              Tren: {demandTrend}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estimasi Pendapatan</CardTitle>
            <BarChart3 className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp{(revenueEstimate / 1000000).toFixed(1)}jt</div>
            <p className="text-muted-foreground text-xs">Total penjualan</p>
            <p className="text-muted-foreground mt-1 text-xs">
              {product.sold.toLocaleString("id-ID")} unit terjual
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tingkat Konversi</CardTitle>
            <ShoppingCart className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{conversionRate}%</div>
            <p className="text-muted-foreground text-xs">View to purchase</p>
            <p className="text-muted-foreground mt-1 text-xs">
              {competitorCount} kompetitor serupa
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Analysis */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Price History */}
        <Card>
          <CardHeader>
            <CardTitle>Riwayat Harga</CardTitle>
            <CardDescription>Perubahan harga 30 hari terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {priceHistory.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">{item.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Rp{item.price.toLocaleString("id-ID")}</span>
                    {index > 0 && item.price < priceHistory[index - 1].price && (
                      <Badge variant="secondary" className="text-xs">
                        <TrendingDown className="mr-1 h-3 w-3" />
                        {(
                          ((priceHistory[index - 1].price - item.price) /
                            priceHistory[index - 1].price) *
                          100
                        ).toFixed(0)}
                        %
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-muted/50 mt-4 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-primary mt-0.5 h-4 w-4" />
                <div className="text-sm">
                  <p className="font-semibold">Insight Harga</p>
                  <p className="text-muted-foreground text-xs">
                    Harga turun {product.discount}% dalam 30 hari terakhir, menunjukkan strategi
                    diskon untuk meningkatkan penjualan.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stock Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle>Monitoring Stok</CardTitle>
            <CardDescription>Pergerakan stok 4 minggu terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stockTrend.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.period}</span>
                    <span className="font-semibold">{item.stock.toLocaleString("id-ID")} unit</span>
                  </div>
                  <Progress value={(item.stock / (product.stock + 200)) * 100} className="h-2" />
                </div>
              ))}
            </div>
            <div className="bg-muted/50 mt-4 rounded-lg p-3">
              <div className="flex items-start gap-2">
                {product.stock < 100 ? (
                  <AlertCircle className="mt-0.5 h-4 w-4 text-orange-500" />
                ) : (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                )}
                <div className="text-sm">
                  <p className="font-semibold">Status Stok</p>
                  <p className="text-muted-foreground text-xs">
                    {product.stock < 100
                      ? "Stok menipis. Pertimbangkan restock segera untuk menghindari kehabisan stok."
                      : "Stok tersedia cukup untuk 2-3 minggu ke depan berdasarkan velocity saat ini."}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rating Analysis */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Analisis Rating & Review</CardTitle>
          <CardDescription>Distribusi rating dari pembeli</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center gap-2">
                  <Star className="h-8 w-8 fill-yellow-500 text-yellow-500" />
                  <span className="text-4xl font-bold">{product.rating}</span>
                </div>
                <p className="text-muted-foreground mt-1 text-sm">
                  dari {product.sold.toLocaleString("id-ID")} ulasan
                </p>
              </div>
              <Separator orientation="vertical" className="h-24" />
              <div className="flex-1 space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-muted-foreground w-8 text-sm">{item.stars}★</span>
                    <Progress value={item.percentage} className="h-2 flex-1" />
                    <span className="text-muted-foreground w-12 text-right text-sm">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="mb-2 font-semibold">Sentiment Positif</h4>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>✓ Kualitas produk sesuai deskripsi</p>
                  <p>✓ Pengiriman cepat dan packing rapi</p>
                  <p>✓ Harga kompetitif</p>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="mb-2 font-semibold">Area Perbaikan</h4>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>• Beberapa keluhan tentang variasi warna</p>
                  <p>• Instruksi penggunaan kurang detail</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Analysis */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Analisis Kompetitor</CardTitle>
          <CardDescription>Perbandingan dengan produk serupa di marketplace</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Posisi Harga</span>
                <Badge variant="secondary">#{Math.floor(competitorCount * 0.3)}</Badge>
              </div>
              <p className="mt-2 text-2xl font-bold">Top 30%</p>
              <p className="text-muted-foreground text-xs">dari {competitorCount} kompetitor</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Rating Relatif</span>
                <Badge variant="success">Unggul</Badge>
              </div>
              <p className="mt-2 text-2xl font-bold">{product.rating}/5.0</p>
              <p className="text-muted-foreground text-xs">Rata-rata kompetitor: 4.3</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Volume Penjualan</span>
                <Badge variant="secondary">#{Math.floor(competitorCount * 0.2)}</Badge>
              </div>
              <p className="mt-2 text-2xl font-bold">Top 20%</p>
              <p className="text-muted-foreground text-xs">Performa sangat baik</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
