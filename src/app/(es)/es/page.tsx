import type { Metadata } from "next"
import { HomePage } from "@/components/pages/home"
import { localBusinessJsonLd } from "@/content/business"
import { getCopy } from "@/content/copy"
import { pageMetadata } from "@/lib/metadata"

const locale = "es" as const
const copy = getCopy(locale)

export const metadata: Metadata = pageMetadata({
  locale,
  path: "",
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
      <HomePage locale={locale} />
    </>
  )
}
