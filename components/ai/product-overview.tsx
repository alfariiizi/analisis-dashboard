"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  Label
} from "recharts";

type ProductCategory = "trending" | "hero" | "jenuh" | "tidak-laku";

type ProductPoint = {
  name: string;
  ulasan: number;
  penjualan: number;
  category: ProductCategory;
  harga: number;
  rating: number;
  image?: string;
};

type ProductStatistics = {
  totalOmset30Hari: string;
  rataOmset30Hari: string;
  totalPenjualan30Hari: number;
  rataPenjualan30Hari: number;
  rentangHarga: { min: string; max: string };
  rataHarga: string;
  rentangRating: { min: number; max: number };
  rataRating: number;
  totalUlasan: number;
  rataUlasan: number;
};

type Props = {
  products: ProductPoint[];
  statistics: ProductStatistics;
  timeframe?: string;
};

const categoryColors = {
  trending: "hsl(210, 100%, 60%)", // Blue
  hero: "hsl(142, 76%, 36%)", // Green
  jenuh: "hsl(48, 96%, 53%)", // Yellow
  "tidak-laku": "hsl(0, 84%, 60%)" // Red
};

const categoryLabels = {
  trending: "Produk Trending",
  hero: "Produk Hero",
  jenuh: "Produk Jenuh",
  "tidak-laku": "Produk Tidak Laku"
};

