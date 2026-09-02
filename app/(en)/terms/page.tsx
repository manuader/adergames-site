import { Shell } from "@/components/ui";
import { LegalPage } from "@/components/LegalPage";
import { makeMetadata } from "@/lib/meta";
import { termsES, termsEN } from "@/content/terms";
export const metadata = makeMetadata("en", "/terms", "Terms of Service — FisuEvolution | Ader Games", "The terms of service of FisuEvolution: licence, in-app purchases, ads, your consumer rights.");

export default function Page() {
  return <Shell lang="en" route="/terms"><LegalPage lang="en" doc={termsEN} /></Shell>;
}
