import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rinconcito Domex",
    short_name: "Domex",
    description: "Dominican and Mexican catering in Brooklyn, New York.",
    start_url: "/",
    display: "standalone",
    // Must track globals.css --hueso / --noche. These were still the old
    // forest-green theme, which tints the mobile browser chrome.
    background_color: "#f5efe3",
    theme_color: "#0a0f2c",
  }
}
