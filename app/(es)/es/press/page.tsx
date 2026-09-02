import { Shell } from "@/components/ui";
import { PressPage } from "@/components/pages/PressPage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("es", "/press", "Press kit | Ader Games", "Boilerplate, factsheet y assets de marca de Ader Games y FisuEvolution.");

export default function Page() {
  return <Shell lang="es" route="/press"><PressPage lang="es" /></Shell>;
}
