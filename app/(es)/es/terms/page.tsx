import { Shell } from "@/components/ui";
import { LegalPage } from "@/components/LegalPage";
import { makeMetadata } from "@/lib/meta";
import { termsES, termsEN } from "@/content/terms";
export const metadata = makeMetadata("es", "/terms", "Términos de Servicio — FisuEvolution | Ader Games", "Los términos de servicio de FisuEvolution: licencia, compras dentro de la app, anuncios y tus derechos.");

export default function Page() {
  return <Shell lang="es" route="/terms"><LegalPage lang="es" doc={termsES} /></Shell>;
}
