import { site } from "@/content/site";

const org = {
  "@type": "Organization",
  name: site.legalName,
  alternateName: "Ader Games",
  url: "https://" + site.domain,
  logo: "https://" + site.domain + "/brand/logo.png",
  email: site.contactEmail,
  foundingDate: site.founded,
  address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "AR" },
};

export function OrgJsonLd() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...org }) }} />;
}

export function GameJsonLd({ description }: { description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "FisuEvolution",
    description,
    genre: "merge / idle",
    operatingSystem: "iOS",
    applicationCategory: "GameApplication",
    publisher: org,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
