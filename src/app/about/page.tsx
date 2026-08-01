import type { Metadata } from "next"
import { AboutPage } from "@/components/pages"

export const metadata: Metadata = { title: "Our Story", description: "Discover the Dominican and Mexican roots of Rinconcito Domex, a Brooklyn-based MWBE-certified catering business.", alternates: { canonical: "/about", languages: { "en-US": "/about", "es-US": "/es/about" } } }
export default function Page() { return <AboutPage locale="en" /> }
