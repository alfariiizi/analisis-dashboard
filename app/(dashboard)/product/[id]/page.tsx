import PageContainer from "@/components/page-container";
import { generateMeta } from "@/lib/generate-meta";
import ProductDetailClient from "./product-detail-client";

export async function generateMetadata() {
  return generateMeta({
    title: "Analisis Performa Produk",
    description: "Lihat analisis mendalam performa produk dari marketplace Indonesia",
    canonical: "/product"
  });
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <PageContainer>
      <ProductDetailClient productId={id} />
    </PageContainer>
  );
}
