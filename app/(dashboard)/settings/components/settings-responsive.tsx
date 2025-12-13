"use client";

import { User, Lock, Bell, CreditCard, Puzzle } from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProfileSettings } from "./profile-settings";
import { SecuritySettings } from "./security-settings";
import { NotificationSettings } from "./notification-settings";
import { BillingSettings } from "./billing-settings";
import { IntegrationSettings } from "./integration-settings";

export default function SettingsResponsive() {
  return (
    <div className="w-full">
      <Tabs defaultValue="profile" className="w-full">
        {/* Mobile: Horizontal scrollable tabs */}
        {/* Desktop: Vertical sidebar-style tabs */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Tabs Navigation */}
          <TabsList className="lg:bg-transparent lg:text-foreground h-auto w-full flex-row overflow-x-auto lg:w-64 lg:flex-col lg:items-stretch lg:justify-start lg:gap-1 lg:p-0">
            <h2 className="mb-4 hidden text-lg font-semibold lg:block">Settings</h2>

            <TabsTrigger
              value="profile"
              className="lg:justify-start lg:gap-2 lg:rounded-md lg:px-3 lg:py-2 lg:data-[state=active]:bg-accent"
            >
              <User className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>

            <TabsTrigger
              value="security"
              className="lg:justify-start lg:gap-2 lg:rounded-md lg:px-3 lg:py-2 lg:data-[state=active]:bg-accent"
            >
              <Lock className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>

            <TabsTrigger
              value="notifications"
              className="lg:justify-start lg:gap-2 lg:rounded-md lg:px-3 lg:py-2 lg:data-[state=active]:bg-accent"
            >
              <Bell className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="hidden sm:inline">Notification</span>
            </TabsTrigger>

            <TabsTrigger
              value="billing"
              className="lg:justify-start lg:gap-2 lg:rounded-md lg:px-3 lg:py-2 lg:data-[state=active]:bg-accent"
            >
              <CreditCard className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="hidden sm:inline">Billing</span>
            </TabsTrigger>

            <TabsTrigger
              value="integrations"
              className="lg:justify-start lg:gap-2 lg:rounded-md lg:px-3 lg:py-2 lg:data-[state=active]:bg-accent"
            >
              <Puzzle className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="hidden sm:inline">Integration</span>
            </TabsTrigger>
          </TabsList>

          {/* Content Area */}
          <div className="flex-1">
            <TabsContent value="profile" className="mt-0">
              <ProfileSettings />
            </TabsContent>

            <TabsContent value="security" className="mt-0">
              <SecuritySettings />
            </TabsContent>

            <TabsContent value="notifications" className="mt-0">
              <NotificationSettings />
            </TabsContent>

            <TabsContent value="billing" className="mt-0">
              <BillingSettings />
            </TabsContent>

            <TabsContent value="integrations" className="mt-0">
              <IntegrationSettings />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
