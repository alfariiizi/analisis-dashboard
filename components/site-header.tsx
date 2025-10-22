"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import NotificationsPanel from "@/components/layout/dashboard/header/notifications";
import Link from "next/link";
import MonitorSystemPanel from "./layout/dashboard/header/monitor-system";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 left-0 z-50 flex h-(--header-height) shrink-0 items-center gap-2 border-b pt-[-10px] transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="block text-lg font-semibold md:hidden">Analisis</h1>
        <Link href="/pricing" className="hidden md:block">
          <Button size="sm" className="cursor-pointer py-0.5" variant="outline">
            Tingkatkan Paket
          </Button>
        </Link>
        {/* <Breadcrumb> */}
        {/*   <BreadcrumbList> */}
        {/*     <BreadcrumbItem> */}
        {/*       <BreadcrumbLink asChild> */}
        {/*         <Link href="/">Home</Link> */}
        {/*       </BreadcrumbLink> */}
        {/*     </BreadcrumbItem> */}
        {/*     <BreadcrumbSeparator /> */}
        {/*     <BreadcrumbItem> */}
        {/*       <BreadcrumbPage className="capitalize">{pathname.split("/")[1]}</BreadcrumbPage> */}
        {/*     </BreadcrumbItem> */}
        {/*   </BreadcrumbList> */}
        {/* </Breadcrumb> */}

        <div className="ml-auto flex items-center gap-2">
          <MonitorSystemPanel />
          <NotificationsPanel />
        </div>
      </div>
    </header>
  );
}
