import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000", tinta: "#2C2C2C", cream: "#FFF8E7", parchment: "#F1E5C9",
        parchdeep: "#E4D3AC", brown: "#7A4E26", naranja: "#FF6B35", naranjadeep: "#D94F1E",
        amarillo: "#FFD93D", verde: "#6BCB77", rosa: "#FF4D6D", azul: "#4D96FF", muted: "#6B6355",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: { measure: "68ch" },
    },
  },
  plugins: [],
};
export default config;
