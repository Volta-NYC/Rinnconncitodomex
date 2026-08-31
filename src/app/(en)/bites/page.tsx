import type { Metadata } from "next"
import { BitesPage } from "@/components/pages/bites"
import { localBusinessJsonLd } from "@/content/business"
import { getCopy } from "@/content/copy"
import { pageMetadata } from "@/lib/metadata"

const locale = "en" as const
const copy = getCopy(locale)

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/bites",
  title: copy.nav.bites,
  description: "Rinconcito Bites: Dominican and Mexican flavors with cocktails, music, and social energy.",
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(locale)) }}
      />
      <BitesPage locale={locale} />
    </>
  )
}
