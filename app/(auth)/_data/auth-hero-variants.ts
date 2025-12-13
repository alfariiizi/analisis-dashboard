/**
 * Hero Messages untuk Auth Pages (Bahasa Indonesia)
 * Pilih salah satu atau randomize saat page load
 */

export const heroMessages = [
  // AI & Data Intelligence
  "Buka wawasan marketplace dengan kecerdasan produk berbasis AI.",
  "Ubah data marketplace menjadi strategi bisnis yang actionable.",
  "Temukan produk best seller sebelum kompetitor Anda.",
  "Keputusan e-commerce lebih cerdas dengan insight berbasis AI.",

  // Product Discovery & Trends
  "Temukan produk trending di Tokopedia, Shopee, dan TikTok Shop.",
  "Ungkap peluang tersembunyi di marketplace Indonesia.",
  "Analisis jutaan produk untuk menemukan peluang pasar.",
  "Selangkah lebih maju dengan analisis tren marketplace real-time.",

  // Business Growth
  "Optimalkan pemilihan produk dengan rekomendasi berbasis data.",
  "Kembangkan bisnis e-commerce Anda dengan insight cerdas.",
  "Buat keputusan percaya diri dengan market intelligence lengkap.",
  "Dari data ke keputusan: partner kesuksesan marketplace Anda.",

  // Competitive Advantage
  "Lihat apa yang laris sebelum menjadi viral.",
  "Keunggulan kompetitif Anda di lanskap e-commerce Indonesia.",
  "Ubah kekacauan marketplace menjadi strategi yang jelas."
] as const;

/**
 * Gradient Variants untuk Hero Section
 * Gunakan Tailwind arbitrary values dengan format bg-[linear-gradient(...)]
 *
 * CARA PAKAI:
 * 1. Pilih salah satu gradient dari array ini
 * 2. Pass ke AuthFormWrapper sebagai gradientClassName prop
 *
 * Contoh:
 * <AuthFormWrapper gradientClassName={gradientVariants[0]} />
 */

export const gradientVariants = [
  // Gradient 1: Orange to Blue (Default)
  "bg-[linear-gradient(248deg,_#d08700_0%,_#0d63a5_3%,_#0d63a5_7%,_#ca3500_100%)]",

  // Gradient 2: TODO - Add your gradient here
  "bg-[linear-gradient(240deg,_#0d63a5_0%,_#d08700_53%,_#0d63a5_80%,_#ca3500_100%)]",

  // Gradient 3: TODO - Add your gradient here
  "bg-[linear-gradient(314deg,_#d08700_0%,_#0d63a5_50%,_#0d63a5_70%,_#ca3500_100%)]",

  // Gradient 4: TODO - Add your gradient here
  "bg-[linear-gradient(226deg,_#0d63a5_0%,_#ca3500_86%,_#d08700_88%,_#0d63a5_100%)]",

  // Gradient 5: TODO - Add your gradient here
  "bg-[linear-gradient(6deg,_#0d63a5_0%,_#ca3500_49%,_#d08700_77%,_#0d63a5_100%)]",

  // Gradient 6: TODO - Add your gradient here
  "bg-[linear-gradient(8deg,_#ca3500_0%,_#0d63a5_3%,_#d08700_23%,_#0d63a5_100%)]",

  // Gradient 7: TODO - Add your gradient here
  "bg-[linear-gradient(279deg,_#d08700_0%,_#0d63a5_81%,_#ca3500_87%,_#0d63a5_100%)]",

  // Gradient 8: TODO - Add your gradient here
  "bg-[linear-gradient(44deg,_#d08700_0%,_#0d63a5_16%,_#0d63a5_29%,_#ca3500_100%)]",

  // Gradient 9: TODO - Add your gradient here
  "bg-[linear-gradient(318deg,_#d08700_0%,_#0d63a5_39%,_#0d63a5_69%,_#ca3500_100%)]",

  // Gradient 10: TODO - Add your gradient here
  "bg-[linear-gradient(198deg,_#0d63a5_0%,_#ca3500_75%,_#0d63a5_93%,_#d08700_100%)]"
] as const;

/**
 * Helper function untuk random selection
 */
export function getRandomHeroMessage() {
  return heroMessages[Math.floor(Math.random() * heroMessages.length)];
}

export function getRandomGradient() {
  return gradientVariants[Math.floor(Math.random() * gradientVariants.length)];
}
