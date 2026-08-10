import Image from "next/image"
import Link from "next/link"
import {
  audienceSlugs,
  route,
  type AudienceSlug,
  type Locale,
} from "@/content/business"
import { getCopy } from "@/content/copy"
import { photoAlt, rinconcitoPhotos } from "@/content/images"
import { Reveal } from "@/components/reveal"
import { PapelEdge, QuoteBand, RailMark } from "@/components/sections"
import { Arrow, SiteShell } from "@/components/site-chrome"

/**
 * One page per room we cater. The "what we'll ask about" list is the useful
 * part: it tells a buyer exactly what to have ready before calling, which is
 * the only conversion step this site has (there is no booking system).
 */
export function AudiencePage({
  locale,
  slug,
}: {
  locale: Locale
  slug: AudienceSlug
}) {
  const copy = getCopy(locale)
  const audience = copy.audiences[slug]
  const others = audienceSlugs.filter((item) => item !== slug)
  const photoOffset = audienceSlugs.indexOf(slug) * 3
  const photos = [
    rinconcitoPhotos[5 + photoOffset],
    rinconcitoPhotos[18 + photoOffset],
    rinconcitoPhotos[34 + photoOffset],
  ]

  return (
    <SiteShell locale={locale}>
      <section className="ground-indigo section-tight">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-quiet">{audience.label}</span>
            <h1 className="display-lg" style={{ marginBlock: "1.1rem 1.4rem" }}>
              {audience.title}
            </h1>
            <p className="lede">{audience.body}</p>
            <div className="hero-actions">
              <Link className="button button-maize" href={route(locale, "/contact")}>
                {copy.actions.requestQuote}
                <Arrow />
              </Link>
            </div>
          </div>

          <div className="summary-card">
            <span className="micro">{copy.catering.stepsTitle}</span>
            <ul>
              {audience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PapelEdge color="var(--color-indigo)" flip />
      <RailMark />

      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">{copy.contact.readyTitle}</span>
              <h2 className="display-md">{audience.prompt}</h2>
            </div>
          </Reveal>
          <Reveal as="ol" className="detail-list" delay={0.06}>
            {audience.details.map((detail) => (
              <li key={detail}>
                <span>{detail}</span>
              </li>
            ))}
          </Reveal>
          <Reveal className="audience-photo-strip" delay={0.1}>
            {photos.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photoAlt.food[locale]}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 62rem) 92vw, 28vw"
              />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ground-deep section-tight">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">{copy.catering.audiencesTitle}</span>
            </div>
          </Reveal>
          <div className="audience-grid">
            {others.map((other) => (
              <Link
                key={other}
                className="audience-card"
                href={route(locale, `/catering/${other}`)}
              >
                <h3>{copy.audiences[other].label}</h3>
                <p>{copy.audiences[other].body}</p>
                <span className="audience-cta">
                  {copy.actions.explore}
                  <Arrow size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand locale={locale} />
    </SiteShell>
  )
}
