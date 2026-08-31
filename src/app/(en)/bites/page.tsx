import type { Metadata } from "next"
import { BitesPage } from "@/components/pages/bites"
import { getCopy } from "@/content/copy"

export const metadata: Metadata = {
  title: `Rinconcito Bites | ${getCopy("en").meta.titleSuffix}`,
  description: "Rinconcito Bites: Dominican and Mexican flavors with cocktails, music, and social energy.",
}

export default function Page() {
  return <BitesPage locale="en" />
}