export default function ProductOverview({ products, statistics, timeframe = "30 Hari" }: Props) {
  // Calculate median for reference lines
  const medianUlasan = calculateMedian(products.map((p) => p.ulasan));
  const medianPenjualan = calculateMedian(products.map((p) => p.penjualan));

  // Count products by category
  const categoryCounts = products.reduce(
    (acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    },
    {} as Record<ProductCategory, number>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header with Legend */}
      <Card className="p-4 sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
            <h2 className="text-lg font-semibold sm:text-xl">
              Rangkuman ({products.length} produk)
            </h2>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {(Object.keys(categoryLabels) as ProductCategory[]).map((category) => (
              <div key={category} className="flex items-center gap-1.5 sm:gap-2">
                <div
                  className="h-3 w-3 rounded sm:h-4 sm:w-4"
                  style={{ backgroundColor: categoryColors[category] }}
                />
                <span className="text-xs sm:text-sm">
                  {categoryLabels[category]}
                  {categoryCounts[category] ? ` (${categoryCounts[category]})` : ""}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scatter Chart */}
        <div className="h-[300px] w-full sm:h-[400px] lg:h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{
                top: 10,
                right: 10,
                bottom: 40,
                left: 40
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                type="number"
                dataKey="ulasan"
                name="Ulasan"
                className="text-xs"
                label={{
                  value: "Ulasan",
                  position: "bottom",
                  offset: 40,
                  className: "fill-foreground text-sm"
                }}
              />
              <YAxis
                type="number"
                dataKey="penjualan"
                name="Penjualan"
                className="text-xs"
                label={{
                  value: "Penjualan",
                  angle: -90,
                  position: "left",
                  offset: 40,
                  className: "fill-foreground text-sm"
                }}
              />

              {/* Reference lines for quadrants */}
              <ReferenceLine
                x={medianUlasan}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="3 3"
                strokeOpacity={0.5}
              />
              <ReferenceLine
                y={medianPenjualan}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="3 3"
                strokeOpacity={0.5}
              />

              {/* Quadrant labels - hidden on mobile */}
              <text
                x="15%"
                y="15%"
                textAnchor="middle"
                className="fill-muted-foreground hidden text-xs font-medium sm:block sm:text-sm"
                opacity="0.7"
              >
                Produk Potensial
              </text>
              <text
                x="85%"
                y="15%"
                textAnchor="middle"
                className="fill-muted-foreground hidden text-xs font-medium sm:block sm:text-sm"
                opacity="0.7"
              >
                Produk Terbaik
              </text>
              <text
                x="15%"
                y="85%"
                textAnchor="middle"
                className="fill-muted-foreground hidden text-xs font-medium sm:block sm:text-sm"
                opacity="0.7"
              >
                Produk Low Demand
              </text>
              <text
                x="85%"
                y="85%"
                textAnchor="middle"
                className="fill-muted-foreground hidden text-xs font-medium sm:block sm:text-sm"
                opacity="0.7"
              >
                Produk Jenuh
              </text>

              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomTooltip />}
                wrapperClassName="!bg-background !border !border-border !rounded-lg !shadow-lg"
              />

              <Scatter name="Products" data={products} fill="hsl(var(--primary))">
                {products.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={categoryColors[entry.category]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Statistics Cards */}
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {/* Left Column */}
        <Card className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            <StatRow
              label={`Total Omset Data ${timeframe} Terakhir`}
              value={statistics.totalOmset30Hari}
              //              valueClassName="text-orange-500"
            />
            <StatRow
              label={`Rata-rata Omset Data ${timeframe} Terakhir`}
              value={statistics.rataOmset30Hari}
              //              valueClassName="text-orange-500"
            />
            <StatRow
              label="Rentang Harga"
              value={`${statistics.rentangHarga.min} - ${statistics.rentangHarga.max}`}
              //              valueClassName="text-orange-500"
            />
            <StatRow
              label="Rata-rata Harga"
              value={statistics.rataHarga}
              //              valueClassName="text-orange-500"
            />
            <StatRow
              label="Rentang Rating"
              value={`★ ${statistics.rentangRating.min.toFixed(2)} - ★ ${statistics.rentangRating.max.toFixed(2)}`}
              //              valueClassName="text-orange-500"
            />
            <StatRow
              label="Rata-rata Rating"
              value={`★ ${statistics.rataRating.toFixed(2)}`}
              //              valueClassName="text-orange-500"
            />
            <StatRow
              label="Total Ulasan"
              value={`${statistics.totalUlasan.toLocaleString("id-ID")} ulasan`}
            />
            <StatRow label="Rata-rata Ulasan" value={`${statistics.rataUlasan} ulasan`} />
          </div>
        </Card>

        {/* Right Column */}
        <Card className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            <StatRow label="Total" value={`${timeframe}`} className="font-semibold" />
            <div className="h-6" /> {/* Spacer */}
            <StatRow
              label={`Total Penjualan Data ${timeframe} Terakhir`}
              value={`${statistics.totalPenjualan30Hari} unit`}
              //              valueClassName="text-orange-500"
            />
            <StatRow
              label={`Rata-rata Penjualan Data ${timeframe} Terakhir`}
              value={`${statistics.rataPenjualan30Hari} unit`}
              //              valueClassName="text-orange-500"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

function StatRow({
  label,
  value,
  valueClassName,
  className
}: {
  label: string;
  value: string;
  valueClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-1 border-b pb-2 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pb-3 ${className || ""}`}
    >
      <span className="text-muted-foreground text-xs sm:text-sm">{label}</span>
      <span className={`text-sm font-medium sm:text-sm ${valueClassName || ""}`}>{value}</span>
    </div>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const data = payload[0].payload as ProductPoint;
    return (
      <div className="bg-background max-w-[250px] rounded-lg border p-2.5 shadow-lg sm:max-w-xs sm:p-3">
        <p className="mb-1.5 text-xs font-semibold sm:mb-2 sm:text-sm">{data.name}</p>
        <div className="space-y-0.5 text-xs sm:space-y-1 sm:text-sm">
          <p>
            <span className="text-muted-foreground">Kategori:</span>{" "}
            <span className="font-medium" style={{ color: categoryColors[data.category] }}>
              {categoryLabels[data.category]}
            </span>
          </p>
          <p>
            <span className="text-muted-foreground">Penjualan:</span>{" "}
            <span className="font-medium">{data.penjualan} unit</span>
          </p>
          <p>
            <span className="text-muted-foreground">Ulasan:</span>{" "}
            <span className="font-medium">{data.ulasan}</span>
          </p>
          <p>
            <span className="text-muted-foreground">Harga:</span>{" "}
            <span className="font-medium">
              {data.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </span>
          </p>
          <p>
            <span className="text-muted-foreground">Rating:</span>{" "}
            <span className="font-medium">★ {data.rating.toFixed(1)}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
}

function calculateMedian(numbers: number[]): number {
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}
