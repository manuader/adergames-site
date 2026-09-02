import Image from "next/image";
import Link from "next/link";
import { copy, type Lang } from "@/content/copy";
import { href } from "@/components/ui";
import { GameJsonLd } from "@/components/JsonLd";
import { Layers, Coins, TrendingDown, Ghost, RefreshCcw, Moon } from "lucide-react";

const icons = [Layers, Coins, TrendingDown, Ghost, RefreshCcw, Moon];

export function GamePage({ lang }: { lang: Lang }) {
  const t = copy[lang].game;
  const badge = copy[lang].firstGame.badge;
  return (
    <>
      <GameJsonLd description={t.what} />
      <section className="bg-ink">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-16 sm:flex-row sm:items-center sm:gap-12">
          <Image src="/fisuevolution/icon.png" alt="FisuEvolution app icon" width={400} height={400} priority className="h-44 w-44 shrink-0 rounded-[2.5rem] border-4 border-cream object-cover sm:h-52 sm:w-52" />
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <h1 className="m-0 text-4xl text-cream sm:text-5xl">FisuEvolution</h1>
            <p className="m-0 font-display text-lg uppercase text-naranja">{t.subtitle}</p>
            <span className="rounded-full border border-brown bg-amarillo px-4 py-1 text-sm font-bold text-tinta">{badge}</span>
            <p className="m-0 max-w-xl text-cream">{t.what}</p>
            <p className="m-0 flex gap-4 text-sm">
              <Link href={href(lang, "/support")} className="font-semibold text-azul">{t.footerLinks.support}</Link>
              <Link href={href(lang, "/privacy")} className="font-semibold text-azul">{t.footerLinks.privacy}</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pt-12">
        <Image
          src="/fisuevolution/keyart.png"
          alt=""
          width={1600}
          height={900}
          className="h-auto w-full rounded-2xl border-[3px] border-tinta shadow-[0_4px_0_#2C2C2C]"
        />
      </section>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-2xl sm:text-3xl">{t.featuresHeading}</h2>
        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((f, i) => {
            const Icon = icons[i];
            return (
              <li key={f} className="flex flex-col gap-3 rounded-2xl border-[3px] border-tinta bg-parchment p-5 shadow-[0_4px_0_#2C2C2C]">
                <Icon aria-hidden className="h-6 w-6 text-naranja" strokeWidth={2.25} />
                <span className="text-sm leading-relaxed">{f}</span>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-2xl sm:text-3xl">{t.galleryHeading}</h2>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {t.captions.map((cap, i) => (
            <figure key={cap} className="m-0 flex flex-col gap-2">
              <div className="overflow-hidden rounded-[1.4rem] border-[3px] border-tinta bg-ink p-1 shadow-[0_4px_0_#2C2C2C]">
                <Image src={"/fisuevolution/screenshot-" + (i + 1) + ".png"} alt={cap} width={645} height={1398} className="h-auto w-full rounded-[1.1rem]" />
              </div>
              <figcaption className="text-center text-xs font-semibold">{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-6 text-2xl sm:text-3xl">{t.sheetHeading}</h2>
        <table className="w-full max-w-2xl border-collapse overflow-hidden rounded-xl text-sm sm:text-base">
          <tbody>
            {t.sheet.map(([k, v], i) => (
              <tr key={k} className={"bg-parchment " + (i ? "border-t border-parchdeep" : "")}>
                <th scope="row" className="w-48 px-5 py-3 text-left font-bold">{k}</th>
                <td className="px-5 py-3">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-10 flex flex-wrap gap-5 text-sm font-semibold">
          <Link href={href(lang, "/support")}>{t.footerLinks.support}</Link>
          <Link href={href(lang, "/privacy")}>{t.footerLinks.privacy}</Link>
          <Link href={href(lang, "/terms")}>{t.footerLinks.terms}</Link>
          <Link href={href(lang, "/press")}>{t.footerLinks.press}</Link>
        </p>
      </section>
    </>
  );
}
