# Setup Product Images

Aplikasi membutuhkan gambar produk yang disimpan di `public/product-image/`. Berikut adalah daftar gambar yang perlu didownload.

## Cara Download Images

Anda bisa menggunakan salah satu metode berikut:

### Metode 1: Manual Download (Recommended)
Cari gambar di Google/marketplace yang sesuai dengan nama produk, lalu save ke `public/product-image/` dengan nama file yang sesuai.

### Metode 2: Gunakan Placeholder Service
Untuk development cepat, Anda bisa gunakan placeholder image service seperti:
- https://placehold.co/
- https://via.placeholder.com/
- https://picsum.photos/

## Daftar Gambar yang Dibutuhkan

Semua gambar harus dalam format `.jpg` dan ukuran minimal 600x600px untuk kualitas terbaik.

| Filename | Produk | Search Keywords | Marketplace |
|----------|--------|-----------------|-------------|
| `kaos-polos.jpg` | Kaos Polos Cotton Combed 30s Premium - Hitam | "black plain t-shirt cotton combed" | Tokopedia |
| `tas-ransel.jpg` | Tas Ransel Laptop 15.6 inch Anti Air - Hitam Abu | "laptop backpack 15.6 waterproof black" | Shopee |
| `serum-wajah.jpg` | Serum Wajah Vitamin C + Niacinamide 30ml | "vitamin c niacinamide serum bottle" | Tokopedia |
| `sepatu-sneakers.jpg` | Sepatu Sneakers Pria Running Sport Casual | "men running sneakers sport shoes" | Blibli |
| `mouse-gaming.jpg` | Mouse Wireless Gaming RGB LED 2.4GHz | "wireless gaming mouse rgb led" | TikTok Shop |
| `buku-tulis.jpg` | Buku Tulis Campus B5 50 Lembar - Pack isi 10 | "campus notebook b5 pack" | Shopee |
| `powerbank.jpg` | Powerbank 20000mAh Fast Charging PD 20W | "powerbank 20000mah fast charging" | Tokopedia |
| `hoodie.jpg` | Hoodie Polos Premium Fleece Unisex - Navy | "navy blue hoodie fleece plain" | Shopee |
| `kopi-arabica.jpg` | Kopi Arabica Premium Gayo 200gr - Biji/Bubuk | "arabica coffee beans gayo aceh" | Blibli |
| `minyak-goreng.jpg` | Minyak Goreng Curah 1 Liter - Kemasan Botol | "cooking oil bottle 1 liter" | TikTok Shop |
| `jam-tangan.jpg` | Jam Tangan Pria Digital Sporty Waterproof | "digital sport watch waterproof men" | Tokopedia |
| `masker-wajah.jpg` | Masker Wajah Korea Sheet Mask 10pcs Mix Variant | "korean sheet mask pack variety" | Shopee |
| `charger-hp.jpg` | Charger HP Fast Charging 3A Original Quality | "phone charger fast charging 3a" | TikTok Shop |
| `susu-uht.jpg` | Susu UHT Coklat 1 Liter - Pack isi 12 | "chocolate uht milk box pack" | Blibli |
| `keyboard-gaming.jpg` | Keyboard Mechanical RGB Gaming LED Backlight | "mechanical keyboard rgb gaming backlight" | Tokopedia |

## Recommended Image Sources

