// Legal & support copy — from content files provided by the studio. NOT rewritten.
// Two mandated substitutions are applied via tokens at render time:
// {LEGAL_NAME} -> site.legalName (the file said "una persona física, no una empresa")
// {SUPPORT_EMAIL} -> site.supportEmail (the file said adermanu@gmail.com)
export type Block = { p?: string; list?: string[] };
export type Section = { id: string; title: string; blocks: Block[] };
export type LegalDoc = { title: string; updated: string; summary: string; sections: Section[] };

export const privacyES: LegalDoc = {
  title: "Política de Privacidad — FisuEvolution",
  updated: "octubre de 2026",
  summary: "Resumen honesto: no tenemos cuentas ni te pedimos datos personales. La publicidad procesa algunos datos, el ranking guarda un identificador anónimo y el nombre que vos elegís, y el juego nos manda estadísticas de uso, con un identificador al azar propio de ellas, para saber cómo se juega y cuánto rinden los anuncios. Abajo está exactamente cuáles y cómo los controlás.",
  sections: [
    { id: "no-hacemos", title: "Lo que NO hacemos", blocks: [
      { list: [
        "**No tenemos cuentas ni registro.** No pedimos tu email, tu nombre ni ningún dato personal para jugar.",
        "**No tenemos analytics de terceros.** Tu progreso se guarda en tu dispositivo. Tenemos un solo servidor propio, alojado en Supabase: guarda el ranking y las estadísticas de uso, que se explican más abajo.",
        "**No vendemos datos** a nadie.",
      ]},
    ]},
    { id: "publicidad", title: "Publicidad", blocks: [
      { p: "FisuEvolution **muestra publicidad a través de Google AdMob**. Hay dos tipos:" },
      { list: [
        "**Videos con recompensa**, que mirás sólo si querés: los ofrecemos a cambio de premios dentro del juego (duplicar tus ganancias, abrir otro cofre, activar un boost). Nunca se reproducen solos.",
        "**Anuncios que aparecen solos**: los de pantalla completa entre partes del juego, la pausa publicitaria (que siempre podés rechazar) y el que aparece al volver a la app. La compra **\"Sin anuncios\"** los elimina; los videos con recompensa siguen disponibles, porque son opcionales y entregan premios.",
      ]},
    ]},
    { id: "quienes-procesan", title: "Quiénes procesan tus datos por los anuncios", blocks: [
      { p: "Para mostrarlos, **Google AdMob procesa datos de tu dispositivo** —incluido tu identificador de publicidad (IDFA), la dirección IP y datos técnicos y de uso— según su propia política de privacidad: https://policies.google.com/privacy" },
      { p: "AdMob también hace competir por cada anuncio a otra red publicitaria (mediación, por puja o bidding). En esta versión es una sola, y procesa datos de tu dispositivo —el identificador de publicidad, la IP y datos técnicos y de uso— según su propia política:" },
      { list: [
        "**Unity Ads** (Unity Technologies): https://unity.com/legal/privacy-policy",
      ]},
      { p: "No trabajamos con otras redes. Ninguna de estas empresas recibe de nosotros tu nombre del ranking, el identificador de tu instalación ni tus tiempos de partida." },
    ]},
    { id: "config-anuncios", title: "Configuración de anuncios", blocks: [
      { p: "La app baja de nuestro sitio un archivo de configuración de anuncios (/config/ads.json). **No manda ningún dato tuyo**, pero como cualquier pedido web, el proveedor del sitio (Vercel) ve la dirección IP desde la que se pide." },
    ]},
    { id: "control", title: "Vos controlás si es personalizada", blocks: [
      { p: "La primera vez que abrís el juego, iOS te muestra el diálogo de **App Tracking Transparency** preguntando si permitís el seguimiento." },
      { list: [
        "**Si aceptás**, los anuncios se personalizan usando tu identificador de publicidad.",
        "**Si rechazás**, **los anuncios se siguen viendo igual, sólo que sin personalizar**. No perdés nada del juego.",
      ]},
      { p: "Podés cambiar esta decisión cuando quieras en **Ajustes → Privacidad y seguridad → Rastreo**." },
      { p: "En la Unión Europea, el Reino Unido y Suiza, además te mostramos el formulario de consentimiento de Google (UMP) antes de servir cualquier anuncio, y podés revisar tu elección desde **Ajustes → Opciones de privacidad**." },
    ]},
    { id: "ranking", title: "El ranking de la llegada a Dios", blocks: [
      { p: "Si llegás a Dios, podés **entrar al ranking** con un nombre. Es opcional: si no entrás, tu partida no se publica. Para que funcione guardamos en nuestro servidor:" },
      { list: [
        "**Un identificador anónimo de tu instalación**, que generamos al azar y que no está ligado a tu identidad, a tu cuenta de Apple ni a tu identificador de publicidad. Sirve para saber qué partidas son tuyas y para limitar abusos.",
        "**El nombre que elegiste** y tus **tiempos de partida**, que se muestran a los demás jugadores.",
      ]},
      { p: "No los usamos para seguirte ni los vinculamos con tu identidad, y no los compartimos con anunciantes. Los nombres pasan por reglas, una lista de palabras y una revisión automática con IA antes de mostrarse; no pongas datos personales en el nombre." },
    ]},
    { id: "revision-ia", title: "Quién hace la revisión con IA", blocks: [
      { p: "La revisión automática la hace **Anthropic** con su modelo **Claude**, a pedido de nuestro servidor. Le mandamos **sólo el nombre que elegiste** (el texto, hasta 15 caracteres): no le mandamos el identificador de tu instalación, tus tiempos, tu identificador de publicidad ni ningún dato de tu dispositivo. Anthropic la procesa según su propia política de privacidad: https://www.anthropic.com/legal/privacy. Cualquier jugador puede **reportar** un nombre, y un nombre reportado se oculta. Si bloqueás un nombre (\"No ver más este nombre\"), esa decisión se guarda **sólo en tu dispositivo** y no sale de él. Si querés que borremos tu nombre o tus partidas del ranking, escribinos al contacto de abajo con tu nombre y lo hacemos." },
      { p: "Los datos del ranking viven en nuestro servidor, alojado en **Supabase**, que los guarda por cuenta nuestra, y salen de tu dispositivo sólo si entrás al ranking. Lo otro que nos llega son las estadísticas de uso de la sección siguiente." },
    ]},
    { id: "estadisticas", title: "Estadísticas de uso", blocks: [
      { p: "Para entender cómo se juega y cuánto rinde cada anuncio, el juego le manda a nuestro servidor mensajes cortos sobre lo que pasa en la partida. Cada uno lleva:" },
      { list: [
        "**Qué pasó:** que empezó o terminó una sesión de juego (cuánto duró y cuántas sesiones llevás); que se vio un anuncio (de qué tipo, en qué lugar del juego, qué red lo sirvió y cuánto pagó por esa vista, en su moneda); qué pasó con una oferta de video (si apareció, si la tocaste, si te ganaste el premio, si no había video o si la dejaste pasar); qué producto compraste (sólo cuál: ni el precio ni los datos de la compra); y cuántas veces reencarnaste.",
        "**Datos técnicos:** la versión del juego y de iOS, el modelo de tu iPhone o iPad (por ejemplo, \"iPhone16,2\") y el país de tu App Store.",
        "**Un identificador al azar, propio de estas estadísticas.** No es el del ranking ni se comparte con él, y no está ligado a tu nombre, a tu cuenta de Apple ni a tu identificador de publicidad. Sigue siendo el mismo si reinstalás el juego en el mismo dispositivo y no pasa a tus otros dispositivos (ni por iCloud ni al restaurar una copia de seguridad en otro teléfono). Además, un identificador de sesión nuevo cada vez que abrís el juego y la hora de tu teléfono.",
      ]},
      { p: "Lo que **no** llevan: tu identificador de publicidad (IDFA), el identificador de proveedor de iOS (IDFV), tu nombre del ranking, texto que hayas escrito, ni datos de tu cuenta de Apple o de tu pago. No las cruzamos con tu nombre del ranking ni con nada que te identifique, no las usamos para mostrarte publicidad ni para seguirte por otras apps o sitios, no se las pasamos a las redes de anuncios y no las vendemos." },
      { p: "Como cualquier pedido web, el proveedor del servidor (Supabase) ve la dirección IP desde la que llega cada envío —del ranking o de estas estadísticas— y la anota en sus registros técnicos por unos pocos días. Nosotros no la guardamos junto a las estadísticas, no la usamos para identificarte y no la cruzamos con ellas." },
      { p: "Las estadísticas se guardan en Supabase por cuenta nuestra y **se borran solas a los 400 días** (un año y un mes, para comparar cada mes con el mismo del año anterior). Si estás sin conexión, esperan en tu dispositivo —como mucho, las últimas 1.000 y hasta un mes— hasta que haya red." },
      { p: "**Cómo se apagan.** En la Unión Europea, el Reino Unido y Suiza se mandan sólo si en el formulario de consentimiento de Google aceptaste que se guarde información en tu dispositivo y que se use para medir, hacer estadísticas y mejorar el servicio. Podés cambiar tu elección cuando quieras en **Ajustes → Opciones de privacidad**: si la retirás, dejan de mandarse y lo que estaba esperando en tu dispositivo se borra sin salir de él. Fuera de la UE, el Reino Unido y Suiza el juego no tiene un interruptor para esto; las Opciones de privacidad, donde aparezcan, controlan los anuncios. No dependen del permiso de seguimiento de iOS (App Tracking Transparency) porque no son seguimiento: no se cruzan con datos de otras empresas." },
    ]},
    { id: "compras", title: "Compras dentro de la app", blocks: [
      { p: "Las procesa **Apple**. Nosotros no vemos ni guardamos datos de tu tarjeta ni de tu método de pago — sólo recibimos de Apple la confirmación de qué compraste, para entregártelo. Qué producto compraste (sin el precio) también va en las estadísticas de uso." },
    ]},
    { id: "progreso", title: "Tu progreso de juego", blocks: [
      { p: "Se guarda **en tu dispositivo**. Si en alguna versión futura activamos el guardado en iCloud, iría a **tu** base de datos privada de iCloud, a la que no tenemos acceso, y lo diríamos acá antes de hacerlo." },
    ]},
    { id: "menores", title: "Menores", blocks: [
      { p: "El juego tiene clasificación 12+ y no está dirigido a menores de 13 años. No recolectamos a sabiendas datos de menores de esa edad." },
    ]},
    { id: "contacto", title: "Contacto", blocks: [
      { p: "Cualquier consulta sobre privacidad: {SUPPORT_EMAIL}" },
    ]},
  ],
};

