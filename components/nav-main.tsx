"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { sidebarData } from "@/@data/sidebar";
import { Fragment } from "react";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type NavMainProps = typeof sidebarData.navMain;

export function NavMain({ items }: { items: NavMainProps }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  return (
    <SidebarGroup className="pt-0">
      <SidebarGroupContent className="bg-sidebar relative flex flex-col gap-2">
        {items.map((item, i) => (
          <Fragment key={i}>
            {item.title && <SidebarGroupLabel>{item.title}</SidebarGroupLabel>}
            <SidebarMenu className="bg-sidebar sticky top-0 left-0 z-10 mb-2 pt-3 pb-4">
              {item.items.map((l, index) => (
                <Fragment key={index}>
                  {l?.items?.length ? (
                    <>
                      <div className="hidden group-data-[collapsible=icon]:block">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <SidebarMenuItem key={l.title}>
                              <SidebarMenuButton tooltip={l.title} asChild>
                                <AnimateIcon animateOnHover asChild>
                                  <Link href={l.url}>
                                    {l.icon && <l.icon />}
                                    <span>{l.title}</span>
                                  </Link>
                                </AnimateIcon>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            side={isMobile ? "bottom" : "right"}
                            align={isMobile ? "end" : "start"}
                          >
                            <DropdownMenuLabel>{l.title}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {l.items.map((z, index) => (
                              <DropdownMenuItem key={index}>{z.title}</DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="block group-data-[collapsible=icon]:hidden">
                        <Collapsible
                          key={l.title}
                          defaultOpen={index === 1}
                          className="group/collapsible"
                        >
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                              <AnimateIcon animateOnHover asChild>
                                <SidebarMenuButton>
                                  {l.icon && <l.icon />}
                                  {l.title}{" "}
                                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                </SidebarMenuButton>
                              </AnimateIcon>
                            </CollapsibleTrigger>
                            {l.items?.length ? (
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  {l.items.map((item) => (
                                    <SidebarMenuSubItem key={item.title}>
                                      <SidebarMenuSubButton asChild isActive={false}>
                                        <Link href={item.url}>{item.title}</Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            ) : null}
                          </SidebarMenuItem>
                        </Collapsible>
                      </div>
                    </>
                  ) : (
                    <SidebarMenuItem key={l.title}>
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
                  )}
                </Fragment>
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