1. **Unsplash** (https://unsplash.com/) - High quality free images
   - Search: "product photography [product name]"

2. **Pexels** (https://www.pexels.com/) - Free stock photos
   - Search: "[product category] product"

3. **Pixabay** (https://pixabay.com/) - Free images and videos
   - Search: "[product name]"

## Quick Setup Script (Optional)

Jika Anda ingin menggunakan placeholder images sementara untuk development:

```bash
cd public/product-image

# Download placeholder images (600x600)
curl -o kaos-polos.jpg "https://placehold.co/600x600/1a1a1a/white?text=Kaos+Polos"
curl -o tas-ransel.jpg "https://placehold.co/600x600/2a2a2a/white?text=Tas+Ransel"
curl -o serum-wajah.jpg "https://placehold.co/600x600/1a1a1a/white?text=Serum+Wajah"
curl -o sepatu-sneakers.jpg "https://placehold.co/600x600/2a2a2a/white?text=Sepatu+Sneakers"
curl -o mouse-gaming.jpg "https://placehold.co/600x600/1a1a1a/white?text=Mouse+Gaming"
curl -o buku-tulis.jpg "https://placehold.co/600x600/2a2a2a/white?text=Buku+Tulis"
curl -o powerbank.jpg "https://placehold.co/600x600/1a1a1a/white?text=Powerbank"
curl -o hoodie.jpg "https://placehold.co/600x600/2a2a2a/white?text=Hoodie"
curl -o kopi-arabica.jpg "https://placehold.co/600x600/1a1a1a/white?text=Kopi+Arabica"
curl -o minyak-goreng.jpg "https://placehold.co/600x600/2a2a2a/white?text=Minyak+Goreng"
curl -o jam-tangan.jpg "https://placehold.co/600x600/1a1a1a/white?text=Jam+Tangan"
curl -o masker-wajah.jpg "https://placehold.co/600x600/2a2a2a/white?text=Masker+Wajah"
curl -o charger-hp.jpg "https://placehold.co/600x600/1a1a1a/white?text=Charger+HP"
curl -o susu-uht.jpg "https://placehold.co/600x600/2a2a2a/white?text=Susu+UHT"
curl -o keyboard-gaming.jpg "https://placehold.co/600x600/1a1a1a/white?text=Keyboard+Gaming"
```

## Alternative: Using Unsplash API

Atau gunakan Unsplash Source API untuk random product images:

```bash
cd public/product-image

# Electronics & Gadgets
curl -L "https://source.unsplash.com/600x600/?mouse,gaming" -o mouse-gaming.jpg
curl -L "https://source.unsplash.com/600x600/?keyboard,gaming" -o keyboard-gaming.jpg
curl -L "https://source.unsplash.com/600x600/?powerbank,charger" -o powerbank.jpg
curl -L "https://source.unsplash.com/600x600/?phone,charger" -o charger-hp.jpg

# Fashion
curl -L "https://source.unsplash.com/600x600/?black,tshirt" -o kaos-polos.jpg
curl -L "https://source.unsplash.com/600x600/?backpack,laptop" -o tas-ransel.jpg
curl -L "https://source.unsplash.com/600x600/?sneakers,running" -o sepatu-sneakers.jpg
curl -L "https://source.unsplash.com/600x600/?hoodie,navy" -o hoodie.jpg
curl -L "https://source.unsplash.com/600x600/?watch,digital" -o jam-tangan.jpg

# Beauty & Skincare
curl -L "https://source.unsplash.com/600x600/?serum,skincare" -o serum-wajah.jpg
curl -L "https://source.unsplash.com/600x600/?mask,sheet" -o masker-wajah.jpg

# Food & Beverage
curl -L "https://source.unsplash.com/600x600/?coffee,beans" -o kopi-arabica.jpg
curl -L "https://source.unsplash.com/600x600/?milk,box" -o susu-uht.jpg
curl -L "https://source.unsplash.com/600x600/?cooking,oil" -o minyak-goreng.jpg

# Stationery
curl -L "https://source.unsplash.com/600x600/?notebook,campus" -o buku-tulis.jpg
```

**Note:** Unsplash Source API memberikan random images, jadi mungkin tidak selalu sesuai 100% dengan produk. Untuk production, sebaiknya gunakan gambar yang benar-benar sesuai dengan produk.

## Verifikasi

Setelah download semua gambar, pastikan struktur folder seperti ini:

```
public/
└── product-image/
    ├── kaos-polos.jpg
    ├── tas-ransel.jpg
    ├── serum-wajah.jpg
    ├── sepatu-sneakers.jpg
    ├── mouse-gaming.jpg
    ├── buku-tulis.jpg
    ├── powerbank.jpg
    ├── hoodie.jpg
    ├── kopi-arabica.jpg
    ├── minyak-goreng.jpg
    ├── jam-tangan.jpg
    ├── masker-wajah.jpg
    ├── charger-hp.jpg
    ├── susu-uht.jpg
    └── keyboard-gaming.jpg
```

Jalankan development server dan akses `/product` untuk melihat hasilnya!
