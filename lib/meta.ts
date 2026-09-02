import type { Metadata } from "next";
import { site } from "@/content/site";

/** route: path without locale prefix, e.g. "/" or "/fisuevolution" */
export function makeMetadata(lang: "en" | "es", route: string, title: string, description: string): Metadata {
  const base = "https://" + site.domain;
  const enUrl = base + (route === "/" ? "" : route) + (route === "/" ? "/" : "");
  const esUrl = base + "/es" + (route === "/" ? "" : route);
  const url = lang === "en" ? enUrl : esUrl;
  return {
    title, description,
    metadataBase: new URL(base),
    alternates: { canonical: url, languages: { en: enUrl, es: esUrl } },
    openGraph: { title, description, url, siteName: "Ader Games", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ader Games" }], locale: lang === "en" ? "en_US" : "es_AR", type: "website" },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
