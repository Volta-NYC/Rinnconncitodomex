import type { Metadata } from "next"
import { ContactPage } from "@/components/pages"

export const metadata: Metadata = { title: "Contact & Catering Inquiries", description: "Contact Rinconcito Domex at 505 Dekalb Avenue in Brooklyn or call (347) 365-2786 for catering inquiries.", alternates: { canonical: "/contact", languages: { "en-US": "/contact", "es-US": "/es/contact" } } }
export default function Page() { return <ContactPage locale="en" /> }
