import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AudiencePage } from "@/components/pages/audience"
import { audienceSlugs, type AudienceSlug } from "@/content/business"
import { getCopy } from "@/content/copy"
import { pageMetadata } from "@/lib/metadata"

const locale = "es" as const

export function generateStaticParams() {
  return audienceSlugs.map((audience) => ({ audience }))
}

function parse(value: string): AudienceSlug | null {
  return (audienceSlugs as readonly string[]).includes(value)
    ? (value as AudienceSlug)
    : null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>
}): Promise<Metadata> {
  const { audience } = await params
  const slug = parse(audience)
  if (!slug) return {}
  const copy = getCopy(locale).audiences[slug]
  return pageMetadata({
    locale,
    path: `/catering/${slug}`,
    title: copy.label,
    description: copy.body,
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ audience: string }>
}) {
  const { audience } = await params
  const slug = parse(audience)
  if (!slug) notFound()
  return <AudiencePage locale={locale} slug={slug} />
}
