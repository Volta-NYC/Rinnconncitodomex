/**
 * Every fact in this file comes from the client's own site
 * (`raw messy data/rinconcitodomex.com_.md`) and the approved website update brief.
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
  menuHref: "https://www.rinconcitodomextogo.com/",
  cateringHref: "https://www.discocater.com/restaurants/rinconcitodomex",
  social: {
    instagram: "https://www.instagram.com/rinconcitodomex",
    tiktok: "https://www.tiktok.com/@rinconcitodomex",
    facebook: "https://www.facebook.com/RinconcitoDomex",
    youtube: "https://www.youtube.com/@RinconcitoDomex",
  },
  /** Restaurant hours — catering is available 24/7 for scheduled orders and events. */
  hours: {
    restaurant: { from: "07:00", to: "18:00" },
    restaurantDays: [1, 2, 3, 4, 5, 6],
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

/**
 * Schema.org data, generated from the facts above so it can never drift from the
 * visible restaurant hours. The business serves two distinct roles: restaurant
 * and caterer.
 */
export function localBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": ["Restaurant", "Caterer"].map((type) => ({
      "@type": type,
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
            "Saturday",
          ],
          opens: business.hours.restaurant.from,
          closes: business.hours.restaurant.to,
        },
      ],
    })),
  }
}
