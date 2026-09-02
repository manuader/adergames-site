import { Shell } from "@/components/ui";
import { LegalPage } from "@/components/LegalPage";
import { makeMetadata } from "@/lib/meta";
import { privacyES, privacyEN } from "@/content/legal";
export const metadata = makeMetadata("es", "/privacy", "Política de Privacidad — FisuEvolution | Ader Games", "Resumen honesto: no recolectamos tus datos. La política de privacidad completa de FisuEvolution.");

export default function Page() {
  return <Shell lang="es" route="/privacy"><LegalPage lang="es" doc={privacyES} /></Shell>;
}
