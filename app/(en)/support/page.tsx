import { Shell } from "@/components/ui";
import { SupportPage } from "@/components/pages/SupportPage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("en", "/support", "Support — FisuEvolution | Ader Games", "Help with progress, purchases and bugs in FisuEvolution. We answer in Spanish or English.");

export default function Page() {
  return <Shell lang="en" route="/support"><SupportPage lang="en" /></Shell>;
}
