/**
 * Block-based analysis data
 * Using structured blocks instead of markdown
 */

import { BlockBasedAnalysis } from "@/@types/analysis-blocks";

export const blockBasedAnalyses: Record<string, BlockBasedAnalysis> = {
  "skincare-organik-outdoor": {
    id: "skincare-organik-outdoor",
    title: "Analisis Produk Skincare Organik untuk Kulit Aktif di Bawah Sinar Matahari",
    category: "Skincare & Beauty",
    createdAt: "2024-12-20",
    summary:
      "Analisis mendalam pasar skincare organik untuk aktivitas outdoor dengan fokus pada produk sport-grade, sunscreen mineral, dan recovery pasca-matahari. Ditemukan peluang besar pada segmen yang belum tergarap.",
    tags: ["skincare", "organik", "outdoor", "sunscreen", "sport"],
    products: 150,
    insights: 8,
    componentVersion: "v1",
    blocks: [
      {
        type: "heading",
        level: 2,
        content: "Ringkasan Eksekutif"
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Temuan utama: Pasar menunjukkan permintaan sangat kuat pada cleanser pengendali minyak/jerawat dan serum antioksidan. Hal ini terlihat dari penjualan masif pada produk face wash pria (Kahf) dan serum pencerah/antioksidan (TRUEVE, ELFORMULA).",
          "Peluang: Celah terbesar adalah skincare organik sport-grade untuk aktivitas outdoor—terutama sunscreen mineral organik yang tahan keringat, plus rangkaian recovery pasca-matahari.",
          "Rekomendasi: Luncurkan lini 'Sport-Organic' yang mencakup mineral sunscreen SPF50+ tahan keringat, gel cleanser organik low pH untuk kulit berminyak-berkeringat, dan serum recovery pasca-matahari berbasis antioksidan alami."
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "Validasi Pasar",
        content:
          "Produk dengan volume penjualan tinggi (terjual) memberikan validasi pasar paling kuat. Pemenang (Kahf FW 100 ml) menegaskan besarnya masalah minyak/jerawat pada pengguna aktif."
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 2,
        content: "Metodologi & Kriteria Penilaian"
      },
      {
        type: "paragraph",
        content: "Bobot penilaian menggunakan 5 kriteria utama:"
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Penjualan/terjual (±45%)",
          "Harga/kompetitif (±20%)",
          "Rating & ulasan (±15%)",
          "Ketersediaan stok (±10%)",
          "Faktor lain: relevansi kebutuhan outdoor, bundling, format (±10%)"
        ]
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 2,
        content: "Top-10 Produk Berdasarkan Penjualan"
      },
      {
        type: "table",
        title: "Produk Terlaris dengan Validasi Pasar Tertinggi",
        columns: [
          { key: "rank", label: "Rank", align: "center", width: "60px" },
          { key: "product", label: "Produk", align: "left" },
          { key: "price", label: "Harga (IDR)", align: "right" },
          { key: "sold", label: "Terjual", align: "right" },
          { key: "rating", label: "Rating", align: "center" },
          { key: "relevance", label: "Relevansi", align: "left" }
        ],
        data: [
          {
            rank: 1,
            product: "Kahf Face Wash Oil & Acne Care 100 ml",
            price: 53000,
            sold: 100000,
            rating: "4.9 ⭐",
            relevance: "Oil-control untuk kulit berkeringat"
          },
          {
            rank: 2,
            product: "Triple Pack Kahf Face Wash 3×100 ml",
            price: 119800,
            sold: 50000,
            rating: "4.9 ⭐",
            relevance: "Bundle hemat validasi kebutuhan rutin"
          },
          {
            rank: 3,
            product: "TRUEVE Ultimate Drops Brightening Serum",
            price: 108000,
            sold: 9000,
            rating: "4.9 ⭐",
            relevance: "Antioksidan + barrier pasca-matahari"
          },
          {
            rank: 4,
            product: "NIVEA Paket 2× Body Serum 320 ml SPF15",
            price: 176055,
            sold: 2000,
            rating: "4.9 ⭐",
            relevance: "Body care + UV ringan (SPF15)"
          },
          {
            rank: 5,
            product: "NIVEA Body Serum 180 ml SPF15",
            price: 60810,
            sold: 1000,
            rating: "5.0 ⭐",
            relevance: "Antioksidan + UV ringan"
          }
        ]
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 2,
        content: "Analisis Volume Penjualan"
      },
      {
        type: "chart",
        chartType: "bar",
        title: "Perbandingan Volume Penjualan Kategori Produk",
        description: "Data menunjukkan dominasi produk oil-control dan antioksidan",
        data: [
          { category: "Cleanser Oil-Control", penjualan: 150000 },
          { category: "Serum Antioksidan", penjualan: 11000 },
          { category: "Body Care SPF", penjualan: 3250 },
          { category: "Lainnya", penjualan: 1500 }
        ],
        config: {
          xAxisKey: "category",
          yAxisKey: "penjualan",
          xAxisLabel: "Kategori",
          yAxisLabel: "Unit Terjual"
        },
        height: 350
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 2,
        content: "Perbandingan Produk Lokal vs Import"
      },
      {
        type: "comparison",
        title: "Analisis Kompetitif: Lokal vs Import",
        items: [
          {
            category: "Produk Lokal",
            color: "#22c55e",
            metrics: {
              "Harga rata-rata": "Rp 85.000 - Rp 150.000",
              "Sweet spot": "Rp 95.000 - Rp 120.000",
              "Brand populer": "Somethinc, Skintific, Avoskin",
              "Rating rata-rata": "4.7/5.0",
              "Total penjualan/bulan": "~125,000 unit"
            }
          },
          {
            category: "Produk Import",
            color: "#3b82f6",
            metrics: {
              "Harga rata-rata": "Rp 150.000 - Rp 350.000",
              "Sweet spot": "Rp 180.000 - Rp 250.000",
              "Brand populer": "COSRX, Cetaphil, Innisfree",
              "Rating rata-rata": "4.6/5.0",
              "Total penjualan/bulan": "~85,000 unit"
            }
          }
        ]
      },
      {
        type: "callout",
        variant: "success",
        title: "Key Insight",
        content:
          "Produk lokal mendominasi volume penjualan dengan margin 47% lebih tinggi dari import, namun rating hampir setara (4.7 vs 4.6)."
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 2,
        content: "Rekomendasi Produk Baru"
      },
      {
        type: "heading",
        level: 3,
        content: "1. Sport-Organic Mineral Sunscreen SPF50+ PA++++"
      },
      {
        type: "paragraph",
        content:
          "Target: Pelari, pesepeda, pemain outdoor sport; kulit berminyak/berkeringat dan sensitif."
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Value: Perlindungan UVA/UVB tinggi, tahan keringat 80 menit, non-nano, non-komedogenik",
          "Formula: Non-nano Zinc Oxide 20-22% + Titanium Dioxide 3-5%, Organic Aloe, Green Tea, Niacinamide",
          "Tekstur: Gel-cream ringan, quickly setting, low-white cast",
          "Sertifikasi: BPOM, Halal, COSMOS Organic, cruelty-free"
        ]
      },
      {
        type: "table",
        title: "Proyeksi Harga & Margin",
        columns: [
          { key: "item", label: "Item", align: "left" },
          { key: "value", label: "Nilai", align: "right" }
        ],
        data: [
          { item: "COGS", value: "Rp 38.000" },
          { item: "Harga jual ritel", value: "Rp 139.000 - 159.000" },
          { item: "Margin kotor target", value: "65% - 70%" }
        ]
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 3,
        content: "2. Purifying Sport Cleanser (Low pH Gel, Organik)"
      },
      {
        type: "paragraph",
        content: "Target: Kulit berminyak/berkeringat, komedo/jerawat."
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Formula: Organic Tea Tree Hydrosol, Willow Bark (BHA alami), Zinc PCA",
          "pH 5.0-5.5, SLS/SLES-free, non-stripping",
          "Kemasan: 100 ml flip-top; travel 50 ml"
        ]
      },
      {
        type: "table",
        columns: [
          { key: "item", label: "Item", align: "left" },
          { key: "value", label: "Nilai", align: "right" }
        ],
        data: [
          { item: "COGS", value: "Rp 15.000" },
          { item: "Harga jual", value: "Rp 59.000 - 69.000" },
          { item: "Margin kotor target", value: "70%+" }
        ]
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 2,
        content: "Strategi Go-To-Market"
      },
      {
        type: "paragraph",
        content: "Positioning: 'Organik, Sport-Grade, Sweat-Proof, Ramah Kulit & Alam'"
      },
      {
        type: "heading",
        level: 3,
        content: "Channel Distribution"
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Online: Tokopedia/Shopee (kategori Sport & Beauty), website D2C",
          "Offline: running store, bike shop, gym, komunitas outdoor, apotek modern"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Aktivasi"
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Sampling di event lari/sepeda/triathlon; race-kit insert",
          "KOL atlet, pelatih, fisioterapis; UGC 're-apply challenge'",
          "Edukasi: 'SPF untuk atlet: kenapa SPF50+ dan water-resistant itu wajib'"
        ]
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 2,
        content: "Proyeksi Penjualan 12 Bulan"
      },
      {
        type: "chart",
        chartType: "line",
        title: "Proyeksi Unit Penjualan (Konservatif)",
        description: "Target menangkap 1-2% dari market yang sudah tervalidasi",
        data: [
          { bulan: "Bulan 1", sunscreen: 900, cleanser: 600 },
          { bulan: "Bulan 2", sunscreen: 1200, cleanser: 800 },
          { bulan: "Bulan 3", sunscreen: 1500, cleanser: 1000 },
          { bulan: "Bulan 4", sunscreen: 1800, cleanser: 1200 },
          { bulan: "Bulan 5", sunscreen: 2200, cleanser: 1400 },
          { bulan: "Bulan 6", sunscreen: 2500, cleanser: 1500 },
          { bulan: "Bulan 7", sunscreen: 3000, cleanser: 2000 },
          { bulan: "Bulan 8", sunscreen: 3500, cleanser: 2200 },
          { bulan: "Bulan 9", sunscreen: 4000, cleanser: 2500 },
          { bulan: "Bulan 10", sunscreen: 4500, cleanser: 2800 },
          { bulan: "Bulan 11", sunscreen: 5000, cleanser: 3000 },
          { bulan: "Bulan 12", sunscreen: 5500, cleanser: 3500 }
        ],
        config: {
          xAxisKey: "bulan",
          yAxisKey: ["sunscreen", "cleanser"],
          xAxisLabel: "Timeline",
          yAxisLabel: "Unit Terjual"
        },
        height: 400
      },
      {
        type: "callout",
        variant: "success",
        title: "Proyeksi Revenue Year 1",
        content:
          "Dengan asumsi konservatif, target revenue year 1: Rp 1.2 - 1.8 miliar dengan GM blended 35-45% setelah biaya marketplace & promosi."
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        level: 2,
        content: "Kesimpulan"
      },
      {
        type: "paragraph",
        content:
          "Data penjualan jelas menunjukkan: kontrol minyak/jerawat dan antioksidan adalah dua pilar kebutuhan kulit aktif. Dengan menggabungkan dua pilar tersebut ke dalam formulasi organik sport-grade—terutama sunscreen mineral SPF50+ tahan keringat—kita memanfaatkan validasi pasar yang sudah terbukti, sekaligus mengisi kekosongan 'organik untuk atlet' yang belum tergarap oleh pemain besar."
      },
      {
        type: "callout",
        variant: "info",
        title: "Next Steps",
        content:
          "Bundling cerdas dan aktivasi komunitas olahraga akan mempercepat adopsi dan memperkuat retensi. Rencana 90 hari siap dijalankan."
      }
    ],
    productData: {
      columns: [
        { key: "name", label: "Nama Produk", align: "left" },
        { key: "brand", label: "Brand", align: "left" },
        { key: "category", label: "Kategori", align: "left" },
        { key: "price", label: "Harga", align: "right" },
        { key: "sold", label: "Terjual", align: "right" },
        { key: "rating", label: "Rating", align: "center" },
        { key: "stock", label: "Stok", align: "right" }
      ],
      data: [
        {
          name: "Kahf Face Wash Oil & Acne Care 100 ml",
          brand: "Kahf",
          category: "Cleanser",
          price: 53000,
          sold: 100000,
          rating: "4.9 ⭐",
          stock: 0
        },
        {
          name: "Triple Pack Kahf Face Wash 3×100 ml",
          brand: "Kahf",
          category: "Cleanser Bundle",
          price: 119800,
          sold: 50000,
          rating: "4.9 ⭐",
          stock: 0
        },
        {
          name: "TRUEVE Ultimate Drops Brightening Serum",
          brand: "TRUEVE",
          category: "Serum",
          price: 108000,
          sold: 9000,
          rating: "4.9 ⭐",
          stock: 0
        },
        {
          name: "ELFORMULA Niacinamide + Zinc Serum 20ml",
          brand: "ELFORMULA",
          category: "Serum",
          price: 89000,
          sold: 8500,
          rating: "4.8 ⭐",
          stock: 150
        },
        {
          name: "Azarine Hydrasoothe Sunscreen Gel SPF45",
          brand: "Azarine",
          category: "Sunscreen",
          price: 45000,
          sold: 7200,
          rating: "4.8 ⭐",
          stock: 320
        },
        {
          name: "Somethinc Ceramide Moist Barrier Relief",
          brand: "Somethinc",
          category: "Moisturizer",
          price: 92000,
          sold: 6800,
          rating: "4.7 ⭐",
          stock: 200
        },
        {
          name: "Skintific 5X Ceramide Barrier Repair",
          brand: "Skintific",
          category: "Moisturizer",
          price: 110000,
          sold: 6500,
          rating: "4.8 ⭐",
          stock: 180
        },
        {
          name: "Whitelab Brightening Facial Wash",
          brand: "Whitelab",
          category: "Cleanser",
          price: 48000,
          sold: 5900,
          rating: "4.6 ⭐",
          stock: 420
        },
        {
          name: "Avoskin Perfect Hydrating Treatment Essence",
          brand: "Avoskin",
          category: "Essence",
          price: 139000,
          sold: 5400,
          rating: "4.9 ⭐",
          stock: 95
        },
        {
          name: "MS Glow Acne Spot Serum",
          brand: "MS Glow",
          category: "Serum",
          price: 65000,
          sold: 5100,
          rating: "4.5 ⭐",
          stock: 280
        },
        {
          name: "Emina Sun Protection SPF 30",
          brand: "Emina",
          category: "Sunscreen",
          price: 28000,
          sold: 4800,
          rating: "4.4 ⭐",
          stock: 550
        },
        {
          name: "Wardah Lightening Facial Serum",
          brand: "Wardah",
          category: "Serum",
          price: 42000,
          sold: 4500,
          rating: "4.6 ⭐",
          stock: 380
        },
        {
          name: "Lacoco Watermelon Glow Serum",
          brand: "Lacoco",
          category: "Serum",
          price: 95000,
          sold: 4200,
          rating: "4.7 ⭐",
          stock: 160
        },
        {
          name: "Scarlett Whitening Body Lotion",
          brand: "Scarlett",
          category: "Body Care",
          price: 85000,
          sold: 3900,
          rating: "4.8 ⭐",
          stock: 240
        },
        {
          name: "Glad2Glow Facial Cleanser pH Balance",
          brand: "Glad2Glow",
          category: "Cleanser",
          price: 55000,
          sold: 3600,
          rating: "4.5 ⭐",
          stock: 190
        }
      ]
    },
    productOverview: {
      timeframe: "30 Hari",
      statistics: {
        totalOmset30Hari: "IDR 28,252,125",
        rataOmset30Hari: "IDR 4,036,018",
        totalPenjualan30Hari: 488,
        rataPenjualan30Hari: 70,
        rentangHarga: { min: "IDR 33,210", max: "IDR 39,950" },
        rataHarga: "IDR 41,287",
        rentangRating: { min: 0.0, max: 5.0 },
        rataRating: 4.84,
        totalUlasan: 1042,
        rataUlasan: 149
      },
      products: [
        // Hero products (high sales, high reviews) - green
        {
          name: "Kahf Face Wash Oil & Acne Care",
          ulasan: 744,
          penjualan: 459,
          category: "hero",
          harga: 53000,
          rating: 4.9
        },
        {
          name: "TRUEVE Brightening Serum",
          ulasan: 680,
          penjualan: 425,
          category: "hero",
          harga: 108000,
          rating: 4.9
        },
        // Trending products (high sales, moderate reviews) - blue
        {
          name: "ELFORMULA Niacinamide Serum",
          ulasan: 420,
          penjualan: 380,
          category: "trending",
          harga: 89000,
          rating: 4.8
        },
        {
          name: "Kahf Triple Pack Bundle",
          ulasan: 372,
          penjualan: 344,
          category: "trending",
          harga: 119800,
          rating: 4.9
        },
        // Jenuh products (low sales, high reviews) - yellow
        {
          name: "Azarine Hydrasoothe Sunscreen",
          ulasan: 720,
          penjualan: 229,
          category: "jenuh",
          harga: 45000,
          rating: 4.8
        },
        {
          name: "Somethinc Ceramide Moisturizer",
          ulasan: 650,
          penjualan: 198,
          category: "jenuh",
          harga: 92000,
          rating: 4.7
        },
        // Low demand products (low sales, low reviews) - red
        {
          name: "Local Brand Sunscreen SPF30",
          ulasan: 280,
          penjualan: 115,
          category: "tidak-laku",
          harga: 35000,
          rating: 4.2
        },
        {
          name: "Generic Face Wash 50ml",
          ulasan: 185,
          penjualan: 88,
          category: "tidak-laku",
          harga: 28000,
          rating: 4.0
        }
      ]
    }
  }
};

export function getBlockBasedAnalysisById(id: string): BlockBasedAnalysis | null {
  return blockBasedAnalyses[id] || null;
}

export function getAllBlockBasedAnalyses(): BlockBasedAnalysis[] {
  return Object.values(blockBasedAnalyses).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
