"use client";

import { IconCreditCard, IconDotsVertical, IconLogout, IconUserCircle } from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { User } from "./animate-ui/icons/user";
import { Gauge } from "./animate-ui/icons/gauge";
import { LogOut } from "./animate-ui/icons/log-out";
import { cn } from "@/lib/utils";
import { ChevronUpDown } from "./animate-ui/icons/chevron-up-down";

export function NavUser({
  user
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile, state } = useSidebar();

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="p-0">
              <AnimateIcon animateOnHover>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground p-0"
                >
                  <Avatar
                    className={cn("rounded-lg p-0", {
                      "size-full": state === "collapsed",
                      "size-8": state === "expanded"
                    })}
                  >
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg p-1">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="text-muted-foreground truncate text-xs">Paket Pro</span>
                  </div>
                  <ChevronUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </AnimateIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="flex flex-col gap-2 p-0 px-1 py-1.5 font-normal">
                <p className="text-muted-foreground text-xs">{user.email}</p>
                <div className="flex items-center gap-2 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="text-muted-foreground truncate text-xs">Paket Pro</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <AnimateIcon animateOnHover asChild>
                  <DropdownMenuItem>
                    <User />
                    Pengaturan Akun
                  </DropdownMenuItem>
                </AnimateIcon>
                <AnimateIcon animateOnHover asChild>
                  <DropdownMenuItem>
                    <Gauge />
                    Tingkatkan Paket
                  </DropdownMenuItem>
                </AnimateIcon>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <AnimateIcon animateOnHover asChild>
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </AnimateIcon>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
