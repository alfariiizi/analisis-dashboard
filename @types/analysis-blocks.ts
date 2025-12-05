/**
 * Block-based content system for analysis
 * Similar to Notion blocks / WordPress Gutenberg
 */

// ============= Base Block Types =============

export type BlockType =
  | "heading"
  | "paragraph"
  | "list"
  | "table"
  | "chart"
  | "metric-card"
  | "comparison"
  | "callout"
  | "divider"
  | "image";

// ============= Individual Block Interfaces =============

export interface HeadingBlock {
  type: "heading";
  level: 2 | 3 | 4 | 5 | 6; // Skip h1 as it's in the analysis title
  content: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  content: string;
}

export interface ListBlock {
  type: "list";
  ordered: boolean;
  items: string[];
}

export interface TableColumn {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: string;
}

export interface TableBlock {
  type: "table";
  title?: string;
  columns: TableColumn[];
  data: Record<string, any>[];
  sortable?: boolean;
  searchable?: boolean;
  pageSize?: number;
}

export type ChartType = "bar" | "line" | "pie" | "area" | "composed";

export interface ChartDataPoint {
  [key: string]: string | number;
}

export interface ChartConfig {
  xAxisKey: string;
  yAxisKey?: string | string[]; // For multiple series
  xAxisLabel?: string;
  yAxisLabel?: string;
  colors?: string[];
}

export interface ChartBlock {
  type: "chart";
  chartType: ChartType;
  title?: string;
  description?: string;
  data: ChartDataPoint[];
  config: ChartConfig;
  height?: number;
}

export interface MetricCardBlock {
  type: "metric-card";
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  description?: string;
  icon?: string;
}

export interface ComparisonItem {
  category: string;
  metrics: Record<string, string | number>;
  color?: string;
}

export interface ComparisonBlock {
  type: "comparison";
  title?: string;
  items: ComparisonItem[];
}

export type CalloutVariant = "info" | "success" | "warning" | "error";

export interface CalloutBlock {
  type: "callout";
  variant: CalloutVariant;
  title?: string;
  content: string;
}

export interface DividerBlock {
  type: "divider";
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

// ============= Union Type =============

export type AnalysisBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | TableBlock
  | ChartBlock
  | MetricCardBlock
  | ComparisonBlock
  | CalloutBlock
  | DividerBlock
  | ImageBlock;

// ============= Analysis Structure =============

export type ProductCategory = "trending" | "hero" | "jenuh" | "tidak-laku";

export interface ProductPoint {
  name: string;
  ulasan: number;
  penjualan: number;
  category: ProductCategory;
  harga: number;
  rating: number;
  image?: string;
}

export interface ProductStatistics {
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
}

export interface BlockBasedAnalysis {
  id: string;
  title: string;
  category: string;
  createdAt: string;
  summary: string;
  tags: string[];
  products: number;
  insights: number;
  componentVersion: "v1"; // For future versioning
  blocks: AnalysisBlock[];
  productData?: {
    columns: TableColumn[];
    data: Record<string, any>[];
  };
  productOverview?: {
    products: ProductPoint[];
    statistics: ProductStatistics;
    timeframe?: string;
  };
}
