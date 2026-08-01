import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rinconcitodomex.com"
  const paths = ["", "/catering", "/catering/schools", "/catering/government", "/catering/corporate", "/about", "/contact"]
  return paths.flatMap((path) => [
    { url: `${base}${path || "/"}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 },
    { url: `${base}/es${path || ""}`, changeFrequency: "monthly" as const, priority: path === "" ? .9 : .7 },
  ])
}
