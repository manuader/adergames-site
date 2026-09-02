import { Shell } from "@/components/ui";
import { AboutPage } from "@/components/pages/AboutPage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("es", "/about", "Nosotros | Ader Games", "Estudio independiente de videojuegos fundado en 2026 en Buenos Aires, Argentina. Información de la empresa.");

export default function Page() {
  return <Shell lang="es" route="/about"><AboutPage lang="es" /></Shell>;
}
