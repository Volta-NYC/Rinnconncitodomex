import type { Metadata } from "next"
import { ContactPage } from "@/components/pages"
export const metadata: Metadata = { title: "Contacto y Consultas de Catering", description: "Contacta a Rinconcito Domex en 505 Dekalb Avenue, Brooklyn, o llama al (347) 365-2786.", alternates: { canonical: "/es/contact", languages: { "en-US": "/contact", "es-US": "/es/contact" } } }
export default function Page() { return <ContactPage locale="es" /> }
