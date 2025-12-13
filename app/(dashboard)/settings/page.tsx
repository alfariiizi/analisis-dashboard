import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";
import SettingsWithSelect from "./components/settings-with-select";
import PageContainer from "@/components/page-container";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Settings",
    description:
      "A settings page is a page where users can configure preferences, account options, and app settings. Built with shadcn/ui, Tailwind CSS, Next.js and React.",
    canonical: "/settings"
  });
}

export default function Page() {
  return (
    <PageContainer>
      <SettingsWithSelect />
    </PageContainer>
  );
}
