import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SectorPage } from "@/components/pages"
import type { Sector } from "@/lib/site"

const sectors: Sector[] = ["schools", "government", "corporate"]
const titles = { schools: "Catering Escolar en Nueva York", government: "Catering Gubernamental MWBE en Nueva York", corporate: "Catering Corporativo en Brooklyn y NYC" }
export function generateStaticParams() { return sectors.map((sector) => ({ sector })) }
export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> { const { sector } = await params; if (!sectors.includes(sector as Sector)) return {}; return { title: titles[sector as Sector], alternates: { canonical: `/es/catering/${sector}`, languages: { "en-US": `/catering/${sector}`, "es-US": `/es/catering/${sector}` } } } }
export default async function Page({ params }: { params: Promise<{ sector: string }> }) { const { sector } = await params; if (!sectors.includes(sector as Sector)) notFound(); return <SectorPage locale="es" sector={sector as Sector} /> }
