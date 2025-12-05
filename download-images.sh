#!/bin/bash

# Script untuk download product images dari Unsplash
# Pastikan Anda berada di root directory project

echo "🖼️  Downloading product images..."
echo ""

# Create directory if not exists
mkdir -p public/product-image

cd public/product-image

# Fashion Items
echo "📦 Downloading: Kaos Polos..."
wget -q -O kaos-polos.jpg "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop" -o kaos-polos.jpg

echo "📦 Downloading: Tas Ransel..."
wget -q -O tas-ransel.jpg "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop" -o tas-ransel.jpg

echo "📦 Downloading: Sepatu Sneakers..."
wget -q -O sepatu-sneakers.jpg "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop" -o sepatu-sneakers.jpg

echo "📦 Downloading: Hoodie..."
wget -q -O hoodie.jpg "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop" -o hoodie.jpg

echo "📦 Downloading: Jam Tangan..."
wget -q -O jam-tangan.jpg "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop" -o jam-tangan.jpg

# Beauty & Skincare
echo "📦 Downloading: Serum Wajah..."
wget -q -O serum-wajah.jpg "https://images.unsplash.com/photo-1556229010-aa4a56c80a6c?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1556229010-aa4a56c80a6c?w=600&h=600&fit=crop" -o serum-wajah.jpg

echo "📦 Downloading: Masker Wajah..."
wget -q -O masker-wajah.jpg "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop" -o masker-wajah.jpg

# Electronics
echo "📦 Downloading: Mouse Gaming..."
wget -q -O mouse-gaming.jpg "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop" -o mouse-gaming.jpg

echo "📦 Downloading: Powerbank..."
wget -q -O powerbank.jpg "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop" -o powerbank.jpg

echo "📦 Downloading: Keyboard Gaming..."
wget -q -O keyboard-gaming.jpg "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop" -o keyboard-gaming.jpg

echo "📦 Downloading: Charger HP..."
wget -q -O charger-hp.jpg "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&h=600&fit=crop" -o charger-hp.jpg

# Food & Beverage
echo "📦 Downloading: Kopi Arabica..."
wget -q -O kopi-arabica.jpg "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop" -o kopi-arabica.jpg

echo "📦 Downloading: Susu UHT..."
wget -q -O susu-uht.jpg "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=600&fit=crop" -o susu-uht.jpg

echo "📦 Downloading: Minyak Goreng..."
wget -q -O minyak-goreng.jpg "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop" -o minyak-goreng.jpg

# Stationery
echo "📦 Downloading: Buku Tulis..."
wget -q -O buku-tulis.jpg "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=600&fit=crop" || \
curl -sL "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=600&fit=crop" -o buku-tulis.jpg

echo ""
echo "✅ Download complete!"
echo ""
echo "📁 Images saved to: public/product-image/"
echo ""
echo "Verifying downloads..."
ls -lh

echo ""
echo "🎉 All done! You can now run 'pnpm dev' to see the products with images."
