import type { MetadataRoute } from "next"
import { audienceSlugs, business, locales, route } from "@/content/business"

/** Every page in both languages, generated from the same lists the nav uses. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/catering",
    ...audienceSlugs.map((slug) => `/catering/${slug}`),
    "/about",
    "/contact",
  ]

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${business.siteUrl}${route(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
  )
}
