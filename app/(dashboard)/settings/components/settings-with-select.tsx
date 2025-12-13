"use client";

import { useState } from "react";
import { User, Lock, Bell, CreditCard, Puzzle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ProfileSettings } from "./profile-settings";
import { SecuritySettings } from "./security-settings";
import { NotificationSettings } from "./notification-settings";
import { BillingSettings } from "./billing-settings";
import { IntegrationSettings } from "./integration-settings";
import { Rough } from "@/components/rough";

type Section = "profile" | "security" | "notifications" | "billing" | "integrations";

const sections = [
  { id: "profile" as const, label: "Profile", icon: User },
  { id: "security" as const, label: "Keamanan", icon: Lock },
  // { id: "notifications" as const, label: "Notification", icon: Bell },
  { id: "billing" as const, label: "Tagihan", icon: CreditCard }
  // { id: "integrations" as const, label: "Integration", icon: Puzzle }
];

export default function SettingsWithSelect() {
  const [activeSection, setActiveSection] = useState<Section>("profile");

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

  return (
    <div className="w-full">
      <div className="flex gap-6">
        {/* Desktop: Sidebar */}
        <aside className="hidden w-64 shrink-0 space-y-2 lg:block">
          <h2 className="mb-4 text-lg font-semibold">
            <Rough type="highlight" iterations={2}>
              Pengaturan
            </Rough>
          </h2>
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
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon className="h-5 w-5" />
                  {section.label}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Mobile: Select Dropdown */}
          <div className="mb-6 lg:hidden">
            <Select
              value={activeSection}
              onValueChange={(value) => setActiveSection(value as Section)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <SelectItem key={section.id} value={section.id}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {section.label}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {renderSection()}
        </main>
      </div>
    </div>
  );
}
