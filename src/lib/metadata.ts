import type { Metadata } from "next"
import { business, route, type Locale } from "@/content/business"
import { getCopy, otherLocale } from "@/content/copy"

/**
 * Builds page metadata with the canonical/alternate pair filled in from the
 * locale, so every page advertises its translation correctly without each
 * route restating the whole object.
 */
export function pageMetadata({
  locale,
  path = "",
  title,
  description,
}: {
  locale: Locale
  path?: string
  /** Omit on the home page to use the full brand title. */
  title?: string
  description?: string
}): Metadata {
  const copy = getCopy(locale)
  const other = otherLocale(locale)

  return {
    title: title ? `${title} | ${copy.meta.titleSuffix}` : copy.meta.title,
    description: description ?? copy.meta.description,
    alternates: {
      canonical: route(locale, path),
      languages: {
        en: route("en", path),
        es: route("es", path),
        [other]: route(other, path),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_US" : "en_US",
      siteName: business.name,
      title: title ? `${title} | ${copy.meta.titleSuffix}` : copy.meta.title,
      description: description ?? copy.meta.description,
      url: `${business.siteUrl}${route(locale, path)}`,
      images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${copy.meta.titleSuffix}` : copy.meta.title,
      description: description ?? copy.meta.description,
      images: ["/og.jpg"],
    },
  }
}
