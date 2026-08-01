import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Rinconcito Domex", short_name: "Domex", description: "Dominican and Mexican catering in Brooklyn, New York.", start_url: "/", display: "standalone", background_color: "#fffdf8", theme_color: "#173f35" }
}
