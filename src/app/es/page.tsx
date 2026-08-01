import type { Metadata } from "next"
import { HomePage } from "@/components/pages"

export const metadata: Metadata = { title: "Catering Dominicano y Mexicano en Brooklyn", description: "Catering dominicano y mexicano personalizado para escuelas, agencias gubernamentales, empresas y celebraciones en Nueva York.", alternates: { canonical: "/es", languages: { "en-US": "/", "es-US": "/es" } } }
export default function Page() { return <HomePage locale="es" /> }
