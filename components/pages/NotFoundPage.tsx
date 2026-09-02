import Link from "next/link";
import { copy, type Lang } from "@/content/copy";
import { href } from "@/components/ui";

export function NotFoundPage({ lang }: { lang: Lang }) {
  const t = copy[lang].notFound;
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 px-6 py-24">
      <p className="m-0 font-display text-6xl uppercase text-naranja">404</p>
      <h1 className="m-0 text-3xl">{t.title}</h1>
      <p className="m-0 text-lg">{t.body}</p>
      <Link href={href(lang, "/")} className="rounded-lg bg-naranja px-6 py-3 font-bold text-cream no-underline hover:bg-naranjadeep hover:text-cream">{t.back}</Link>
    </div>
  );
}
