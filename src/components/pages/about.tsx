import Image from "next/image"
import { type Locale } from "@/content/business"
import { getCopy } from "@/content/copy"
import { featuredPhotos, images, photoAlt } from "@/content/images"
import { Reveal } from "@/components/reveal"
import { PapelEdge, QuoteBand, RailMark, Ribbon } from "@/components/sections"
import { SiteShell } from "@/components/site-chrome"

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)

  return (
    <SiteShell locale={locale}>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow">{copy.about.eyebrow}</span>
            <h1 className="display-lg">{copy.about.title}</h1>
            <p className="lede">{copy.about.body}</p>
          </div>
          <figure className="page-figure">
            <Image
              src={images.chef.src}
              alt={images.chef.alt[locale]}
              width={images.chef.width}
              height={images.chef.height}
              sizes="(max-width: 62rem) 92vw, 34vw"
              priority
            />
          </figure>
        </div>
      </section>

      <Ribbon locale={locale} />
      <RailMark />

      <section className="section-tight">
        <div className="shell image-pair">
          <Reveal>
            <Image
              src={featuredPhotos.team.src}
              alt={photoAlt.team[locale]}
              width={featuredPhotos.team.width}
              height={featuredPhotos.team.height}
              sizes="(max-width: 62rem) 92vw, 46vw"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Image
              src={featuredPhotos.classVisit.src}
              alt={photoAlt.visit[locale]}
              width={featuredPhotos.classVisit.width}
              height={featuredPhotos.classVisit.height}
              sizes="(max-width: 62rem) 92vw, 46vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell story">
          <Reveal>
            <span className="eyebrow">{copy.about.storyTitle}</span>
            <h2 className="display-md" style={{ marginTop: "0.9rem" }}>
              {copy.brand.tableLine}
            </h2>
          </Reveal>

          <Reveal className="story-body" delay={0.08}>
            {copy.about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <PapelEdge color="var(--color-cacao)" />

      <section className="ground-dark section">
        <div className="shell">
          <Reveal className="section-head section-head-split">
            <div>
              <span className="eyebrow eyebrow-quiet">{copy.home.pillarsEyebrow}</span>
              <h2 className="display-md">{copy.about.valuesTitle}</h2>
            </div>
          </Reveal>
          <div>
            {copy.home.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} className="chapter" delay={index * 0.07}>
                <span className="chapter-number" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PapelEdge color="var(--color-cacao)" flip />
      <RailMark />

      <section className="section-tight">
        <div className="shell story">
          <Reveal className="mwbe-card">
            <h3>{copy.about.mwbeTitle}</h3>
            <p>{copy.about.mwbeBody}</p>
            <div className="credential-list">
              <span className="micro">{copy.about.credentialsTitle}</span>
              <ul>
                {copy.about.certifications.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
              <span className="micro">{copy.about.membershipsTitle}</span>
              <ul>
                {copy.about.memberships.map((membership) => (
                  <li key={membership}>{membership}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="craft-figures">
              <div className="craft-main">
                <Image
                  src={images.spread.src}
                  alt={images.spread.alt[locale]}
                  width={images.spread.width}
                  height={images.spread.height}
                  sizes="(max-width: 62rem) 92vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <QuoteBand locale={locale} />
    </SiteShell>
  )
}
