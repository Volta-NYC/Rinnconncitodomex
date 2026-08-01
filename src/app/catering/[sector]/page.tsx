import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SectorPage } from "@/components/pages"
import type { Sector } from "@/lib/site"

const sectors: Sector[] = ["schools", "government", "corporate"]
const titles = { schools: "School Catering in New York", government: "MWBE Government Catering in New York", corporate: "Corporate Catering in Brooklyn & NYC" }
const descriptions = { schools: "Start a personalized school catering conversation with Rinconcito Domex in Brooklyn.", government: "A Brooklyn-based MWBE-certified business welcoming government and public-sector catering inquiries.", corporate: "Dominican and Mexican catering for company meetings, celebrations, and corporate gatherings." }

export function generateStaticParams() { return sectors.map((sector) => ({ sector })) }

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> {
  const { sector } = await params
  if (!sectors.includes(sector as Sector)) return {}
  return { title: titles[sector as Sector], description: descriptions[sector as Sector], alternates: { canonical: `/catering/${sector}`, languages: { "en-US": `/catering/${sector}`, "es-US": `/es/catering/${sector}` } } }
}

export default async function Page({ params }: { params: Promise<{ sector: string }> }) {
  const { sector } = await params
  if (!sectors.includes(sector as Sector)) notFound()
  return <SectorPage locale="en" sector={sector as Sector} />
}
