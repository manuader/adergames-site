import { Shell } from "@/components/ui";
import { HomePage } from "@/components/pages/HomePage";
import { makeMetadata } from "@/lib/meta";

export const metadata = makeMetadata("es", "/", "Ader Games — Estudio independiente de videojuegos en Buenos Aires", "Hacemos juegos chicos de iPhone con mucha personalidad. Primer título: FisuEvolution.");

export default function Page() {
  return <Shell lang="es" route="/"><HomePage lang="es" /></Shell>;
}
