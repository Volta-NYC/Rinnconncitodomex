/**
 * Every fact in this file comes from the client's own site
 * (`raw messy data/rinconcitodomex.com_.md`). Nothing here is inferred or invented.
 * It is the single source of truth for NAP data, hours, and structured metadata —
 * pages read from here rather than hardcoding a phone number in six places.
 */

export const business = {
  /** The client's site spells it "Rinnconncitodomex"; the About copy uses the
   *  correctly-spaced "Rinconcito Domex", which is what we display. */
  name: "Rinconcito Domex",
  legalNameOnOriginalSite: "Rinnconncitodomex",
  cuisines: ["Dominican", "Mexican"],
  certification: "MWBE",
  phone: {
    display: "(347) 365-2786",
    href: "tel:+13473652786",
  },
  address: {
    street: "505 Dekalb Avenue",
    city: "Brooklyn",
    region: "NY",
    country: "USA",
    full: "505 Dekalb Avenue, Brooklyn, NY",
  },
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=505+Dekalb+Avenue+Brooklyn+NY",
  /** Mon–Fri 09:00–17:00, closed Sat/Sun — verbatim from the client's hours table. */
  hours: {
    open: { from: "09:00", to: "17:00" },
    weekdays: [1, 2, 3, 4, 5],
  },
  siteUrl: "https://rinconcitodomex.com",
} as const

export const locales = ["en", "es"] as const
export type Locale = (typeof locales)[number]

export const audienceSlugs = [
  "schools",
  "agencies",
  "corporate",
  "celebrations",
] as const
export type AudienceSlug = (typeof audienceSlugs)[number]

/** Prefixes a path with the locale segment. `route("es", "/catering")` → `/es/catering` */
export function route(locale: Locale, path = ""): string {
  const base = locale === "es" ? "/es" : ""
  return `${base}${path}` || "/"
}

/** Schema.org Caterer, generated from the facts above so it can never drift from the page. */
export function localBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Caterer",
    name: business.name,
    telephone: business.phone.href.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: "US",
    },
    servesCuisine: business.cuisines,
    areaServed: "New York City",
    url: `${business.siteUrl}${route(locale)}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: business.hours.open.from,
        closes: business.hours.open.to,
      },
    ],
  }
}
