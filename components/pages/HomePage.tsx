import Image from "next/image";
import Link from "next/link";
import { copy, type Lang } from "@/content/copy";
import { site } from "@/content/site";
import { href } from "@/components/ui";
import { OrgJsonLd } from "@/components/JsonLd";

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <>
      <OrgJsonLd />
      <section className="bg-ink">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-28">
          <h1 className="sr-only">Ader Games</h1>
          <Image src="/brand/logo.png" alt="Ader Games" width={880} height={880} priority unoptimized className="h-auto w-[min(420px,72vw)] object-cover" />
          <p className="m-0 max-w-xl text-lg text-cream sm:text-xl">{t.hero.tagline}</p>
          <Link href={href(lang, "/fisuevolution")} className="rounded-lg bg-naranja px-7 py-3.5 text-lg font-bold text-cream no-underline transition-colors hover:bg-naranjadeep hover:text-cream">
            {t.hero.cta} →
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-2xl sm:text-3xl">{t.firstGame.heading}</h2>
        <div className="overflow-hidden rounded-2xl border border-parchdeep bg-parchment shadow-[0_3px_0_#E4D3AC]">
          <Image src="/fisuevolution/keyart.png" alt="" width={1600} height={900} className="h-auto w-full border-b border-parchdeep" />
          <div className="flex flex-col items-start gap-4 p-8">
            <span className="rounded-full border border-brown bg-amarillo px-4 py-1 text-sm font-bold">{t.firstGame.badge}</span>
            <div className="flex items-center gap-4">
              <Image src="/fisuevolution/icon.png" alt="" width={160} height={160} className="h-16 w-16 shrink-0 rounded-2xl border-2 border-tinta" />
              <p className="m-0 font-display text-3xl uppercase leading-none">FisuEvolution</p>
            </div>
            <p className="m-0 font-display text-base uppercase text-naranja">{t.firstGame.subtitle}</p>
            <ul className="m-0 flex flex-col gap-1.5 pl-5">
              {t.firstGame.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <Link href={href(lang, "/fisuevolution")} className="mt-2 rounded-lg border-2 border-tinta px-5 py-2.5 font-bold text-tinta no-underline hover:border-naranja hover:text-naranja">
              {t.firstGame.more}
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-8 text-2xl sm:text-3xl">{t.how.heading}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.how.blocks.map((b) => (
            <div key={b.title} className="rounded-xl border border-parchdeep bg-parchment p-6 shadow-[0_3px_0_#E4D3AC]">
              <h3 className="mb-2 text-lg">{b.title}</h3>
              <p className="m-0 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
        <ul className="mx-auto mt-12 flex max-w-3xl list-none flex-wrap justify-center gap-3 p-0">
          {t.facts.map((f) => (
            <li key={f} className="rounded-full border-2 border-tinta px-4 py-1.5 text-sm font-semibold">{f}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
