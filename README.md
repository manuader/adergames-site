# adergames-site

Sitio estático de Ader Games — Next.js (App Router) + TypeScript + Tailwind. Sin backend, sin analytics, sin cookies, sin requests a terceros en runtime (tipografías self-hosted vía `next/font`).

## Correr local
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
```

## Deploy en Vercel
Importar el repo en Vercel — cero configuración. `npm install && npm run build` pasa limpio.

## Datos del sitio — un solo archivo
Todo vive en `content/site.ts`. Estado al 2026-09-21:

| Campo | Valor | Por qué |
|---|---|---|
| `legalName` | `Manuel Ader` | Se publica como **persona física**, que es lo que dicen los términos y lo que es el enrollment Individual de App Store. Cuando ADERGAMES S.A.S. esté inscripta, acá va la razón social — y también cambia sola la frase del sujeto legal en `/terms`. |
| `taxId` | **vacío** | Sin CUIT publicado. La fila de `/about` se oculta sola cuando el valor está vacío; poner uno inventado sería peor que no tenerlo. |
| `domain` | `adergames-site.vercel.app` | De acá salen canonical, sitemap, robots y JSON-LD: tiene que resolver. |
| los tres emails | `adermanu@gmail.com` | Ver abajo. |

⚠️ **`adergames.io` no está registrado.** El registro de `.io` devuelve
`Domain not found` y no hay MX, A ni NS. Los tres mails que había antes
(`support@`, `contact@`, `press@`) **rebotaban**, y App Store Review pide
contacto vigente en el support URL (guideline 1.5). Si algún día se compra el
dominio y se le pone buzón, se cambian esas cinco líneas y listo.

Cuando el juego salga: `releaseState: "released"` + `appStoreUrl`.

## Archivos de /public a reemplazar por assets reales
| Archivo | Dimensiones | Estado |
|---|---|---|
| `public/brand/logo.png` | — | ✅ el adjunto, tal cual. Cuando exista la versión con fondo transparente, reemplazar (mismo nombre) — el logo queda libre de la restricción de fondo negro. |
| `public/brand/logo-mono.png` | — | ⚠️ derivado automático (silueta plana crema). Idealmente rehacer como SVG vectorial calcado. |
| `public/brand/mark.png` | 512×512 | ⚠️ la "A" recortada del logo original. Idealmente rehacer como SVG. |
| `public/fisuevolution/keyart.png` | 1600×900 | 🔁 REEMPLAZAR — placeholder generado con el ícono real. |
| `public/fisuevolution/icon.png` | 1024×1024 | ✅ ícono real de la app. |
| `public/fisuevolution/screenshot-1..6.png` | 1290×2796 | 🔁 REEMPLAZAR — placeholders con la paleta del juego. |
| `public/og.png` | 1200×630 | ✅ logo centrado sobre negro. |
| `app/icon.png` | 256×256 | favicon = la "A" del logo. |

## Notas
- Bilingüe: `/` inglés, `/es/…` español rioplatense. El selector EN/ES conserva la página. `<html lang>` correcto por grupo de rutas; `hreflang` + canonical en cada página.
- `/support`, `/privacy` y `/terms` funcionan sin JavaScript (acordeón con `<details>`).
- El texto legal viene de los archivos provistos y no fue reescrito, salvo las dos ediciones obligatorias (sujeto legal → `site.legalName`; email → `site.supportEmail`), aplicadas como tokens en `content/legal.ts` y `content/terms.ts`.
- El FAQ de /support en inglés es una versión fiel en inglés de los ítems del archivo (la sección EN del archivo era un resumen de 3 líneas) — revisar si se prefiere el resumen literal.
- JSON-LD: Organization en home y /about; VideoGame en /fisuevolution. `sitemap.xml` (14 rutas) y `robots.txt` incluidos.
