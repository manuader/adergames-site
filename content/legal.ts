// Legal & support copy — from content files provided by the studio. NOT rewritten.
// Two mandated substitutions are applied via tokens at render time:
// {LEGAL_NAME} -> site.legalName (the file said "una persona física, no una empresa")
// {SUPPORT_EMAIL} -> site.supportEmail (the file said adermanu@gmail.com)
export type Block = { p?: string; list?: string[] };
export type Section = { id: string; title: string; blocks: Block[] };
export type LegalDoc = { title: string; updated: string; summary: string; sections: Section[] };

export const privacyES: LegalDoc = {
  title: "Política de Privacidad — FisuEvolution",
  updated: "septiembre de 2026",
  summary: "Resumen honesto: nosotros no recolectamos tus datos. La publicidad sí procesa algunos, y abajo está exactamente cuáles y cómo los controlás.",
  sections: [
    { id: "no-hacemos", title: "Lo que NO hacemos", blocks: [
      { list: [
        "**No tenemos cuentas ni registro.** No pedimos tu email, tu nombre ni ningún dato personal para jugar.",
        "**No tenemos servidores propios ni analytics de terceros.** Tu progreso se guarda en tu dispositivo.",
        "**No vendemos datos** a nadie.",
      ]},
    ]},
    { id: "publicidad", title: "Publicidad", blocks: [
      { p: "FisuEvolution **muestra publicidad de Google AdMob**. Hay dos tipos:" },
      { list: [
        "**Videos con recompensa**, que mirás sólo si querés: los ofrecemos a cambio de premios dentro del juego (duplicar tus ganancias, abrir otro cofre, activar un boost). Nunca se reproducen solos.",
        "**Anuncios de pantalla completa** entre partes del juego, espaciados y nunca en medio de una acción. La compra **\"Sin anuncios\"** los elimina; los videos con recompensa siguen disponibles, porque son opcionales y entregan premios.",
      ]},
      { p: "Para mostrarlos, **Google AdMob procesa datos de tu dispositivo** —incluido tu identificador de publicidad (IDFA), la dirección IP y datos técnicos y de uso— según su propia política de privacidad: https://policies.google.com/privacy" },
    ]},
    { id: "control", title: "Vos controlás si es personalizada", blocks: [
      { p: "La primera vez que abrís el juego, iOS te muestra el diálogo de **App Tracking Transparency** preguntando si permitís el seguimiento." },
      { list: [
        "**Si aceptás**, los anuncios se personalizan usando tu identificador de publicidad.",
        "**Si rechazás**, **los anuncios se siguen viendo igual, sólo que sin personalizar**. No perdés nada del juego.",
      ]},
      { p: "Podés cambiar esta decisión cuando quieras en **Ajustes → Privacidad y seguridad → Rastreo**." },
      { p: "En la Unión Europea, el Reino Unido y Suiza, además te mostramos el formulario de consentimiento de Google (UMP) antes de servir cualquier anuncio, y podés revisar tu elección desde los ajustes del juego." },
    ]},
    { id: "compras", title: "Compras dentro de la app", blocks: [
      { p: "Las procesa **Apple**. Nosotros no vemos ni guardamos datos de tu tarjeta ni de tu método de pago — sólo recibimos de Apple la confirmación de qué compraste, para entregártelo." },
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
  updated: "September 2026",
  summary: "Honest summary: we don't collect your data. The ads do process some, and below is exactly which and how you control them.",
  sections: [
    { id: "dont", title: "What we do NOT do", blocks: [
      { list: [
        "**No accounts, no sign-up.** We never ask for your email, your name or any personal data to play.",
        "**No servers of our own and no third-party analytics.** Your progress stays on your device.",
        "**We never sell data** to anyone.",
      ]},
    ]},
    { id: "ads", title: "Advertising", blocks: [
      { p: "HoboEvolution **shows Google AdMob ads**. There are two kinds:" },
      { list: [
        "**Opt-in rewarded videos** you choose to watch for in-game prizes (double your earnings, open another chest, activate a boost). They never play on their own.",
        "**Full-screen ads** between parts of the game, spaced out and never in the middle of an action. The **\"No Ads\"** purchase removes them; rewarded videos stay, since they are optional and pay out.",
      ]},
      { p: "To serve them, **Google AdMob processes device data** — including your advertising identifier (IDFA), IP address and technical/usage data — under its own privacy policy: https://policies.google.com/privacy" },
    ]},
    { id: "control", title: "You control whether ads are personalized", blocks: [
      { p: "On first launch, iOS shows you the **App Tracking Transparency** prompt asking whether you allow tracking." },
      { list: [
        "**If you accept**, ads are personalized using your advertising identifier.",
        "**If you decline**, **you still get ads, just non-personalized**. You lose nothing in the game.",
      ]},
      { p: "You can change this any time in **Settings → Privacy & Security → Tracking**." },
      { p: "In the EU, the UK and Switzerland we also show Google's consent form (UMP) before serving any ad, and you can review your choice from the game's settings." },
    ]},
    { id: "purchases", title: "In-app purchases", blocks: [
      { p: "Handled by **Apple**. We never see or store your card or payment details — Apple only tells us what you bought, so we can deliver it." },
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
