import { site } from "@/content/site";
import { copy, type Lang } from "@/content/copy";
import Image from "next/image";
import Link from "next/link";

export const href = (lang: Lang, route: string) => (lang === "es" ? "/es" + (route === "/" ? "" : route) : route) || "/";

export function Header({ lang, route }: { lang: Lang; route: string }) {
  const t = copy[lang];
  const items: [string, string][] = [
    [t.nav.game, "/fisuevolution"], [t.nav.support, "/support"], [t.nav.press, "/press"], [t.nav.about, "/about"],
  ];
  return (
    <header className="bg-ink">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link href={href(lang, "/")} className="shrink-0">
          <Image src="/brand/logo.png" alt="Ader Games" width={96} height={96} className="h-10 w-10 object-cover" priority />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-7">
          {items.map(([label, r]) => (
            <Link key={r} href={href(lang, r)} className={"text-sm font-semibold no-underline " + (route === r ? "text-naranja" : "text-cream hover:text-naranja")}>{label}</Link>
          ))}
          <span className="flex overflow-hidden rounded border-2 border-cream text-xs font-bold" role="group" aria-label="Language">
            <Link href={href("en", route)} hrefLang="en" className={"px-2 py-1 no-underline " + (lang === "en" ? "bg-cream text-ink" : "text-cream")}>EN</Link>
            <Link href={href("es", route)} hrefLang="es" className={"px-2 py-1 no-underline " + (lang === "es" ? "bg-cream text-ink" : "text-cream")}>ES</Link>
          </span>
        </nav>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm">
        <p className="m-0">{site.legalName} · {site.address} · <a href={"mailto:" + site.contactEmail} className="text-azul">{site.contactEmail}</a></p>
        <p className="m-0 flex flex-wrap gap-x-5 gap-y-1">
          <Link href={href(lang, "/privacy")} className="text-azul">{lang === "es" ? "Privacidad" : "Privacy"}</Link>
          <Link href={href(lang, "/terms")} className="text-azul">{lang === "es" ? "Términos" : "Terms"}</Link>
          <span className="opacity-70">{t.footer.noCookies}</span>
        </p>
        <p className="m-0 opacity-70">© {site.founded} {site.legalName}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

export function Shell({ lang, route, children }: { lang: Lang; route: string; children: React.ReactNode }) {
  return (
    <>
      <Header lang={lang} route={route} />
      <main id="content">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
