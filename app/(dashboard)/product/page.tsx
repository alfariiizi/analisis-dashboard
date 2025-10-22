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

async function getOrders() {
  const data = await fs.readFile(path.join(process.cwd(), "app/(dashboard)/orders/data.json"));

  return JSON.parse(data.toString());
}

export default async function Page() {
  const orders = await getOrders();

  return (
    <PageContainer className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 divide-x">
          <ModuleTitle
            className="mb-4"
            title="Produk"
            description="Semua produk yang telah kami dapatkan dari marketplace terbaik di Indonesia. Pantau produk marketplace di sini."
          />
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
      <ProductsDataTable data={orders} />
    </PageContainer>
  );
}
