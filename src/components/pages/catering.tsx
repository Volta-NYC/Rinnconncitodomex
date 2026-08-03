import Image from "next/image"
import Link from "next/link"
import { audienceSlugs, business, route, type Locale } from "@/content/business"
import { getCopy } from "@/content/copy"
import { images } from "@/content/images"
import { Reveal } from "@/components/reveal"
import { PapelEdge, QuoteBand, RailMark, Ribbon } from "@/components/sections"
import { Arrow, SiteShell } from "@/components/site-chrome"

export function CateringPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)

  return (
    <SiteShell locale={locale}>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow">{copy.catering.eyebrow}</span>
            <h1 className="display-lg">{copy.catering.title}</h1>
            <p className="lede">{copy.catering.body}</p>
          </div>
          <figure className="page-figure">
            <Image
              src={images.spread.src}
              alt={images.spread.alt[locale]}
              width={images.spread.width}
              height={images.spread.height}
              sizes="(max-width: 62rem) 92vw, 34vw"
              priority
            />
          </figure>
        </div>
      </section>

      <Ribbon locale={locale} />
      <RailMark />

      {/* The three steps are a genuine sequence, so they carry numbers. */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head section-head-split">
            <div>
              <span className="eyebrow">{copy.home.chaptersEyebrow}</span>
              <h2 className="display-md">{copy.catering.stepsTitle}</h2>
            </div>
            <p className="lede">{copy.catering.stepsBody}</p>
          </Reveal>

          <div className="steps">
            {copy.catering.steps.map((step, index) => (
              <Reveal key={step.title} className="step" delay={index * 0.07}>
                <span className="step-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PapelEdge color="var(--color-cacao)" />

      {/* No menu exists in the source material, and inventing one would
          fabricate the client's product. This module says so plainly and
          turns it into the reason to call. */}
      <section className="ground-dark section">
        <div className="shell menu-note">
          <Reveal>
            <span className="eyebrow eyebrow-quiet">{copy.catering.menuTitle}</span>
            <h2 className="display-md" style={{ marginTop: "0.9rem" }}>
              {copy.catering.menuHeadline}
            </h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>
              {copy.catering.menuBody}
            </p>
          </Reveal>
          <Reveal className="menu-note-card" delay={0.1}>
            <p className="lede">{copy.catering.menuNote}</p>
            <a className="button button-maize" href={business.phone.href}>
              {copy.actions.call} · {business.phone.display}
            </a>
          </Reveal>
        </div>
      </section>

      <PapelEdge color="var(--color-cacao)" flip />
      <RailMark />

      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">{copy.home.audiencesEyebrow}</span>
              <h2 className="display-md">{copy.catering.audiencesTitle}</h2>
            </div>
          </Reveal>

          <Reveal className="audience-grid">
            {audienceSlugs.map((slug) => {
              const audience = copy.audiences[slug]
              return (
                <Link
                  key={slug}
                  className="audience-card"
                  href={route(locale, `/catering/${slug}`)}
                >
                  <h3>{audience.label}</h3>
                  <p>{audience.body}</p>
                  <span className="audience-cta">
                    {copy.actions.explore}
                    <Arrow size={14} />
                  </span>
                </Link>
              )
            })}
          </Reveal>
        </div>
      </section>

      <QuoteBand locale={locale} />
    </SiteShell>
  )
}