export const privacyEN: LegalDoc = {
  title: "Privacy Policy — HoboEvolution",
  updated: "October 2026",
  summary: "Honest summary: we have no accounts and ask for no personal data. The ads process some data, the leaderboard stores an anonymous identifier and the name you choose, and the game sends us usage statistics, under a random identifier of their own, to see how it is played and what the ads earn. Below is exactly which and how you control them.",
  sections: [
    { id: "dont", title: "What we do NOT do", blocks: [
      { list: [
        "**No accounts, no sign-up.** We never ask for your email, your name or any personal data to play.",
        "**No third-party analytics.** Your progress stays on your device. We have a single server of our own, hosted on Supabase: it holds the leaderboard and the usage statistics, both explained below.",
        "**We never sell data** to anyone.",
      ]},
    ]},
    { id: "ads", title: "Advertising", blocks: [
      { p: "HoboEvolution **shows ads through Google AdMob**. There are two kinds:" },
      { list: [
        "**Opt-in rewarded videos** you choose to watch for in-game prizes (double your earnings, open another chest, activate a boost). They never play on their own.",
        "**Ads that appear on their own**: full-screen ads between parts of the game, an ad break you can always decline, and one when you return to the app. The **\"No Ads\"** purchase removes them; rewarded videos stay, since they are optional and pay out.",
      ]},
    ]},
    { id: "who-processes", title: "Who processes your data for ads", blocks: [
      { p: "To serve them, **Google AdMob processes device data** — including your advertising identifier (IDFA), IP address and technical/usage data — under its own privacy policy: https://policies.google.com/privacy" },
      { p: "AdMob also has another ad network bid for each ad (mediation). In this version there is only one, and it processes the same kind of device data — advertising identifier, IP address and technical/usage data — under its own policy:" },
      { list: [
        "**Unity Ads** (Unity Technologies): https://unity.com/legal/privacy-policy",
      ]},
      { p: "We work with no other networks, and none of these companies receives your leaderboard name, install identifier or run times from us." },
    ]},
    { id: "ads-config", title: "Ads configuration", blocks: [
      { p: "The app downloads an ads configuration file from our website (/config/ads.json). It **sends none of your data**, but like any web request the site's host (Vercel) sees the IP address it comes from." },
    ]},
    { id: "control", title: "You control whether ads are personalized", blocks: [
      { p: "On first launch, iOS shows you the **App Tracking Transparency** prompt asking whether you allow tracking." },
      { list: [
        "**If you accept**, ads are personalized using your advertising identifier.",
        "**If you decline**, **you still get ads, just non-personalized**. You lose nothing in the game.",
      ]},
      { p: "You can change this any time in **Settings → Privacy & Security → Tracking**." },
      { p: "In the EU, the UK and Switzerland we also show Google's consent form (UMP) before serving any ad, and you can review your choice in **Settings → Privacy options**." },
    ]},
    { id: "leaderboard", title: "The reach-God leaderboard", blocks: [
      { p: "If you reach God you may **enter the leaderboard** with a name. It is optional: if you don't, your run is not published. For it to work we store on our server:" },
      { list: [
        "**A random anonymous install identifier**, not tied to your identity, your Apple account or your advertising identifier. It tells us which runs are yours and limits abuse.",
        "**The name you chose** and your **run times**, which other players can see.",
      ]},
      { p: "We don't use them to track you, don't link them to your identity and don't share them with advertisers. Names go through rules, a word list and an automated AI check before being shown; don't put personal data in your name." },
    ]},
    { id: "ai-check", title: "Who does the AI check", blocks: [
      { p: "The automated check is done by **Anthropic** with its **Claude** model, at our server's request. We send **only the name you chose** (the text, up to 15 characters): never your install identifier, run times, advertising identifier or any device data. Anthropic processes it under its own privacy policy: https://www.anthropic.com/legal/privacy. Any player can **report** a name, and a reported name is hidden. If you block a name (\"Hide this name\"), that choice is stored only on your device and never leaves it. To have your name or runs removed from the leaderboard, email us at the contact below with your name and we will do it." },
      { p: "The leaderboard data lives on our server, hosted on **Supabase**, which stores it on our behalf, and it leaves your device only if you enter the leaderboard. The only other thing that reaches us is the usage statistics in the next section." },
    ]},
    { id: "usage-stats", title: "Usage statistics", blocks: [
      { p: "To understand how the game is played and what each ad earns, the game sends our server short messages about what happens in play. Each one carries:" },
      { list: [
        "**What happened:** a play session started or ended (how long it lasted and how many sessions you've played); an ad was shown (its format, the place in the game, the network that served it and what it paid for that view, in its currency); what happened to a rewarded-video offer (shown, tapped, rewarded, no video available, or passed); which product you bought (only which one: never the price or payment details); and how many times you reincarnated.",
        "**Technical data:** the app and iOS version, your iPhone or iPad model (e.g. \"iPhone16,2\") and your App Store country.",
        "**A random identifier of their own.** It is not the leaderboard's and is not shared with it, and it is not tied to your name, your Apple account or your advertising identifier. It stays the same if you reinstall on the same device and never moves to your other devices (not through iCloud, and not by restoring a backup to another phone). Plus a new session identifier each time you open the game, and your phone's time.",
      ]},
      { p: "What they do **not** carry: your advertising identifier (IDFA), the iOS vendor identifier (IDFV), your leaderboard name, anything you typed, or your Apple account or payment data. We don't combine them with your leaderboard name or anything that identifies you, don't use them to show you ads or to track you across other apps or websites, don't share them with ad networks and never sell them." },
      { p: "Like any web request, the server's host (Supabase) sees the IP address each request comes from — leaderboard or statistics — and keeps it in its technical logs for a few days. We don't store it with the statistics, don't use it to identify you and don't combine it with them." },
      { p: "The statistics are stored on Supabase on our behalf and **deleted automatically after 400 days** (a year and a month, to compare each month with the same one a year earlier). While you are offline they wait on your device — at most the latest 1,000, for up to a month — until there is a connection." },
      { p: "**How to turn them off.** In the EU, the UK and Switzerland they are sent only if, in Google's consent form, you agreed to storing information on your device and to using it for measurement, statistics and improving the service. You can change your choice any time in **Settings → Privacy options**: withdraw it and they stop, and whatever was waiting on your device is deleted without leaving it. Outside the EU, the UK and Switzerland the game has no switch for this; Privacy options, where they appear, control the ads. They don't depend on iOS App Tracking Transparency because they are not tracking: they are never combined with other companies' data." },
    ]},
    { id: "purchases", title: "In-app purchases", blocks: [
      { p: "Handled by **Apple**. We never see or store your card or payment details — Apple only tells us what you bought, so we can deliver it. Which product you bought (without the price) is also part of the usage statistics." },
    ]},
    { id: "progress", title: "Your game progress", blocks: [
      { p: "It stays **on your device**. If a future version enables iCloud saving, it would go to **your** private iCloud database, which we cannot access, and we would say so here before doing it." },
    ]},
    { id: "minors", title: "Minors", blocks: [
      { p: "The game is rated 12+ and is not directed at children under 13. We do not knowingly collect data from children under that age." },
    ]},
    { id: "contact", title: "Contact", blocks: [
      { p: "Any privacy question: {SUPPORT_EMAIL}" },
    ]},
  ],
};

