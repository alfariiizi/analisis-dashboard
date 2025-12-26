"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";
import type { DetailProductData, ProductSnapshot } from "@/api/client";
import { api } from "@/api";
import { ShopeeImage, TokopediaImage, BlibliImage, TikTokShopImage } from "@/assets/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Activity,
  AlertCircle,
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  DollarSign,
  ExternalLink,
  MessageSquare,
  Package,
  ShoppingCart,
  Star,
  TrendingDown,
  TrendingUp
} from "lucide-react";

const marketplaceAssets = {
  tokopedia: { label: "Tokopedia", logo: TokopediaImage },
  shopee: { label: "Shopee", logo: ShopeeImage },
  tiktok: { label: "TikTok Shop", logo: TikTokShopImage },
  blibli: { label: "Blibli", logo: BlibliImage }
} as const;

type MarketplaceKey = keyof typeof marketplaceAssets;

type ProductDetailClientProps = {
  productId: string;
};

export default function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const { data, isPending, isError } = useQuery({
    ...api.rq.getProductsIdOptions({
      path: { id: productId }
    })
  });

  const detail = data?.data as DetailProductData | undefined;
  const product = detail?.product;
  const snapshots = detail?.historical_snapshots ?? [];
  const latestSnapshot = detail?.latest_snapshot ?? snapshots[snapshots.length - 1];
  const analytics = detail?.analytics;

  if (isPending) {
    return <ProductDetailSkeleton />;
  }

  if (isError || !product) {
    return <ProductDetailError />;
  }

  const price = product.price_current ?? latestSnapshot?.price ?? 0;
  const originalPrice = product.price_original ?? latestSnapshot?.original_price ?? price;
  const discountPercentage =
    product.discount_percentage ??
    latestSnapshot?.discount_percentage ??
    analytics?.price_change_percentage ??
    0;
  const soldCount = product.sold_count ?? latestSnapshot?.sold_count ?? 0;
  const stockCount = product.stock ?? latestSnapshot?.stock ?? 0;
  const ratingValue = product.product_rating ?? latestSnapshot?.rating ?? 0;
  const reviewCount = product.review_count ?? latestSnapshot?.review_count ?? 0;
  const sourceKey = (product.source ?? latestSnapshot?.marketplace ?? "tokopedia").toLowerCase();
  const marketplace =
    (marketplaceAssets as Record<string, (typeof marketplaceAssets)[MarketplaceKey]>)[sourceKey] ??
    marketplaceAssets.tokopedia;
  const marketplaceUrl = product.source_url ?? latestSnapshot?.product_url ?? "";
  const categoryLabel =
    product.category ?? latestSnapshot?.category_name ?? "Kategori tidak tersedia";
  const sellerName = product.shop_name ?? latestSnapshot?.seller_name ?? "Toko tidak diketahui";
  const sellerLocation = product.shop_location ?? latestSnapshot?.seller_location ?? "";
  const thumbnail = product.thumbnail ?? product.images?.[0] ?? latestSnapshot?.thumbnail ?? "";
  const description =
    product.long_description ?? product.short_description ?? latestSnapshot?.description ?? "";
  const images = (product.images?.length ? product.images : (latestSnapshot?.images ?? []))?.slice(
    0,
    4
  );

  const salesVelocity = calculateSalesVelocity(snapshots, soldCount);
  const sellThroughRate = calculateSellThrough(soldCount, stockCount);
  const revenueEstimate = price * soldCount;
  const competitorCount = analytics?.data_source_count ?? 0;
  const demandTrend = analytics
    ? getDemandTrendLabel(analytics.review_growth)
    : salesVelocity >= soldCount
      ? "Naik"
      : "Stabil";
  const pricePosition = getPricePositionLabel(discountPercentage);

  const priceHistory = buildPriceHistory(snapshots, price, originalPrice);
  const stockTrend = buildStockTrend(snapshots, stockCount);
  const ratingDistribution = buildRatingDistribution(latestSnapshot, ratingValue, reviewCount);

  const stockInsight = analytics?.currently_in_stock
    ? "Stok masih aman berdasarkan perubahan historis."
    : "Produk pernah kehabisan stok, pantau ketersediaan harian.";
  const priceInsight =
    discountPercentage < 0
      ? `Harga turun ${Math.abs(discountPercentage).toFixed(1)}% dari rata-rata.`
      : discountPercentage > 0
        ? `Harga naik ${discountPercentage.toFixed(1)}% dibanding periode sebelumnya.`
        : "Harga stabil dalam periode terakhir.";

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="link" className="h-auto p-0">
          <Link href="/product">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Produk
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" /> Analisis dengan AI
          </Button>
          {marketplaceUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={marketplaceUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Lihat di {marketplace.label}
              </a>
            </Button>
          )}
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border">
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  alt={product.title ?? "Product thumbnail"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center text-xs">
                  Tidak ada gambar
                </div>
              )}
              {discountPercentage < 0 && (
                <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
                  {discountPercentage.toFixed(1)}%
                </Badge>
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h1 className="text-2xl font-bold">
                      {product.title ?? latestSnapshot?.title ?? "Produk"}
                    </h1>
                    <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-2 text-sm">
                      <Image
                        src={marketplace.logo}
                        alt={marketplace.label}
                        width={40}
                        height={12}
                        className="size-8 object-contain"
                      />
                      <span>•</span>
                      <span className="capitalize">{categoryLabel}</span>
                      <span>•</span>
                      <span>{sellerName}</span>
                      {sellerLocation && (
                        <>
                          <span>•</span>
                          <span>{sellerLocation}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {product.id && (
                    <Badge variant="secondary" className="text-xs">
                      ID: {product.id}
                    </Badge>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <MetricPill
                    icon={<Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />}
                    label="Rating"
                    value={ratingValue.toFixed(1)}
                    footer={`${reviewCount.toLocaleString("id-ID")} ulasan`}
                  />
                  <MetricPill
                    icon={<TrendingUp className="h-4 w-4" />}
                    label="Terjual"
                    value={soldCount.toLocaleString("id-ID")}
                    footer="Unit"
                  />
                  <MetricPill
                    icon={<Package className="h-4 w-4" />}
                    label="Stok"
                    value={stockCount.toLocaleString("id-ID")}
                    footer="Tersedia"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <InsightCard
          title="Harga Saat Ini"
          icon={<DollarSign className="text-muted-foreground h-4 w-4" />}
          primary={formatCurrency(price)}
          secondary={
            discountPercentage < 0
              ? `Diskon dari Rp${originalPrice.toLocaleString("id-ID")}`
              : undefined
          }
          footer={`Posisi: ${pricePosition}`}
          badge={discountPercentage < 0 ? `${Math.abs(discountPercentage).toFixed(1)}%` : undefined}
        />
        <InsightCard
          title="Kecepatan Penjualan"
          icon={<Activity className="text-muted-foreground h-4 w-4" />}
          primary={salesVelocity.toLocaleString("id-ID")}
          secondary="unit/bulan"
          footer={`Tren: ${demandTrend}`}
        />
        <InsightCard
          title="Estimasi Pendapatan"
          icon={<BarChart3 className="text-muted-foreground h-4 w-4" />}
          primary={formatCurrency(revenueEstimate)}
          secondary={`${soldCount.toLocaleString("id-ID")} unit terjual`}
          footer={
            analytics?.average_price
              ? `Rata-rata Rp${analytics.average_price.toLocaleString("id-ID")}`
              : undefined
          }
        />
        <InsightCard
          title="Sell-through"
          icon={<ShoppingCart className="text-muted-foreground h-4 w-4" />}
          primary={`${sellThroughRate.toFixed(1)}%`}
          secondary="Sold vs stok"
          footer={competitorCount ? `${competitorCount} sumber data` : undefined}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Riwayat Harga</CardTitle>
            <CardDescription>Ringkasan perubahan harga terbaru</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {priceHistory.map((entry) => (
              <div key={entry.label} className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">{entry.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{formatCurrency(entry.price)}</span>
                  {entry.change !== undefined && (
                    <Badge variant={entry.change < 0 ? "secondary" : "outline"} className="text-xs">
                      {entry.change < 0 ? (
                        <TrendingDown className="mr-1 h-3 w-3" />
                      ) : (
                        <TrendingUp className="mr-1 h-3 w-3" />
                      )}
                      {Math.abs(entry.change).toFixed(1)}%
                    </Badge>
                  )}
                </div>
              </div>
            ))}
            <InsightBanner
              icon={<AlertCircle className="text-primary h-4 w-4" />}
              title="Insight Harga"
              description={priceInsight}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monitoring Stok</CardTitle>
            <CardDescription>Pergerakan stok berdasarkan snapshot</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {stockTrend.map((entry) => (
              <div key={entry.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{entry.label}</span>
                  <span className="font-semibold">{entry.stock.toLocaleString("id-ID")} unit</span>
                </div>
                <Progress value={entry.progress} className="h-2" />
              </div>
            ))}
            <InsightBanner
              icon={
                analytics?.currently_in_stock ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-orange-500" />
                )
              }
              title="Status Stok"
              description={stockInsight}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analisis Rating & Review</CardTitle>
          <CardDescription>Distribusi ulasan berdasarkan bintang</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-8 w-8 fill-yellow-500 text-yellow-500" />
                <span className="text-4xl font-bold">{ratingValue.toFixed(1)}</span>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                dari {reviewCount.toLocaleString("id-ID")} ulasan
              </p>
            </div>
            <div className="space-y-3">
              {ratingDistribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <div className="flex w-10 items-center gap-1 text-sm">
                    <span>{row.stars}</span>
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  </div>
                  <Progress value={row.percentage} className="h-2 flex-1" />
                  <span className="text-muted-foreground w-16 text-right text-xs">
                    {row.percentage.toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {images?.length ? (
        <Card>
          <CardHeader>
            <CardTitle>Galeri Produk</CardTitle>
            <CardDescription>Snapshot terbaru dari marketplace</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {images.map((src) => (
                <div key={src} className="relative h-48 overflow-hidden rounded-lg border">
                  <Image
                    src={src}
                    alt="Product gallery"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      {description && (
        <Card>
          <CardHeader>
            <CardTitle>Deskripsi Produk</CardTitle>
            <CardDescription>Sumber data marketplace</CardDescription>
          </CardHeader>
          <CardContent>
            {description.includes("<") ? (
              <div
                className="prose prose-sm prose-invert"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p className="text-sm whitespace-pre-line">{description}</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function MetricPill({
  icon,
  label,
  value,
  footer
}: {
  icon: ReactNode;
  label: string;
  value: string;
  footer?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-primary border-border/50 bg-background flex size-10 items-center justify-center rounded-full border">
        {icon}
      </div>
      <div>
        <p className="text-muted-foreground text-xs">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
        {footer && <p className="text-muted-foreground text-xs">{footer}</p>}
      </div>
    </div>
  );
}

function InsightCard({
  title,
  icon,
  primary,
  secondary,
  footer,
  badge
}: {
  title: string;
  icon: ReactNode;
  primary: string;
  secondary?: string;
  footer?: string;
  badge?: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {primary}
          {badge && (
            <Badge variant="secondary" className="ml-2 text-xs">
              {badge}
            </Badge>
          )}
        </div>
        {secondary && <p className="text-muted-foreground text-xs">{secondary}</p>}
        {footer && <p className="text-muted-foreground mt-1 text-xs">{footer}</p>}
      </CardContent>
    </Card>
  );
}

function InsightBanner({
  icon,
  title,
  description
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-muted/50 rounded-lg p-3">
      <div className="flex items-start gap-2">
        {icon}
        <div className="text-sm">
          <p className="font-semibold">{title}</p>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ProductDetailSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-6 w-40" />
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-6">
            <Skeleton className="h-32 w-32 rounded-lg" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Card key={idx}>
            <CardContent className="space-y-3 p-6">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-3 w-20" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Card key={idx}>
            <CardContent className="space-y-4 p-6">
              {Array.from({ length: 3 }).map((__, inner) => (
                <Skeleton key={inner} className="h-4 w-full" />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProductDetailError() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-lg border p-6 text-center">
      <div>
        <p className="text-xl font-semibold">Produk tidak ditemukan</p>
        <p className="text-muted-foreground text-sm">
          Kami tidak dapat memuat data produk dari backend.
        </p>
      </div>
      <Button asChild>
        <Link href="/product">Kembali ke Daftar Produk</Link>
      </Button>
    </div>
  );
}

function calculateSalesVelocity(snapshots: ProductSnapshot[] | null, fallback: number) {
  if (!snapshots?.length) return fallback;
  const ordered = [...snapshots].sort(
    (a, b) => new Date(a.scraped_at).getTime() - new Date(b.scraped_at).getTime()
  );
  const first = ordered[0];
  const last = ordered[ordered.length - 1];
  const diff = Math.max(0, (last.sold_count ?? 0) - (first.sold_count ?? 0));
  const days = Math.max(
    1,
    (new Date(last.scraped_at).getTime() - new Date(first.scraped_at).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  return Math.round((diff / days) * 30) || fallback;
}

function calculateSellThrough(sold: number, stock: number) {
  const total = sold + stock;
  if (!total) return 0;
  return (sold / total) * 100;
}

function getDemandTrendLabel(reviewGrowth = 0) {
  if (reviewGrowth > 0) return "Naik";
  if (reviewGrowth < 0) return "Turun";
  return "Stabil";
}

function getPricePositionLabel(change = 0) {
  if (change < -5) return "Agresif";
  if (change > 5) return "Premium";
  return "Kompetitif";
}

function buildPriceHistory(
  snapshots: ProductSnapshot[] | null,
  currentPrice: number,
  originalPrice: number
) {
  if (!snapshots?.length) {
    return [
      {
        label: "Hari ini",
        price: currentPrice,
        change: originalPrice ? ((currentPrice - originalPrice) / originalPrice) * 100 : 0
      }
    ];
  }

  const ordered = [...snapshots]
    .sort((a, b) => new Date(a.scraped_at).getTime() - new Date(b.scraped_at).getTime())
    .slice(-4);

  return ordered.map((snapshot) => ({
    label: formatSnapshotLabel(snapshot.scraped_at),
    price: snapshot.price ?? currentPrice,
    change: snapshot.original_price
      ? ((snapshot.price - snapshot.original_price) / snapshot.original_price) * 100
      : undefined
  }));
}

function buildStockTrend(snapshots: ProductSnapshot[] | null, currentStock: number) {
  if (!snapshots?.length) {
    return [{ label: "Saat ini", stock: currentStock, progress: currentStock ? 100 : 0 }];
  }

  const ordered = [...snapshots]
    .sort((a, b) => new Date(a.scraped_at).getTime() - new Date(b.scraped_at).getTime())
    .slice(-4);
  const maxStock = Math.max(currentStock, ...ordered.map((snapshot) => snapshot.stock ?? 0));

  return ordered.map((snapshot) => ({
    label: formatSnapshotLabel(snapshot.scraped_at),
    stock: snapshot.stock ?? 0,
    progress: maxStock ? ((snapshot.stock ?? 0) / maxStock) * 100 : 0
  }));
}

function buildRatingDistribution(snapshot?: ProductSnapshot, rating = 0, totalReviews = 0) {
  if (snapshot) {
    const totals = [
      { stars: 5, count: snapshot.review_5_star },
      { stars: 4, count: snapshot.review_4_star },
      { stars: 3, count: snapshot.review_3_star },
      { stars: 2, count: snapshot.review_2_star },
      { stars: 1, count: snapshot.review_1_star }
    ];
    const total = totals.reduce((sum, item) => sum + item.count, 0) || totalReviews || 1;
    return totals.map((item) => ({
      stars: item.stars,
      percentage: Math.min(100, (item.count / total) * 100)
    }));
  }

  if (!totalReviews) {
    return [5, 4, 3, 2, 1].map((stars, index) => ({
      stars,
      percentage: index === 0 ? 60 : Math.max(5, 20 - index * 5)
    }));
  }

  const base = rating / 5;
  return [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    percentage: Math.max(2, Math.min(80, (base - (5 - stars) * 0.1) * 100))
  }));
}

function formatSnapshotLabel(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date));
}

function formatCurrency(value: number) {
  return `Rp${value.toLocaleString("id-ID")}`;
}
