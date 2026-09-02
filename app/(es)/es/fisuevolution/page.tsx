import { Shell } from "@/components/ui";
import { GamePage } from "@/components/pages/GamePage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("es", "/fisuevolution", "FisuEvolution — De fisura a Dios | Ader Games", "Tapeá, mergeá y evolucioná: de El Fisura del barrio a Dios del universo. Gratis en iOS, muy pronto.");

export default function Page() {
  return <Shell lang="es" route="/fisuevolution"><GamePage lang="es" /></Shell>;
}
