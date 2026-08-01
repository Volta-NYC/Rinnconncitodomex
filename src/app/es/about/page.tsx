import type { Metadata } from "next"
import { AboutPage } from "@/components/pages"
export const metadata: Metadata = { title: "Nuestra Historia", description: "Conoce las raíces dominicanas y mexicanas de Rinconcito Domex, una empresa de catering certificada MWBE en Brooklyn.", alternates: { canonical: "/es/about", languages: { "en-US": "/about", "es-US": "/es/about" } } }
export default function Page() { return <AboutPage locale="es" /> }
