import { copy, type Lang } from "@/content/copy";
import { site } from "@/content/site";
import { OrgJsonLd } from "@/components/JsonLd";

export function AboutPage({ lang }: { lang: Lang }) {
  const t = copy[lang].about;
  const rows: [string, string][] = [
    [t.companyRows.legalName, site.legalName],
    [t.companyRows.taxId, site.taxId],
    [t.companyRows.address, site.address],
    [t.companyRows.email, site.contactEmail],
  ];
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <OrgJsonLd />
      <h1 className="mb-8 text-3xl sm:text-4xl">{t.title}</h1>
      <div className="max-w-measure">
        {t.paragraphs.map((p) => <p key={p.slice(0, 20)} className="mb-4 text-lg leading-relaxed">{p}</p>)}
      </div>
      <h2 className="mb-5 mt-12 text-xl sm:text-2xl">{t.companyHeading}</h2>
      <table className="w-full max-w-xl border-collapse overflow-hidden rounded-xl text-sm sm:text-base">
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={k} className={"bg-parchment " + (i ? "border-t border-parchdeep" : "")}>
              <th scope="row" className="w-52 px-5 py-3 text-left font-bold">{k}</th>
              <td className="px-5 py-3">{k === t.companyRows.email ? <a href={"mailto:" + v}>{v}</a> : v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