export const faqES: { q: string; a: string }[] = [
  { q: "¿Perdí mi progreso, cómo lo recupero?", a: "Si tenías iCloud activo, reinstalá la app con la misma cuenta de iCloud: el progreso vuelve solo. Las compras se recuperan desde Tienda → \"Restaurar compras\"." },
  { q: "Compré \"Sin anuncios\" / una skin y no aparece.", a: "Tienda → \"Restaurar compras\" con el mismo Apple ID de la compra." },
  { q: "El juego va lento o se traba.", a: "Cerrá y reabrí la app. Si persiste, reiniciá el dispositivo. Reportanos el modelo de iPhone y versión de iOS." },
  { q: "¿Cómo funciona el progreso offline?", a: "Tus personajes con ingreso pasivo desbloqueado siguen generando hasta 8 horas mientras la app está cerrada (a eficiencia reducida — mejorable con mejoras y la Milanesa)." },
  { q: "Encontré un bug / tengo una idea.", a: "Escribinos: cuanto más detalle (qué hiciste, qué esperabas, qué pasó), mejor." },
];

// EN FAQ: faithful English rendering of the same items (the source file's EN section is a 3-line summary; flagged in the README).
export const faqEN: { q: string; a: string }[] = [
  { q: "I lost my progress — how do I get it back?", a: "If iCloud was on, reinstall the app with the same iCloud account: progress comes back on its own. Purchases are recovered from Store → \"Restore Purchases\"." },
  { q: "I bought \"No ads\" / a skin and it's missing.", a: "Store → \"Restore Purchases\" with the same Apple ID used for the purchase." },
  { q: "The game runs slow or freezes.", a: "Close and reopen the app. If it persists, restart the device. Report your iPhone model and iOS version to us." },
  { q: "How does offline progress work?", a: "Your characters with passive income unlocked keep generating for up to 8 hours while the app is closed (at reduced efficiency — improvable with upgrades and the Milanesa)." },
  { q: "I found a bug / I have an idea.", a: "Write to us: the more detail (what you did, what you expected, what happened), the better." },
];
