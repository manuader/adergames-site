import { Shell } from "@/components/ui";
import { SupportPage } from "@/components/pages/SupportPage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("es", "/support", "Soporte — FisuEvolution | Ader Games", "Ayuda con progreso, compras y bugs de FisuEvolution. Respondemos en español o inglés.");

export default function Page() {
  return <Shell lang="es" route="/support"><SupportPage lang="es" /></Shell>;
}
