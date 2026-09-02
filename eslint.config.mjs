// ESLint 9 usa flat config. eslint-config-next@16 exporta el array de flat
// config directamente, asi que se esparce tal cual.
import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  ...coreWebVitals,
];

export default config;
