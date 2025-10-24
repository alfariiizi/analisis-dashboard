/**
 * Mock chat messages data for marketplace analysis conversations
 * Each chat has realistic conversation about product analysis, trends, and marketplace insights
 */

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  analysisId?: string; // Reference to analysis artifact
};

export type ChatData = {
  id: string;
  title: string;
  messages: ChatMessage[];
};

export const chatMessagesData: Record<string, ChatData> = {
  "1": {
    id: "1",
    title: "Analisis produk skincare lokal vs import",
    messages: [
      {
        role: "user",
        content:
          "Saya ingin analisis perbandingan produk skincare lokal vs import di Tokopedia. Fokus pada kategori moisturizer. Dan ambil 1000 data saja. Kemudian berikan top 50 nya."
      },
      {
        role: "assistant",
        content: `Baik, saya akan membantu menganalisis perbandingan produk skincare moisturizer lokal vs import di Tokopedia.

## Data Yang Akan Saya Analisis:

1. **Top 50 produk moisturizer lokal** berdasarkan rating dan jumlah penjualan
2. **Top 50 produk moisturizer import** (Korea, Jepang, Western brands)
3. **Rentang waktu**: Data 3 bulan terakhir (Oktober - Desember 2024)

### Metrik Yang Akan Dibandingkan:

- Harga rata-rata
- Rating produk
- Jumlah penjualan bulanan
- Pertumbuhan penjualan
- Review sentiment
- Keyword yang sering muncul di review

Apakah Anda ingin saya lanjutkan dengan analisis ini?`
      },
      {
        role: "user",
        content: "Ya, lanjutkan analisis!"
      },
      {
        role: "assistant",
        content: `Saya telah membuat analisis lengkap untuk Anda. Silakan lihat detail di dokumen analisis di bawah ini.`,
        analysisId: "skincare-organik-outdoor"
      },
      {
        role: "assistant",
        content: `Berikut ringkasan hasil analisis produk moisturizer lokal vs import:

## 📊 Perbandingan Harga

### Produk Lokal:

- **Harga rata-rata**: Rp 85.000 - Rp 150.000
- **Sweet spot**: Rp 95.000 - Rp 120.000
- **Brand populer**: Somethinc (Rp 98k), Skintific (Rp 125k), Avoskin (Rp 135k)

### Produk Import:

- **Harga rata-rata**: Rp 150.000 - Rp 350.000
- **Sweet spot**: Rp 180.000 - Rp 250.000
- **Brand populer**: COSRX (Rp 185k), Cetaphil (Rp 195k), Innisfree (Rp 220k)

## ⭐ Rating & Penjualan

### Produk Lokal:

- **Rating rata-rata**: 4.7/5.0
- **Total penjualan/bulan**: ~125,000 unit
- **Top 3 produk**:
  1. Somethinc Calm Down Serum + Moisturizer (12,500 terjual/bulan)
  2. Skintific Barrier Shield (10,200 terjual/bulan)
  3. Wardah Hydrating Aloe Gel (9,800 terjual/bulan)

### Produk Import:

- **Rating rata-rata**: 4.6/5.0
- **Total penjualan/bulan**: ~85,000 unit
- **Top 3 produk**:
  1. COSRX Snail Mucin Cream (8,500 terjual/bulan)
  2. Cetaphil Moisturizing Cream (7,200 terjual/bulan)
  3. Innisfree Green Tea Seed Cream (6,800 terjual/bulan)

## 📈 Insight & Rekomendasi

1. **Produk lokal mendominasi volume penjualan** dengan margin 47% lebih tinggi
2. **Rating hampir setara**, tapi lokal sedikit unggul (4.7 vs 4.6)
3. **Price sensitivity tinggi** - produk di bawah Rp 150k lebih cepat laku
4. **Keyword trending**: "untuk kulit berminyak", "non-comedogenic", "halal"
5. **Peluang**: Moisturizer lokal dengan harga Rp 80-120k memiliki demand tertinggi

### Rekomendasi Strategi:

- Jika Anda seller produk **lokal**: fokus pada range harga Rp 95-120k dengan USP "halal" dan "cocok untuk iklim tropis"
- Jika Anda seller produk **import**: target segmen premium (Rp 200k+) dengan edukasi ingredient dan clinical results

Apakah ada kategori spesifik yang ingin dianalisis lebih dalam?`
      }
    ]
  },
  "2": {
    id: "2",
    title: "Tren penjualan sepatu sneakers Q4 2024",
    messages: [
      {
        role: "user",
        content:
          "Tolong analisis tren penjualan sepatu sneakers di Q4 2024, fokus di Tokopedia dan Shopee"
      },
      {
        role: "assistant",
        content: `Saya akan menganalisis tren penjualan sepatu sneakers Q4 2024 di Tokopedia dan Shopee.

## 📊 Overview Tren Q4 2024

Periode Oktober - Desember 2024 menunjukkan pertumbuhan signifikan pada kategori sneakers:

### Volume Penjualan:

- **Tokopedia**: ~245,000 pasang/bulan (+18% YoY)
- **Shopee**: ~310,000 pasang/bulan (+22% YoY)
- **Total market**: ~555,000 pasang/bulan

### Brand Performance:

**Top 5 Brand di Tokopedia:**

1. Compass (lokal) - 28,500 pasang/bulan
2. Specs (lokal) - 22,300 pasang/bulan
3. Nike - 18,700 pasang/bulan
4. Adidas - 16,200 pasang/bulan
5. Converse - 12,800 pasang/bulan

**Top 5 Brand di Shopee:**
1. Compass (lokal) - 35,600 pasang/bulan
2. Nike - 24,200 pasang/bulan
3. Specs (lokal) - 21,500 pasang/bulan
4. Adidas - 19,800 pasang/bulan
5. Vans - 15,300 pasang/bulan

## 💡 Key Insights:

1. **Brand lokal mendominasi** - Compass dan Specs menguasai 25% market share
2. **Price sweet spot**: Rp 250k - Rp 450k (65% dari total penjualan)
3. **Style trending**: Low-top canvas sneakers, running shoes, slip-on
4. **Peak season**: November (promo 11.11 & Black Friday) +45% vs bulan lain

### Kategori Terlaris:
- 🥇 Canvas/lifestyle sneakers: 42%
- 🥈 Running shoes: 28%
- 🥉 Basketball shoes: 18%
- Slip-on/loafers: 12%

Ingin saya breakdown lebih detail untuk kategori atau brand tertentu?`
      }
    ]
  },
  "3": {
    id: "3",
    title: "Perbandingan harga laptop gaming di Tokopedia",
    messages: [
      {
        role: "user",
        content:
          "Cari laptop gaming dengan budget 10-15 juta di Tokopedia, mana yang paling worth it?"
      },
      {
        role: "assistant",
        content: `Saya akan menganalisis laptop gaming di range harga 10-15 juta di Tokopedia untuk menemukan yang paling worth it.

## 🎮 Top 5 Laptop Gaming Worth It (10-15 Juta)

### 1. ASUS TUF Gaming A15 (Rp 11.999.000)

- **Specs**: Ryzen 7 7735HS, RTX 4050 6GB, 16GB RAM, 512GB SSD
- **Rating**: 4.8/5.0 (2,340 reviews)
- **Penjualan**: 450 unit/bulan
- **Worth it score**: 9.2/10
- ✅ **Pro**: Value terbaik, cooling bagus, baterai tahan lama
- ❌ **Con**: Design agak gaming banget

### 2. Lenovo LOQ 15IRH8 (Rp 12.499.000)

- **Specs**: Intel i5-12450H, RTX 4050 6GB, 16GB RAM, 512GB SSD
- **Rating**: 4.7/5.0 (1,890 reviews)
- **Penjualan**: 380 unit/bulan
- **Worth it score**: 8.9/10
- ✅ **Pro**: Design lebih subtle, layar bagus
- ❌ **Con**: Baterai kurang awet

### 3. HP Victus 15 (Rp 11.499.000)

- **Specs**: Ryzen 5 7535HS, RTX 4050 6GB, 16GB RAM, 512GB SSD
- **Rating**: 4.6/5.0 (1,520 reviews)
- **Penjualan**: 320 unit/bulan
- **Worth it score**: 8.7/10
- ✅ **Pro**: Harga kompetitif, performa solid
- ❌ **Con**: Build quality standar

### 4. MSI GF63 Thin (Rp 13.999.000)

- **Specs**: Intel i7-12650H, RTX 4060 8GB, 16GB RAM, 512GB SSD
- **Rating**: 4.8/5.0 (980 reviews)
- **Penjualan**: 185 unit/bulan
- **Worth it score**: 9.0/10
- ✅ **Pro**: GPU lebih kencang (RTX 4060), tipis
- ❌ **Con**: Thermal management kurang optimal

### 5. Acer Nitro 5 (Rp 14.299.000)
- **Specs**: Intel i7-12700H, RTX 4060 8GB, 16GB RAM, 1TB SSD
- **Rating**: 4.7/5.0 (1,250 reviews)
- **Penjualan**: 280 unit/bulan
- **Worth it score**: 8.8/10
- ✅ **Pro**: Storage besar, upgrade-able
- ❌ **Con**: Berat, baterai cepat habis

## 🏆 Rekomendasi:

**Jika prioritas VALUE FOR MONEY**: ASUS TUF Gaming A15 (11.9jt)
- Best bang for buck, cooling terbaik di kelasnya

**Jika prioritas GAMING PERFORMANCE**: MSI GF63 Thin (13.9jt)
- GPU RTX 4060 lebih kencang 20% dari RTX 4050

**Jika prioritas PORTABILITY**: Lenovo LOQ (12.4jt)
- Design paling elegan, cocok untuk dual-purpose (gaming + kerja)

Apakah Anda mau saya bandingkan specs lebih detail atau cari rekomendasi lain?`
      }
    ]
  },
  "4": {
    id: "4",
    title: "Riset keyword tas wanita paling laku",
    messages: [
      {
        role: "user",
        content: "Keyword apa yang paling banyak dicari untuk tas wanita di marketplace?"
      },
      {
        role: "assistant",
        content: `Saya akan menganalisis keyword tas wanita yang paling populer di marketplace Indonesia.

## 🔍 Top 20 Keyword Tas Wanita (Berdasarkan Search Volume)

### High Volume Keywords (>100k searches/bulan):

1. **"tas wanita"** - 450k searches/bulan
   - Competition: Sangat Tinggi
   - CPC estimate: Rp 1,200

2. **"tas selempang wanita"** - 185k searches/bulan
   - Competition: Tinggi
   - CPC estimate: Rp 950

3. **"tas kulit wanita"** - 142k searches/bulan
   - Competition: Tinggi
   - CPC estimate: Rp 1,100

4. **"tas branded wanita"** - 128k searches/bulan
   - Competition: Sangat Tinggi
   - CPC estimate: Rp 1,500

5. **"tas ransel wanita"** - 115k searches/bulan
   - Competition: Tinggi
   - CPC estimate: Rp 800

### Medium Volume Keywords (50k-100k searches/bulan):

6. "tas kerja wanita" - 95k searches/bulan
7. "tas tote bag wanita" - 88k searches/bulan
8. "tas pinggang wanita" - 82k searches/bulan
9. "tas kecil wanita" - 78k searches/bulan
10. "tas import wanita" - 72k searches/bulan

### Long-Tail Keywords (High Intent):

11. "tas wanita murah berkualitas" - 45k searches/bulan
12. "tas wanita lokal branded" - 38k searches/bulan
13. "tas wanita premium" - 35k searches/bulan
14. "tas wanita kanvas" - 32k searches/bulan
15. "tas wanita kulit asli" - 28k searches/bulan

## 💰 Keywords Dengan Conversion Rate Tertinggi:

1. **"tas wanita ori"** (original) - CR: 8.5%
2. **"tas wanita kulit asli"** - CR: 7.8%
3. **"tas kerja wanita"** - CR: 7.2%
4. **"tas branded wanita preloved"** - CR: 6.9%
5. **"tas wanita premium"** - CR: 6.5%

## 📈 Trending Keywords (Growth +50% YoY):

- "tas selempang wanita mini" 🔥 (+125%)
- "tas wanita aesthetic" 🔥 (+98%)
- "tas wanita canvas" 🔥 (+87%)
- "tas pinggang wanita korean style" 🔥 (+76%)
- "tas bucket wanita" 🔥 (+65%)

## 🎯 Rekomendasi Strategi Keyword:

**Untuk New Seller:**
- Fokus pada long-tail keywords dengan competition lebih rendah
- Target: "tas selempang wanita mini", "tas kerja wanita simpel"

**Untuk Established Seller:**
- Bidik high volume keywords + brand keywords
- Target: "tas wanita branded", "tas kulit wanita premium"

**Winning Combination:**
- Primary: "tas wanita" + modifier material ("kulit", "canvas")
- Secondary: "tas wanita" + modifier style ("selempang", "tote")
- Tertiary: "tas wanita" + modifier occasion ("kerja", "kuliah")

Apakah Anda ingin analisis lebih dalam untuk kategori tas tertentu?`
      }
    ]
  }
};

/**
 * Get chat data by ID, returns default chat if not found
 */
export function getChatById(id: string): ChatData {
  return (
    chatMessagesData[id] || {
      id,
      title: "Chat Baru",
      messages: []
    }
  );
}
