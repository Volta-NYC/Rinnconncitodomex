import type { Metadata } from "next"
import { BitesPage } from "@/components/pages/bites"
import { localBusinessJsonLd } from "@/content/business"
import { getCopy } from "@/content/copy"
import { pageMetadata } from "@/lib/metadata"

const locale = "es" as const
const copy = getCopy(locale)

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/bites",
  title: copy.nav.bites,
  description: "Rinconcito Bites: sabores dominicanos y mexicanos con cócteles, música y energía social.",
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
