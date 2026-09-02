import "../globals.css";
import { display, body } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ader Games" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={display.variable + " " + body.variable}>
      <body>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-naranja focus:px-4 focus:py-2 focus:font-bold focus:text-cream">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
