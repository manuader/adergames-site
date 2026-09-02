import Image from "next/image";
import { copy, type Lang } from "@/content/copy";
import { site } from "@/content/site";

export function PressPage({ lang }: { lang: Lang }) {
  const t = copy[lang].press;
  const sheet = copy[lang].game.sheet;
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="mb-10 text-3xl sm:text-4xl">{t.title}</h1>

      <h2 className="mb-4 text-xl sm:text-2xl">{t.boilerplateHeading}</h2>
      <p className="mb-12 max-w-measure rounded-xl border border-parchdeep bg-parchment p-5 leading-relaxed">{t.boilerplate}</p>

      <h2 className="mb-4 text-xl sm:text-2xl">{t.factsheetHeading}</h2>
      <table className="mb-12 w-full max-w-xl border-collapse overflow-hidden rounded-xl text-sm sm:text-base">
        <tbody>
          {sheet.map(([k, v], i) => (
            <tr key={k} className={"bg-parchment " + (i ? "border-t border-parchdeep" : "")}>
              <th scope="row" className="w-48 px-5 py-3 text-left font-bold">{k}</th>
              <td className="px-5 py-3">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mb-4 text-xl sm:text-2xl">{t.assetsHeading}</h2>
      <div className="mb-4 rounded-xl bg-ink p-8">
        <Image src="/brand/logo.png" alt="Ader Games wordmark" width={880} height={880} className="mx-auto h-auto w-56 object-cover" />
      </div>
      <p className="mb-4 text-sm font-semibold text-muted">{t.assetsNote}</p>
      <ul className="mb-12 flex list-none flex-col gap-2 p-0">
        {t.assets.map(([label, path]) => (
          <li key={path}><a href={path} download className="font-semibold">{label}</a></li>
        ))}
      </ul>

      <h2 className="mb-4 text-xl sm:text-2xl">{t.screenshotsHeading}</h2>
      <ul className="mb-12 grid list-none grid-cols-3 gap-4 p-0 sm:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <li key={n}>
            <a href={"/fisuevolution/screenshot-" + n + ".png"} download>
              <Image src={"/fisuevolution/screenshot-" + n + ".png"} alt={"FisuEvolution screenshot " + n} width={215} height={466} className="h-auto w-full rounded-lg border border-parchdeep" />
            </a>
          </li>
        ))}
      </ul>

      <h2 className="mb-3 text-xl sm:text-2xl">{t.contactHeading}</h2>
      <p className="m-0"><a href={"mailto:" + site.pressEmail} className="text-lg font-bold">{site.pressEmail}</a></p>
    </div>
  );
}
