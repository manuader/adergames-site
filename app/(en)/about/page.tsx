import { Shell } from "@/components/ui";
import { AboutPage } from "@/components/pages/AboutPage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("en", "/about", "About | Ader Games", "An independent game studio founded in 2026 in Buenos Aires, Argentina. Company information.");

export default function Page() {
  return <Shell lang="en" route="/about"><AboutPage lang="en" /></Shell>;
}
