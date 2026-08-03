import type { MetadataRoute } from "next"
import { business } from "@/content/business"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — Catering`,
    short_name: business.name,
    description:
      "Catering dominicano y mexicano en Brooklyn. Dominican and Mexican catering in Brooklyn.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5ede0",
    theme_color: "#c0361d",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  }
}
