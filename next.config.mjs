import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sin esto Turbopack sube hasta encontrar un lockfile y toma el home del
  // usuario como raiz del proyecto, con lo que el dev server sirve la pagina
  // sin la mitad de los estilos.
  turbopack: { root: dirname(fileURLToPath(import.meta.url)) },
};

export default nextConfig;
