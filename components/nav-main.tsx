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
    title: "Lorem ipsum dolor sit amet consectetur",
    url: "/c/1"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/2"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/3"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/4"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/5"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    url: "/c/6"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/7"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/8"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/9"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/10"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/11"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/12"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/13"
  },
  {
    title: "Lorem ipsum dolor sit amet",
    url: "/c/14"
  }
];
