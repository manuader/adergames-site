// Legal & support copy — from content files provided by the studio. NOT rewritten.
// Two mandated substitutions are applied via tokens at render time:
// {LEGAL_NAME} -> site.legalName (the file said "una persona física, no una empresa")
// {SUPPORT_EMAIL} -> site.supportEmail (the file said adermanu@gmail.com)
export type Block = { p?: string; list?: string[] };
export type Section = { id: string; title: string; blocks: Block[] };
export type LegalDoc = { title: string; updated: string; summary: string; sections: Section[] };

export const privacyES: LegalDoc = {
  title: "Política de Privacidad — FisuEvolution",
  updated: "julio 2026",
  summary: "Resumen honesto: no recolectamos tus datos.",
  sections: [
    { id: "datos", title: "Qué datos hay (y dónde viven)", blocks: [
      { list: [
        "**Tu progreso de juego** se guarda en tu dispositivo y, si activás iCloud, en **tu** base de datos privada de iCloud — a la que nosotros no tenemos acceso.",
        "**No hay cuentas, no hay registro**, no pedimos email ni datos personales.",
        "**Game Center** (rankings y logros) es opcional y lo gestiona Apple según su propia política de privacidad.",
        "**Compras**: las procesa Apple (App Store). No vemos ni guardamos datos de pago.",
        "**Anuncios**: si la versión instalada muestra anuncios recompensados, el proveedor de anuncios (Google AdMob) puede procesar identificadores del dispositivo según tu elección en el diálogo de permiso de rastreo de iOS (App Tracking Transparency). Si rechazás el permiso, los anuncios se sirven sin personalizar. Podés eliminar los anuncios con la compra \"Sin anuncios\".",
        "**No vendemos datos** a terceros. No hay analytics de terceros.",
      ]},
    ]},
    { id: "contacto", title: "Contacto", blocks: [
      { p: "Consultas de privacidad: {SUPPORT_EMAIL}" },
    ]},
  ],
};

export const privacyEN: LegalDoc = {
  title: "Privacy Policy — FisuEvolution",
  updated: "July 2026",
  summary: "Honest summary: we don't collect your data.",
  sections: [
    { id: "data", title: "What data exists (and where it lives)", blocks: [
      { p: "Game progress lives on your device and (optionally) in **your** private iCloud database, which we cannot access. No accounts, no sign-up. Game Center is optional and operated by Apple. Purchases are processed by Apple. If the installed version shows rewarded ads, Google AdMob may process device identifiers according to your iOS App Tracking Transparency choice; declining serves non-personalized ads. We never sell data." },
    ]},
    { id: "contact", title: "Contact", blocks: [
      { p: "Privacy questions: {SUPPORT_EMAIL}" },
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
