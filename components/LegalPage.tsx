import { site } from "@/content/site";
import { copy, type Lang } from "@/content/copy";
import type { LegalDoc } from "@/content/legal";
import React from "react";

function sub(text: string): string {
  return text.replaceAll("{LEGAL_NAME}", site.legalName).replaceAll("{SUPPORT_EMAIL}", site.supportEmail);
}
/** Renders **bold** spans and turns the support email into a mailto link. */
export function Inline({ text }: { text: string }) {
  const t = sub(text);
  const parts = t.split("**");
  return (
    <>
      {parts.map((part, i) => {
        const node = part.includes(site.supportEmail)
          ? part.split(site.supportEmail).flatMap((seg, j, arr) =>
              j < arr.length - 1 ? [seg, <a key={j} href={"mailto:" + site.supportEmail}>{site.supportEmail}</a>] : [seg])
          : part;
        return i % 2 === 1 ? <strong key={i}>{node}</strong> : <React.Fragment key={i}>{node}</React.Fragment>;
      })}
    </>
  );
}

export function LegalPage({ lang, doc }: { lang: Lang; doc: LegalDoc }) {
  const t = copy[lang];
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
      <nav aria-label={t.legal.toc} className="toc mb-10 hidden lg:block">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">{t.legal.toc}</p>
        <ol className="m-0 flex list-none flex-col gap-2 p-0 text-sm sticky top-6">
          {doc.sections.map((s) => (
            <li key={s.id}><a href={"#" + s.id} className="text-tinta no-underline hover:text-naranja">{s.title}</a></li>
          ))}
        </ol>
      </nav>
      <article className="max-w-measure">
        <p className="mb-2 text-sm text-muted">{t.legal.updated}: {doc.updated}</p>
        <h1 className="mb-4 text-3xl sm:text-4xl">{doc.title}</h1>
        <p className="mb-10 rounded-xl border-2 border-parchdeep bg-parchment p-4 font-semibold"><Inline text={doc.summary} /></p>
        {doc.sections.map((s) => (
          <section key={s.id} className="mb-10">
            <h2 id={s.id} className="mb-4 scroll-mt-6 text-xl">
              <a href={"#" + s.id} className="text-tinta no-underline hover:text-naranja">{s.title}</a>
            </h2>
            {s.blocks.map((b, i) =>
              b.p ? (
                <p key={i} className="mb-4 leading-relaxed"><Inline text={b.p} /></p>
              ) : (
                <ul key={i} className="mb-4 flex list-disc flex-col gap-3 pl-5 leading-relaxed">
                  {b.list!.map((li, j) => <li key={j}><Inline text={li} /></li>)}
                </ul>
              )
            )}
          </section>
        ))}
      </article>
    </div>
  );
}
