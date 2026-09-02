import { Shell } from "@/components/ui";
import { PressPage } from "@/components/pages/PressPage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("en", "/press", "Press kit | Ader Games", "Boilerplate, factsheet and brand assets of Ader Games and FisuEvolution.");

export default function Page() {
  return <Shell lang="en" route="/press"><PressPage lang="en" /></Shell>;
}
