import { Shell } from "@/components/ui";
import { LegalPage } from "@/components/LegalPage";
import { makeMetadata } from "@/lib/meta";
import { privacyES, privacyEN } from "@/content/legal";
export const metadata = makeMetadata("en", "/privacy", "Privacy Policy — FisuEvolution | Ader Games", "Honest summary: we don't collect your data. The full privacy policy of FisuEvolution.");

export default function Page() {
  return <Shell lang="en" route="/privacy"><LegalPage lang="en" doc={privacyEN} /></Shell>;
}
