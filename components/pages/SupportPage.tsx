import { copy, type Lang } from "@/content/copy";
import { site } from "@/content/site";
import { faqES, faqEN } from "@/content/legal";

export function SupportPage({ lang }: { lang: Lang }) {
  const t = copy[lang].support;
  const faq = lang === "es" ? faqES : faqEN;
  const mailto = "mailto:" + site.supportEmail + "?subject=" + encodeURIComponent("FisuEvolution — soporte");
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="mb-8 text-3xl sm:text-4xl">{t.title}</h1>
      <div className="mb-10 flex flex-col items-start gap-4 rounded-2xl border-[3px] border-tinta bg-parchment p-6 shadow-[0_4px_0_#2C2C2C] sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 max-w-md text-sm leading-relaxed sm:text-base">{t.contactLead} {t.answerNote}</p>
        <a href={mailto} className="shrink-0 rounded-lg bg-naranja px-5 py-3 font-bold text-cream no-underline hover:bg-naranjadeep hover:text-cream">{site.supportEmail}</a>
      </div>
      <h2 className="mb-5 text-xl sm:text-2xl">{t.faqHeading}</h2>
      <div className="flex flex-col gap-3">
        {faq.map((item, i) => (
          <details key={item.q} open={i === 0} className="overflow-hidden rounded-xl border border-parchdeep bg-parchment shadow-[0_3px_0_#E4D3AC]">
            <summary className="cursor-pointer px-5 py-4 font-bold marker:text-naranja">{item.q}</summary>
            <p className="m-0 px-5 pb-5 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
