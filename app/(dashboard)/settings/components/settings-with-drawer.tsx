"use client";

import { useState } from "react";
import { User, Lock, Bell, CreditCard, Puzzle, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ProfileSettings } from "./profile-settings";
import { SecuritySettings } from "./security-settings";
import { NotificationSettings } from "./notification-settings";
import { BillingSettings } from "./billing-settings";
import { IntegrationSettings } from "./integration-settings";

type Section = "profile" | "security" | "notifications" | "billing" | "integrations";

const sections = [
  { id: "profile" as const, label: "Profile", icon: User },
  { id: "security" as const, label: "Security", icon: Lock },
  { id: "notifications" as const, label: "Notification", icon: Bell },
  { id: "billing" as const, label: "Billing", icon: CreditCard },
  { id: "integrations" as const, label: "Integration", icon: Puzzle }
];

export default function SettingsWithDrawer() {
  const [activeSection, setActiveSection] = useState<Section>("profile");
  const [isOpen, setIsOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSettings />;
      case "security":
        return <SecuritySettings />;
      case "notifications":
        return <NotificationSettings />;
      case "billing":
        return <BillingSettings />;
      case "integrations":
        return <IntegrationSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  const SidebarContent = () => (
    <nav className="space-y-1">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <Button
            key={section.id}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2",
              activeSection === section.id && "bg-accent text-accent-foreground"
            )}
            onClick={() => {
              setActiveSection(section.id);
              setIsOpen(false); // Close drawer on mobile after selection
            }}
          >
            <Icon className="h-5 w-5" />
            {section.label}
          </Button>
        );
      })}
    </nav>
  );

  return (
    <div className="w-full">
      {/* Mobile: Sheet/Drawer Button */}
      <div className="mb-4 lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Menu className="h-4 w-4" />
              {sections.find((s) => s.id === activeSection)?.label || "Menu"}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <h2 className="mb-4 text-lg font-semibold">Settings</h2>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-6">
        {/* Desktop: Fixed Sidebar */}
        <aside className="hidden w-64 shrink-0 space-y-2 lg:block">
          <h2 className="mb-4 text-lg font-semibold">Settings</h2>
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main className="flex-1">{renderSection()}</main>
      </div>
    </div>
  );
}
