import type { Metadata } from "next"
import { CateringPage } from "@/components/pages/catering"
import { localBusinessJsonLd } from "@/content/business"
import { getCopy } from "@/content/copy"
import { pageMetadata } from "@/lib/metadata"

const locale = "es" as const
const copy = getCopy(locale)

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/catering",
  title: copy.nav.catering,
  description: copy.catering.body,
})

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd(locale)),
        }}
      />
      <CateringPage locale={locale} />
    </>
  )
}
