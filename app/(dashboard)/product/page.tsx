import { promises as fs } from "fs";
import path from "path";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import ProductsDataTable from "./data-table";
import { generateMeta } from "@/lib/generate-meta";
import PageContainer from "@/components/page-container";
import ModuleTitle from "@/components/typography/module-title";

export async function generateMetadata() {
  return generateMeta({
    title: "Daftar Produk",
    description: "Kelola dan pantau daftar produk dengan mudah melalui halaman ini.",
    canonical: "/product"
  });
}

async function getProducts() {
  const data = await fs.readFile(path.join(process.cwd(), "app/(dashboard)/product/data.json"));

  return JSON.parse(data.toString());
}

export default async function Page() {
  const products = await getProducts();

  return (
    <PageContainer className="space-y-6">
      <div className="flex items-center justify-between">
        <ModuleTitle
          className="mb-4 bg-[linear-gradient(307deg,_#0d63a5_0%,_#0d63a5_56%,_#d08700_92%,_#ca3500_100%)]"
          title="Produk"
          description="Semua produk yang telah kami dapatkan dari marketplace terbaik di Indonesia. Pantau produk marketplace di sini."
          imageSrc={`/dashboard/eyeglass.jpg`}
          imageBlendMode="hard-light"
        />
        <div className="flex items-center gap-6 divide-x">
          {/* <Breadcrumb className="hidden ps-6 lg:block"> */}
          {/*   <BreadcrumbList> */}
          {/*     <BreadcrumbItem> */}
          {/*       <BreadcrumbLink href="/dashboard/default">Dashboard</BreadcrumbLink> */}
          {/*     </BreadcrumbItem> */}
          {/*     <BreadcrumbSeparator> */}
          {/*       <ChevronRight /> */}
          {/*     </BreadcrumbSeparator> */}
          {/*     <BreadcrumbItem> */}
          {/*       <BreadcrumbLink href="/dashboard/pages/orders">Pages</BreadcrumbLink> */}
          {/*     </BreadcrumbItem> */}
          {/*     <BreadcrumbSeparator> */}
          {/*       <ChevronRight /> */}
          {/*     </BreadcrumbSeparator> */}
          {/*     <BreadcrumbItem> */}
          {/*       <BreadcrumbPage>Orders</BreadcrumbPage> */}
          {/*     </BreadcrumbItem> */}
          {/*   </BreadcrumbList> */}
          {/* </Breadcrumb> */}
        </div>
        {/* <Button asChild> */}
        {/*   <Link href="#"> */}
        {/*     <PlusCircleIcon className="me-2" /> Create Order */}
        {/*   </Link> */}
        {/* </Button> */}
      </div>
      <ProductsDataTable data={products} />
    </PageContainer>
  );
}
