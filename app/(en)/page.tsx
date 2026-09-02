import { Shell } from "@/components/ui";
import { HomePage } from "@/components/pages/HomePage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("en", "/", "Ader Games — Independent game studio in Buenos Aires", "We make small iPhone games with big personality. First title: FisuEvolution.");

export default function Page() {
  return <Shell lang="en" route="/"><HomePage lang="en" /></Shell>;
}
