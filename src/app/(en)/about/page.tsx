import type { Metadata } from "next"
import { AboutPage } from "@/components/pages/about"
import { localBusinessJsonLd } from "@/content/business"
import { getCopy } from "@/content/copy"
import { pageMetadata } from "@/lib/metadata"

const locale = "en" as const
const copy = getCopy(locale)

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/about",
  title: copy.nav.about,
  description: copy.about.body,
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
      <AboutPage locale={locale} />
    </>
  )
}
