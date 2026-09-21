
export const site = {
  studioName: "Ader Games",
  // Se publica como persona física, no como empresa: es lo que dicen los
  // términos ("El Juego lo desarrolla y publica una persona física") y es el
  // enrollment Individual con el que sale la app. Cuando exista ADERGAMES
  // S.A.S. inscripta, acá va la razón social.
  legalName: "Manuel Ader",
  // Vacío a propósito: sin CUIT publicado la fila de /about no se muestra.
  // Poner uno inventado sería peor que no tenerlo.
  taxId: "",
  address: "Av. Cabildo 645. C1426 Cdad. Autónoma de Buenos Aires. Argentina",
  // De acá salen canonical, sitemap, robots y el JSON-LD, así que tiene que
  // ser un dominio que RESUELVA. `adergames.io` no está registrado (el
  // registro de .io devuelve "Domain not found"), y apuntar ahí dejaba todas
  // las URLs canónicas muertas.
  domain: "adergames-site.vercel.app",
  // Un mail que existe. Los tres `@adergames.io` anteriores rebotaban: sin el
  // dominio registrado no hay buzón. App Store Review pide contacto vigente
  // en el support URL (guideline 1.5).
  contactEmail: "adermanu@gmail.com",
  supportEmail: "adermanu@gmail.com",
  pressEmail: "adermanu@gmail.com",
  founded: "2026",
  releaseState: "coming_soon" as "coming_soon" | "released",
  appStoreUrl: "", // set when released
};
