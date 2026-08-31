import type { Metadata } from "next"
import { BitesPage } from "@/components/pages/bites"
import { getCopy } from "@/content/copy"

export const metadata: Metadata = {
  title: `Rinconcito Bites | ${getCopy("es").meta.titleSuffix}`,
  description: "Rinconcito Bites: sabores dominicanos y mexicanos con cócteles, música y energía social.",
}

export default function Page() {
  return <BitesPage locale="es" />
}
