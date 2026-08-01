import type { Metadata } from "next"
import { CateringPage } from "@/components/pages"

export const metadata: Metadata = {
  title: "Catering Services in Brooklyn & New York",
  description: "Personalized Dominican and Mexican catering for celebrations, schools, agencies, and companies across New York.",
  alternates: { canonical: "/catering", languages: { "en-US": "/catering", "es-US": "/es/catering" } },
}

export default function Page() { return <CateringPage locale="en" /> }
