import type { Metadata } from "next"
import { CateringPage } from "@/components/pages"

export const metadata: Metadata = { title: "Servicios de Catering en Brooklyn y Nueva York", description: "Catering dominicano y mexicano personalizado para celebraciones, escuelas, agencias y empresas en Nueva York.", alternates: { canonical: "/es/catering", languages: { "en-US": "/catering", "es-US": "/es/catering" } } }
export default function Page() { return <CateringPage locale="es" /> }
