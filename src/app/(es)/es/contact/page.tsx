import type { Metadata } from "next"
import { ContactPage } from "@/components/pages/contact"
import { localBusinessJsonLd } from "@/content/business"
import { getCopy } from "@/content/copy"
import { pageMetadata } from "@/lib/metadata"

const locale = "es" as const
const copy = getCopy(locale)

export const metadata: Metadata = pageMetadata({
  locale,
  path: "/contact",
  title: copy.nav.contact,
  description: copy.contact.body,
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
      <ContactPage locale={locale} />
    </>
  )
}
