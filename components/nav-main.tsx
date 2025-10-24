"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import Link from "next/link";
import { sidebarData } from "@/@data/sidebar";
import { Fragment } from "react";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type NavMainProps = typeof sidebarData.navMain;

export function NavMain({ items }: { items: NavMainProps }) {
  const pathname = usePathname();

  return (
    <SidebarGroup className="pt-0">
      <SidebarGroupContent className="bg-sidebar relative flex flex-col gap-2">
        {items.map((item, i) => (
          <Fragment key={i}>
            {item.title && <SidebarGroupLabel>{item.title}</SidebarGroupLabel>}
            <SidebarMenu className="bg-sidebar sticky top-0 left-0 z-10 mb-2 pt-3 pb-4">
              {item.items.map((l, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    tooltip={l.title}
                    asChild
                    className={cn(pathname === l.url && "bg-accent/50")}
                  >
                    <AnimateIcon animateOnHover asChild>
                      <Link href={l.url}>
                        {l.icon && <l.icon />}
                        <span>{l.title}</span>
                      </Link>
                    </AnimateIcon>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </Fragment>
        ))}

        <SidebarGroupLabel className="">Obrolan</SidebarGroupLabel>
        {dataChat.map((l, i) => (
          <SidebarMenu
            key={`chat-${i + 1}`}
            className="-my-0.5 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0"
          >
            <SidebarMenuItem key={l.title}>
              <SidebarMenuButton tooltip={l.title} asChild>
                <Link href={l.url}>
                  <span>{l.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

const dataChat = [
  {
    title: "Analisis produk skincare lokal vs import",
    url: "/c/1"
  },
  {
    title: "Tren penjualan sepatu sneakers Q4 2024",
    url: "/c/2"
  },
  {
    title: "Perbandingan harga laptop gaming di Tokopedia",
    url: "/c/3"
  },
  {
    title: "Riset keyword tas wanita paling laku",
    url: "/c/4"
  },
  {
    title: "Analisis kompetitor kategori fashion pria",
    url: "/c/5"
  },
  {
    title: "Produk elektronik trending bulan ini",
    url: "/c/6"
  },
  {
    title: "Strategi pricing untuk produk makanan sehat",
    url: "/c/7"
  },
  {
    title: "Review performa toko di Shopee Mall",
    url: "/c/8"
  },
  {
    title: "Analisis rating produk kecantikan viral",
    url: "/c/9"
  },
  {
    title: "Peluang bisnis aksesori smartphone 2025",
    url: "/c/10"
  },
  {
    title: "Tren harga skincare Korea vs lokal",
    url: "/c/11"
  },
  {
    title: "Analisis demand produk olahraga di marketplace",
    url: "/c/12"
  },
  {
    title: "Riset produk home & living bestseller",
    url: "/c/13"
  },
  {
    title: "Strategi bundling untuk produk fashion",
    url: "/c/14"
  }
];
