import { Shell } from "@/components/ui";
import { GamePage } from "@/components/pages/GamePage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("en", "/fisuevolution", "FisuEvolution — From broke to God | Ader Games", "Tap, merge and evolve: from neighborhood hobo to God of the universe. Free on iOS, coming soon.");

export default function Page() {
  return <Shell lang="en" route="/fisuevolution"><GamePage lang="en" /></Shell>;
}
