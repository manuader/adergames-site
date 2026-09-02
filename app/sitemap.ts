import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = ["/", "/fisuevolution", "/support", "/privacy", "/terms", "/press", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://" + site.domain;
  const now = new Date();
  return routes.flatMap((r) => [
    { url: base + (r === "/" ? "" : r), lastModified: now },
    { url: base + "/es" + (r === "/" ? "" : r), lastModified: now },
  ]);
}
