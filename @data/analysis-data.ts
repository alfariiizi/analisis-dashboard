/**
 * Analysis data for marketplace product insights
 */

export type AnalysisData = {
  id: string;
  title: string;
  category: string;
  createdAt: string;
  summary: string;
  content: string; // Full markdown content
  tags: string[];
  products: number;
  insights: number;
};

export const analysisData: Record<string, AnalysisData> = {
  "skincare-organik-outdoor": {
    id: "skincare-organik-outdoor",
    title: "Analisis Produk Skincare Organik untuk Kulit Aktif di Bawah Sinar Matahari",
    category: "Skincare & Beauty",
    createdAt: "2024-12-20",
    summary: "Analisis mendalam pasar skincare organik untuk aktivitas outdoor dengan fokus pada produk sport-grade, sunscreen mineral, dan recovery pasca-matahari. Ditemukan peluang besar pada segmen yang belum tergarap.",
    tags: ["skincare", "organik", "outdoor", "sunscreen", "sport"],
    products: 150,
    insights: 8,
    content: `# Analisis Produk Skincare Organik untuk Kulit Aktif di Bawah Sinar Matahari

## Ringkasan Eksekutif

- **Temuan utama**: Pasar menunjukkan permintaan sangat kuat pada cleanser pengendali minyak/jerawat dan serum antioksidan. Hal ini terlihat dari penjualan masif pada produk face wash pria (Kahf) dan serum pencerah/antioksidan (TRUEVE, ELFORMULA).

- **Peluang**: Celah terbesar adalah skincare organik sport-grade untuk aktivitas outdoor—terutama sunscreen mineral organik yang tahan keringat, plus rangkaian recovery pasca-matahari. Hampir tidak ada pilihan "organik + sweat-proof + SPF tinggi" di data pembanding, padahal konsumen aktif butuh perlindungan UV dan kontrol sebum tanpa iritasi.

- **Rekomendasi**: Luncurkan lini "Sport-Organic" yang mencakup mineral sunscreen SPF50+ tahan keringat, gel cleanser organik low pH untuk kulit berminyak-berkeringat, dan serum recovery pasca-matahari berbasis antioksidan alami. Bundling "Sport Pack" untuk meniru pola keberhasilan paket penjualan tinggi (bundle Kahf/NIVEA).

- **Alasan bisnis**: Produk dengan volume penjualan tinggi (terjual) memberikan validasi pasar paling kuat. Pemenang (Kahf FW 100 ml) menegaskan besarnya masalah minyak/jerawat pada pengguna aktif; walau bukan organik, insight ini memandu positioning formula organik yang ramah kulit aktif.

## Metodologi & Kriteria Penilaian

Bobot penilaian:
1. **Penjualan/terjual** (±45%)
2. **Harga/kompetitif** (±20%)
3. **Rating & ulasan** (±15%)
4. **Ketersediaan stok** (±10%)
5. **Faktor lain**: relevansi kebutuhan outdoor, bundling, format (±10%)

## Top-10 Produk (berdasarkan penjualan)

| Peringkat | Produk | Harga (IDR) | Terjual | Rating | Stok | Catatan Relevansi |
|---|---|---:|---:|---:|---:|---|
| 1 | Kahf Face Wash Oil & Acne Care 100 ml | 53.000 | 100.000 | 4,9 | 0 | Oil-control, cocok kulit berkeringat |
| 2 | Triple Pack Kahf Face Wash 3×100 ml | 119.800 | 50.000 | 4,9 | 0 | Bundle hemat, validasi kebutuhan rutin |
| 3 | TRUEVE Ultimate Drops Brightening Serum | 108.000 | 9.000 | 4,9 | 0 | Antioksidan + barrier, pasca-matahari |
| 4 | NIVEA Paket 2× Body Serum 320 ml SPF15 | 176.055 | 2.000 | 4,9 | 0 | Body care + UV ringan (SPF15) |
| 5 | NIVEA Body Serum 180 ml SPF15 | 60.810 | 1.000 | 5,0 | 0 | Antioksidan + UV ringan |
| 6 | ELFORMULA Antiox-C Serum Spray | 118.000 | 1.000 | 4,9 | 0 | Format spray on-the-go, antioksidan |
| 7 | ELFORMULA 15% Pure Vitamin C Serum | 138.000 | 750 | 4,9 | 0 | Pencerah kuat; pasca-UV |
| 8 | Serum Kolagen VC-HA (Vit C + Retinol + HA) | 81.600 | 750 | 4,0 | 0 | Antioksidan/anti-aging; perhatian sensitif |
| 9 | NIVEA Body Serum 320 ml SPF15 | 92.555 | 250 | 5,0 | 0 | Kapasitas besar; UV ringan |
| 10 | Paket 3× NIVEA Body Serum 180 ml SPF15 | 157.064 | 250 | 5,0 | 0 | Bundle value; penggunaan harian |

**Catatan**: Peringkat menempatkan penjualan sebagai indikator utama validasi pasar; produk dengan terjual tertinggi diprioritaskan karena menunjukkan kebutuhan konsumen yang nyata dan konsisten.

## Produk Unggulan

### Winner: Kahf Face Wash Oil & Acne Care 100 ml

**Mengapa unggul:**
- **Penjualan**: 100.000+ terjual—laju penjualan masif yang mengindikasikan kebutuhan dominan pada kontrol minyak/jerawat, terutama di segmen pria aktif. Ini validasi pasar paling kuat dalam dataset.
- **Harga**: 53 ribu—sangat kompetitif untuk pemakaian harian; memudahkan repurchase.
- **Rating**: 4,9—kepuasan tinggi memperkuat retensi.
- **Implikasi bagi strategi organik**: Meski bukan organik, data penjualan ini menegaskan problem utama atlet/outdoor—keringat berlebih, pori tersumbat, dan jerawat. Produk organik sport-grade yang menyasar persoalan sama (oil-control, non-komedogenik, skin-barrier friendly) memiliki peluang besar untuk "menunggangi" permintaan yang sudah tervalidasi.

### Top 3 Produk – Ringkasan Kekuatan & Celah

**1) Kahf Face Wash 100 ml**
- ✅ Kekuatan: volume penjualan tertinggi, harga terjangkau, solusi minyak/jerawat jelas
- ⚠️ Celah: belum menonjolkan bahan organik/antioksidan kuat pasca-UV

**2) Triple Pack Kahf (3×100 ml)**
- ✅ Kekuatan: bundle value, mendorong komitmen jangka panjang (repeat use)
- ⚠️ Celah: tetap fokus cleanser; tidak menyentuh perlindungan UV atau recovery

**3) TRUEVE Brightening Serum**
- ✅ Kekuatan: 9.000 terjual menunjukkan minat kuat pada antioksidan/pencerah; sinyal penting untuk kebutuhan pasca-matahari
- ⚠️ Celah: belum menonjolkan "sport-grade" (sweat-friendly, on-the-go)

## Insight Pasar & Peluang

### Cluster Permintaan:
- **Oil-control cleanser** (penjualan tertinggi) → krusial bagi kulit yang sering berkeringat
- **Antioksidan/pencerah** (penjualan tinggi menengah) → kebutuhan recovery dan proteksi oksidatif pasca-UV
- **Body care dengan SPF ringan** (SPF15) → ada awareness proteksi UV, namun SPF terlalu rendah untuk olahraga outdoor

### Peluang Besar yang Belum Digarap:
1. **Sunscreen mineral organik SPF50+ PA++++** yang sweat-proof 80 menit, non-komedogenik, dan ramah kulit sensitif
2. **Format sport-friendly**: stick untuk wajah, spray/re-apply cepat, lip balm SPF, ukuran travel
3. **Serum/gel recovery pasca-matahari** berbasis antioksidan alami (aloe, calendula, green tea, astaxanthin)
4. **Bundling sport pack** (cleanser + sunscreen + recovery) meniru keberhasilan bundle high-penjualan

## Rekomendasi Produk Baru (Organik, Sport-Grade)

### 1) Sport-Organic Mineral Sunscreen SPF50+ PA++++ (Wajah & Leher)

**Target**: Pelari, pesepeda, pemain outdoor sport; kulit berminyak/berkeringat dan sensitif

**Value**: Perlindungan UVA/UVB tinggi, tahan keringat 80 menit, non-nano, non-komedogenik, ramah terumbu (reef-safe), bebas pewangi sintetis

**Formula kunci**:
- Non-nano Zinc Oxide 20–22% + Titanium Dioxide 3–5% (broad spectrum)
- Organic Aloe Vera Juice, Green Tea, Ectoin, Niacinamide 2–4% (sebum-control & barrier)
- Squalane tebu, Vitamin E alami (tokoferol), Allantoin

**Spesifikasi**:
- Tekstur: gel-cream ringan, quickly setting, low-white cast
- Water/sweat resistance: 80 menit (uji ISO 16217/16218)
- Sertifikasi: BPOM, Halal, COSMOS Organic; cruelty-free
- Kemasan: airless 50 ml, material tebu/sugarcane PCR

**Estimasi biaya & harga**:
- COGS: ± Rp 38.000
- Harga jual ritel: Rp 139.000–159.000
- Margin kotor target: 65–70%

### 2) Purifying Sport Cleanser (Low pH Gel, Organik)

**Target**: Kulit berminyak/berkeringat, komedo/jerawat

**Formula kunci**:
- Organic Tea Tree Hydrosol, Willow Bark (sumber BHA alami, salicylate), Zinc PCA
- Mild surfactants (coco-glucoside, decyl glucoside), Betaine, Panthenol

**Spesifikasi**:
- pH 5.0–5.5, SLS/SLES-free, non-stripping
- Kemasan 100 ml flip-top; travel 50 ml

**Estimasi biaya & harga**:
- COGS: ± Rp 15.000
- Harga jual: Rp 59.000–69.000
- Margin kotor target: 70%+

### 3) After-Sun Recovery Gel Serum (Organik)

**Target**: Redness, dehidrasi, kusam pasca-UV

**Formula kunci**:
- Organic Aloe, Calendula CO2 Extract, Bisabolol, Madecassoside
- Astaxanthin/Resveratrol mikro-dosis, Panthenol 2–3%, Sodium Hyaluronate

**Spesifikasi**:
- Tekstur gel ringan, cooling, cepat meresap; tanpa pewangi
- Kemasan 30 ml botol kaca amber

**Estimasi biaya & harga**:
- COGS: ± Rp 27.000
- Harga jual: Rp 109.000–129.000
- Margin kotor target: 65–72%

### 4) Sport Stick SPF30 (On-the-go Top-up)

**Target**: Re-apply cepat saat lari/sepeda

**Formula kunci**: Non-nano Zinc + Titanium, Candelilla wax (vegan), Jojoba, Vit E

**Spesifikasi**: Stick 15 g, tahan keringat, tidak pedih di mata

**Harga**: COGS ± Rp 23.000; ritel Rp 89.000

### Strategi Paket & Harga

- **Sport Pack** (Sunscreen 50ml + Cleanser 100ml + Recovery 30ml): Rp 249.000 (hemat ±20% vs beli satuan)
- **Starter Duo** (Cleanser + Sunscreen): Rp 179.000
- **Refill Program**: diskon 10–12% untuk botol isi ulang

## Strategi Go-To-Market

**Positioning**: "Organik, Sport-Grade, Sweat-Proof, Ramah Kulit & Alam"

**Channel**:
- **Online**: Tokopedia/Shopee (kategori Sport & Beauty), website D2C
- **Offline**: running store, bike shop, gym, komunitas outdoor, apotek modern

**Aktivasi**:
- Sampling di event lari/sepeda/triathlon; race-kit insert
- KOL atlet, pelatih, fisioterapis; UGC "re-apply challenge"
- Edukasi: "SPF untuk atlet: kenapa SPF50+ dan water-resistant itu wajib"

**Promosi harga**:
- Early-bird 15%, bundling, voucher repeat purchase (inspirasi dari bundle berpenjualan tinggi)

**Diferensiasi kreatif**:
- Skala trial: sachet 5 ml untuk pelari
- Jaminan "Tidak Menyumbat Pori" 30 hari—penukaran mudah

## Proyeksi Penjualan & Unit Economics (12 Bulan)

**Asumsi**: Masuk pasar dengan fokus 2 SKU utama (Sunscreen + Cleanser)

**Target konservatif**: Menangkan 1–2% basis kebutuhan yang tervalidasi oleh pemenang (cleanser oil-control dengan penjualan ratusan ribu)

**Skenario**:
- Bulan 1–3: 1.500–2.500 unit/bulan (60% sunscreen, 40% cleanser)
- Bulan 4–6: 3.000–4.000 unit/bulan (masuk komunitas, sampling event)
- Bulan 7–12: 5.000–7.500 unit/bulan (repeat purchase, word-of-mouth)
- **GM blended** setelah biaya marketplace & promosi: 35–45%

## Business Model Canvas

### Key Partners (Mitra Kunci)
- Maklon bersertifikasi BPOM, Halal, COSMOS Organic
- Pemasok bahan organik: non-nano ZnO/TiO2, hydrosol, ekstrak CO2
- Lab uji SPF & water resistance (ISO)
- Komunitas lari/sepeda, EO race, gym network
- Marketplace, 3PL fulfillment, supplier kemasan PCR/tebu
- KOL atlet, dermatologist advisor

### Key Activities (Aktivitas Kunci)
- R&D formulasi sport-grade organik
- Uji klaim: SPF, PA, water/sweat resistance, non-komedogenik
- Registrasi BPOM, Halal, COSMOS
- Manajemen rantai pasok & QC
- Aktivasi komunitas & kampanye edukasi
- Optimasi listing marketplace & bundling

### Key Resources (Sumber Daya Kunci)
- IP formulasi dan standar kualitas
- Merek dan aset kreatif "Sport-Organic"
- Sertifikasi (BPOM/Halal/COSMOS)
- Hubungan komunitas olahraga
- Data pelanggan & CRM untuk repeat

### Value Propositions (Proposisi Nilai)
- Organik, mineral, sweat-proof, ramah kulit sensitif
- Perlindungan SPF50+ PA++++ yang benar-benar sport-grade
- Cleanser low pH non-stripping untuk kulit berkeringat
- Recovery gel anti-kemerahan pasca-UV
- Reef-safe, bebas pewangi sintetis, non-komedogenik
- Format on-the-go + bundling hemat

### Customer Relationships (Hubungan Pelanggan)
- Edukasi berbasis performa (how-to re-apply)
- Komunitas & membership (diskon race, challenge)
- Layanan "formulation care" (chat skincare coach)
- Garansi kepuasan 30 hari

### Channels (Saluran Distribusi)
- Tokopedia/Shopee + website D2C
- Running/bike stores, gym, apotek modern
- Event olahraga & pop-up booth
- Distributor daerah untuk kota-kota lari/sepeda

### Customer Segments (Segmen Pelanggan)
- Pria 18–35 aktif outdoor (oil-control fokus)
- Wanita 20–35 aktif outdoor (sensitive/combination)
- Komunitas lari/sepeda/triathlon
- Pekerja lapangan/outdoor

### Cost Structure (Struktur Biaya)
- R&D & pengujian (SPF, WR, stabilitas)
- Bahan baku organik & kemasan PCR
- Produksi & QC
- Sertifikasi (BPOM, Halal, COSMOS)
- Marketing (KOL, event, ads) & biaya marketplace
- Logistik & fulfillment

### Revenue Streams (Aliran Pendapatan)
- Penjualan SKU (sunscreen, cleanser, serum)
- Bundling (Sport Pack, Starter Duo)
- Subscription (bulanan tri-pack)
- B2B race kits & corporate wellness

## Kenapa Produk Berpenjualan Tinggi Adalah Kompas Keputusan

Kahf Face Wash 100 ml dan bundlenya mencatat angka terjual sangat besar—ini bukti keras bahwa masalah minyak/jerawat akibat keringat adalah pain point nyata. Menempatkan penjualan sebagai indikator utama memastikan kita membangun di atas kebutuhan yang sudah tervalidasi, mengurangi risiko pengembangan produk.

TRUEVE dan ELFORMULA (ribuan terjual) menegaskan peran antioksidan untuk pemulihan pasca-UV. Ini menguatkan inclusion antioksidan organik dalam sunscreen dan serum recovery.

Bundle NIVEA (ratusan–ribuan terjual) menunjukkan strategi paket efektif mendorong volume dan repeat.

## Rencana 90 Hari

**Hari 0–30**:
- Finalisasi formula lab
- Negosiasi maklon
- File BPOM & Halal
- Desain kemasan PCR
- Draft konten edukasi

**Hari 31–60**:
- Pilot batch
- Uji SPF & water resistance
- Prelaunch landing page
- Rekrut KOL atlet
- Booking slot event lari Q3

**Hari 61–90**:
- Launch online + sampling di race
- Bundling "Sport Pack"
- Program review UGC
- Iterasi cepat berdasarkan feedback

## Penutup

Data penjualan jelas menunjukkan: **kontrol minyak/jerawat** dan **antioksidan** adalah dua pilar kebutuhan kulit aktif. Dengan menggabungkan dua pilar tersebut ke dalam formulasi organik sport-grade—terutama sunscreen mineral SPF50+ tahan keringat—kita memanfaatkan validasi pasar yang sudah terbukti, sekaligus mengisi kekosongan "organik untuk atlet" yang belum tergarap oleh pemain besar.

Bundling cerdas dan aktivasi komunitas olahraga akan mempercepat adopsi dan memperkuat retensi.`
  },

  "fashion-pria-q4-2024": {
    id: "fashion-pria-q4-2024",
    title: "Tren Fashion Pria Q4 2024: Analisis Kategori Pakaian Casual & Streetwear",
    category: "Fashion & Apparel",
    createdAt: "2024-12-18",
    summary: "Analisis komprehensif tren fashion pria dengan fokus pada kategori casual wear dan streetwear. Mengidentifikasi produk best-seller, price point optimal, dan peluang market gap di segment mid-premium.",
    tags: ["fashion", "pria", "streetwear", "casual", "q4-2024"],
    products: 220,
    insights: 12,
    content: `# Tren Fashion Pria Q4 2024: Analisis Kategori Pakaian Casual & Streetwear

## Executive Summary

Analisis terhadap 220 produk fashion pria di Q4 2024 menunjukkan dominasi kategori **oversized t-shirt** dan **hoodie streetwear** dengan pertumbuhan penjualan +35% YoY. Ditemukan gap signifikan di segment **premium casual** (Rp 250k-500k) dengan material berkualitas tinggi.

### Key Findings:
- **Oversized T-Shirt**: 45% dari total volume penjualan
- **Hoodie Premium**: Growth +42% dengan AOV tertinggi (Rp 380k)
- **Price Sweet Spot**: Rp 125k-185k untuk mass market
- **Opportunity**: Premium cotton blend dengan sustainable materials

## Metodologi Analisis

**Data Sources**:
- Tokopedia & Shopee sales data (Oct-Dec 2024)
- 220 produk dari 35 brand lokal & internasional
- 125,000+ customer reviews analyzed

**Metrics Weighted**:
1. Volume penjualan (40%)
2. Growth rate Q3→Q4 (25%)
3. Customer satisfaction (20%)
4. Price competitiveness (15%)

## Top 10 Best-Selling Products

| Rank | Product | Brand | Price | Sold | Rating | Category |
|------|---------|-------|------:|-----:|-------:|----------|
| 1 | Oversized Basic Tee Cotton Combed 30s | Uniqlo Local | 89.000 | 85.000 | 4.8 | T-Shirt |
| 2 | Premium Hoodie Fleece 280gsm | Erigo | 189.000 | 52.000 | 4.9 | Hoodie |
| 3 | Boxy Fit Shirt Short Sleeve | Uniqlo | 149.000 | 48.500 | 4.7 | Kemeja |
| 4 | Cargo Pants Utility Fit | Dickies ID | 225.000 | 38.000 | 4.8 | Celana |
| 5 | Crewneck Sweatshirt 260gsm | Erigo x Naruto | 165.000 | 35.500 | 4.9 | Crewneck |

(Continued for 10 products...)

## Market Insights

### 1. Material Preferences
- **Cotton Combed 30s**: Preferred untuk daily wear (65% buyers)
- **Fleece 280-320gsm**: High demand untuk hoodie/crewneck
- **Stretch Cotton Blend**: Growing interest (+28%) untuk casual pants

### 2. Fit Trends
- **Oversized/Loose Fit**: 58% dari t-shirt & kemeja sales
- **Regular Fit**: Stable 30% market share
- **Slim Fit**: Declining (-12% YoY)

### 3. Color Dominance
1. Black (32%)
2. White/Off-White (24%)
3. Earth Tones (18%)
4. Neutral Colors (16%)
5. Bold Colors (10%)

## Opportunity Analysis

### Gap 1: Premium Sustainable Fashion
**Current State**: Limited options di Rp 300k-600k dengan sustainable materials

**Opportunity Size**:
- Target market: 15-20k buyers/month
- Willing to pay premium: +40% vs fast fashion
- Environmental consciousness: High among 25-35 age group

**Recommended Product Line**:
- Organic cotton oversized tee (Rp 275k)
- Recycled polyester hoodie (Rp 425k)
- Hemp blend casual shirt (Rp 365k)

### Gap 2: Tech-Integrated Casualwear
**Insight**: Minimal moisture-wicking, anti-odor casual wear di market

**Product Concepts**:
- Performance t-shirt with polygiene technology
- Quick-dry travel pants
- Temperature-regulating hoodie

## Pricing Strategy Recommendation

### Mass Market (Target: Volume)
- T-Shirt: Rp 85k-125k
- Hoodie: Rp 155k-195k
- Pants: Rp 175k-215k
- **Strategy**: Bundle pricing, frequent promos

### Mid-Premium (Target: Margin)
- T-Shirt: Rp 185k-275k
- Hoodie: Rp 295k-425k
- Pants: Rp 325k-485k
- **Strategy**: Quality differentiation, storytelling

### Premium (Target: Brand Building)
- T-Shirt: Rp 350k-550k
- Hoodie: Rp 550k-850k
- Pants: Rp 650k-950k
- **Strategy**: Limited drops, collaboration, sustainability

## Competitive Landscape

### Top Local Brands (by market share)
1. **Erigo** (18%) - Streetwear leader
2. **3Second** (12%) - Affordable premium
3. **Greenlight** (9%) - Youth market
4. **Hammer** (7%) - Performance casual

### International Players
1. **Uniqlo** (15%) - Value proposition king
2. **H&M** (8%) - Fast fashion
3. **ZARA** (6%) - Trend-forward

## Growth Recommendations

### Short-term (Q1 2025)
1. Launch oversized tee line dengan premium cotton (Rp 165k-225k)
2. Develop signature hoodie dengan unique selling point
3. Test market dengan limited capsule collection

### Medium-term (Q2-Q3 2025)
1. Establish sustainable material line
2. Build brand story & community
3. Expand to complementary categories (accessories)

### Long-term (Q4 2025+)
1. Develop proprietary fabric technology
2. Open physical retail touchpoints
3. Launch international expansion (Southeast Asia)

## Action Plan 60 Days

**Week 1-2**:
- Finalize product specs & tech pack
- Source fabric suppliers (focus on sustainable options)
- Lock manufacturer with min. order quantity

**Week 3-4**:
- Develop brand identity & packaging
- Create product photography & content
- Setup marketplace stores & website

**Week 5-6**:
- Pre-launch campaign dengan influencer seeding
- Setup logistic & fulfillment
- Prepare customer service workflow

**Week 7-8**:
- Soft launch dengan early-bird pricing
- Collect initial feedback & reviews
- Adjust inventory based on demand

## Financial Projection (First Year)

**Investment Required**: Rp 250-350 juta
- Product development: Rp 80 jt
- Inventory (500 units): Rp 120 jt
- Marketing: Rp 50 jt
- Operational: Rp 50 jt

**Revenue Target**:
- Month 1-3: Rp 75-125 juta
- Month 4-6: Rp 150-220 juta
- Month 7-12: Rp 250-380 juta
- **Total Year 1**: Rp 1.2-1.8 miliar

**Margin**:
- Gross Margin: 55-62%
- Net Margin: 18-25% (after all costs)

## Risk Mitigation

### Market Risks
- **Trend Shift**: Diversify product range, stay agile
- **Competition**: Build strong brand moat through quality & sustainability

### Operational Risks
- **Supply Chain**: Multiple supplier relationships, safety stock
- **Quality Control**: Strict QC process, warranty policy

### Financial Risks
- **Cash Flow**: Conservative inventory management
- **Pricing Pressure**: Maintain brand positioning, avoid race-to-bottom

## Conclusion

Fashion pria Q4 2024 menunjukkan peluang besar di segment **premium casual dengan sustainable positioning**. Kombinasi material berkualitas, fit modern (oversized/loose), dan storytelling sustainability dapat menangkap market gap yang profitable.

**Success Keys**:
1. Material differentiation (organic, recycled, performance)
2. Fit consistency & quality control
3. Brand story & community building
4. Omnichannel presence (online + offline touchpoint)`
  }
};

/**
 * Get all analyses for listing
 */
export function getAllAnalyses(): AnalysisData[] {
  return Object.values(analysisData).sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/**
 * Get analysis by ID
 */
export function getAnalysisById(id: string): AnalysisData | null {
  return analysisData[id] || null;
}
