import Image from "next/image"
import Link from "next/link"
import { audienceSlugs, business, route, type Locale } from "@/content/business"
import { getCopy } from "@/content/copy"
import { featuredPhotos, images, photoAlt, rinconcitoPhotos } from "@/content/images"
import { InfinitePhotoGallery } from "@/components/photo-gallery"
import { Reveal } from "@/components/reveal"
import { PapelEdge, QuoteBand, RailMark, Ribbon } from "@/components/sections"
import { Arrow, SiteShell } from "@/components/site-chrome"

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const certificationMarks = [
    {
      title: locale === "es" ? "Certificación MWBE del Estado de NY y NYC" : "NYS & NYC MWBE Certified",
      src: "/brand/certifications/mwbe.png",
      width: 240,
      height: 240,
    },
    {
      title: locale === "es" ? "Proveedor de NYC DOE" : "NYC DOE Vendor",
      src: "/brand/certifications/nycps.png",
      width: 412,
      height: 76,
    },
    {
      title:
        locale === "es"
          ? "Proveedor de Port Authority of New York & New Jersey"
          : "Port Authority of New York & New Jersey Vendor",
      src: "/brand/certifications/panynj.svg",
      width: 200,
      height: 96,
    },
  ]
  const socialLinks = [
    { label: "Instagram", handle: "@rinconcitodomex", href: business.social.instagram },
    { label: "TikTok", handle: "@rinconcitodomex", href: business.social.tiktok },
    { label: "Facebook", handle: "Rinconcito Domex", href: business.social.facebook },
    { label: "YouTube", handle: "RinconcitoDomex", href: business.social.youtube },
  ]

  return (
    <SiteShell locale={locale}>
      {/* Hero — the thesis: the two cuisines named in one headline, over the
          one photograph that shows service actually happening. */}
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <span className="eyebrow">{copy.home.eyebrow}</span>
            <h1 className="display-xl">
              {copy.home.titleLead}{" "}
              <span className="accent-word">{copy.home.titleAccent}</span>
            </h1>
            <p className="lede">{copy.home.intro}</p>
            <div className="hero-actions">
              <a className="button" href={business.menuHref} target="_blank" rel="noreferrer">
                {copy.actions.orderOnline}
                <Arrow />
              </a>
              <Link className="button button-outline" href={route(locale, "/contact")}>
                {copy.actions.requestQuote}
                <Arrow />
              </Link>
            </div>
          </div>

          <figure className="hero-figure">
            <Image
              src={images.hero.src}
              alt={images.hero.alt[locale]}
              width={images.hero.width}
              height={images.hero.height}
              sizes="(max-width: 64rem) 92vw, 46vw"
              priority
            />
            <figcaption className="hero-stamp">
              <strong>{copy.brand.mwbe}</strong>
              <span>{copy.brand.location}</span>
            </figcaption>
          </figure>
        </div>

        <div className="shell hero-proof">
          <span>{copy.home.proof}</span>
          <i aria-hidden="true" />
          <span>{copy.home.proofDetail}</span>
        </div>

        <div className="shell credential-strip" aria-label={copy.about.credentialsTitle}>
          {certificationMarks.map((credential) => (
            <span key={credential.title}>
              <Image
                src={credential.src}
                alt={`${credential.title} logo`}
                width={credential.width}
                height={credential.height}
              />
              {credential.title}
            </span>
          ))}
        </div>
      </section>

      <section className="section-tight home-video-section">
        <div className="shell home-video">
          <Reveal className="home-video-copy">
            <span className="eyebrow">{copy.home.videoEyebrow}</span>
            <h2 className="display-md">{copy.home.videoTitle}</h2>
            <p className="lede">{copy.home.videoBody}</p>
          </Reveal>
          <Reveal className="brand-video-frame" delay={0.08}>
            <video
              src="/videos/reel-4.mov"
              controls
              muted
              playsInline
              preload="metadata"
              aria-label={copy.home.videoTitle}
            />
          </Reveal>
        </div>
      </section>

      <RailMark />

      <Ribbon locale={locale} />

      <section className="section-tight certification-section">
        <div className="shell certification-block">
          <Reveal>
            <span className="eyebrow">{copy.home.certificationsEyebrow}</span>
            <h2 className="display-md">{copy.home.certificationsTitle}</h2>
          </Reveal>
          <Reveal className="certification-grid" delay={0.08}>
            {certificationMarks.map((credential) => (
              <article key={credential.title} className="certification-card">
                <span>
                  <Image
                    src={credential.src}
                    alt={`${credential.title} logo`}
                    width={credential.width}
                    height={credential.height}
                  />
                </span>
                <p>{credential.title}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell photo-band">
          <Reveal className="photo-band-copy">
            <span className="eyebrow">{locale === "es" ? "En la mesa" : "On the table"}</span>
            <h2 className="display-md">
              {locale === "es"
                ? "Platos reales, colores vivos y una cocina que se siente cerca."
                : "Real plates, bright color, and a kitchen that feels close."}
            </h2>
          </Reveal>
          <Reveal className="photo-band-grid" delay={0.08}>
            <Image
              src={featuredPhotos.table.src}
              alt={photoAlt.food[locale]}
              width={featuredPhotos.table.width}
              height={featuredPhotos.table.height}
              sizes="(max-width: 62rem) 92vw, 44vw"
            />
            <Image
              src={featuredPhotos.lime.src}
              alt={photoAlt.detail[locale]}
              width={featuredPhotos.lime.width}
              height={featuredPhotos.lime.height}
              sizes="(max-width: 62rem) 44vw, 16vw"
            />
            <Image
              src={featuredPhotos.team.src}
              alt={photoAlt.team[locale]}
              width={featuredPhotos.team.width}
              height={featuredPhotos.team.height}
              sizes="(max-width: 62rem) 44vw, 20vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="section bites-preview">
        <div className="shell bites-preview-grid">
          <Reveal>
            <span className="eyebrow">{copy.home.bitesEyebrow}</span>
            <h2 className="display-md">{copy.home.bitesTitle}</h2>
            <p className="lede">{copy.home.bitesBody}</p>
            <Link className="button" href={route(locale, "/bites")}>
              {copy.actions.exploreBites}
              <Arrow />
            </Link>
          </Reveal>
          <Reveal className="bites-vibes" delay={0.08}>
            <div>
              <span>Rinconcito Domex</span>
              <p>{copy.home.domexVibe}</p>
            </div>
            <div>
              <span>Rinconcito Bites</span>
              <p>{copy.home.bitesVibe}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight catering-showcase">
        <div className="shell">
          <Reveal className="section-head section-head-split">
            <div>
              <span className="eyebrow">{copy.nav.catering}</span>
              <h2 className="display-md">
                {locale === "es"
                  ? "Comida y montaje con presencia para reuniones, escuelas y eventos."
                  : "Food and service with presence for meetings, schools, and events."}
              </h2>
            </div>
            <p className="lede">
              {locale === "es"
                ? "La página muestra el color, la escala y la calidez que Rinconcito Domex puede llevar a cada ocasión."
                : "The page now shows the color, scale, and warmth Rinconcito Domex can bring to each occasion."}
            </p>
          </Reveal>
          <Reveal className="catering-mosaic" delay={0.08}>
            {[featuredPhotos.table, featuredPhotos.classVisit, rinconcitoPhotos[28]].map(
              (photo, index) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={
                    index === 0
                      ? photoAlt.food[locale]
                      : index === 1
                        ? photoAlt.visit[locale]
                        : photoAlt.detail[locale]
                  }
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 58rem) 92vw, (max-width: 80rem) 48vw, 62vw"
                />
              ),
            )}
          </Reveal>
        </div>
      </section>

      {/* The three values the client states on their own site, given equal
          weight and their own rules rather than being buried in a paragraph. */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head section-head-split">
            <div>
              <span className="eyebrow">{copy.home.pillarsEyebrow}</span>
              <h2 className="display-lg">{copy.home.pillarsTitle}</h2>
            </div>
          </Reveal>
          <div className="pillars">
            {copy.home.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} className="pillar" delay={index * 0.08}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RailMark />
      <PapelEdge color="var(--color-cacao)" />

      {/* Chapters — a real sequence, so the numbering is information rather
          than decoration. The heading pins while the steps scroll past it. */}
      <section className="ground-dark section">
        <div className="shell chapters">
          <div className="chapters-sticky">
            <span className="eyebrow eyebrow-quiet">{copy.home.chaptersEyebrow}</span>
            <h2 className="display-md" style={{ marginTop: "0.9rem" }}>
              {copy.home.chaptersTitle}
            </h2>
          </div>
          <div>
            {copy.home.chapters.map((chapter, index) => (
              <Reveal key={chapter.number} className="chapter" delay={index * 0.06}>
                <span className="chapter-number" aria-hidden="true">
                  {chapter.number}
                </span>
                <div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PapelEdge color="var(--color-cacao)" flip />
      <RailMark />

      {/* Who we serve — four rooms, each its own page. */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head section-head-split">
            <div>
              <span className="eyebrow">{copy.home.audiencesEyebrow}</span>
              <h2 className="display-lg">{copy.home.audiencesTitle}</h2>
            </div>
            <p className="lede">{copy.home.audiencesBody}</p>
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

      <PapelEdge color="var(--color-indigo)" />

      {/* In the kitchen — the fusion claim, with the photography carrying it. */}
      <section className="ground-indigo section">
        <div className="shell craft">
          <Reveal className="craft-figures">
            <div className="craft-main">
              <Image
                src={images.kitchen.src}
                alt={images.kitchen.alt[locale]}
                width={images.kitchen.width}
                height={images.kitchen.height}
                sizes="(max-width: 64rem) 92vw, 46vw"
              />
            </div>
            <div className="craft-inset">
              <Image
                src={images.peppers.src}
                alt={images.peppers.alt[locale]}
                width={images.peppers.width}
                height={images.peppers.height}
                sizes="15rem"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow eyebrow-quiet">{copy.home.craftEyebrow}</span>
            <h2 className="display-md" style={{ marginTop: "0.9rem" }}>
              {copy.home.craftTitle}
            </h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>
              {copy.home.craftBody}
            </p>
            <ul className="craft-points">
              {copy.home.craftPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="button button-maize" href={route(locale, "/about")}>
              {copy.actions.ourStory}
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <PapelEdge color="var(--color-indigo)" flip />

      <section className="section founder-section">
        <div className="shell founder-grid">
          <Reveal className="founder-photo">
            <Image
              src={rinconcitoPhotos[0].src}
              alt={locale === "es" ? "Aidmary Ruiz, fundadora de Rinconcito Domex" : "Aidmary Ruiz, founder of Rinconcito Domex"}
              width={rinconcitoPhotos[0].width}
              height={rinconcitoPhotos[0].height}
              sizes="(max-width: 62rem) 92vw, 30vw"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <span className="eyebrow">{copy.home.founderEyebrow}</span>
            <h2 className="display-md">{copy.home.founderTitle}</h2>
            <p className="lede">{copy.home.founderBody}</p>
            <Link className="text-link" href={route(locale, "/about")}>
              {copy.actions.ourStory}
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section brand-workshops" id="workshops">
        <div className="shell workshops-grid">
          <Reveal className="workshops-copy">
            <span className="eyebrow">{copy.home.workshopsEyebrow}</span>
            <h2 className="display-md">{copy.home.workshopsTitle}</h2>
            <p className="lede">{copy.home.workshopsBody}</p>
            <ul className="craft-points">
              {copy.home.workshopsPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="button" href={route(locale, "/contact")}>
              {copy.actions.requestQuote}
              <Arrow />
            </Link>
          </Reveal>
          <Reveal className="workshops-media" delay={0.08}>
            <Image
              src={featuredPhotos.classVisit.src}
              alt={photoAlt.visit[locale]}
              width={featuredPhotos.classVisit.width}
              height={featuredPhotos.classVisit.height}
              sizes="(max-width: 62rem) 92vw, 40vw"
            />
            <div className="workshop-video-embed">
              <iframe
                src="https://drive.google.com/file/d/1dZyI-aBVeDqJd9D3nAQxupmvuxFC3rmc/preview"
                title={
                  locale === "es"
                    ? "Video de los talleres culinarios de Rinconcito Domex"
                    : "Rinconcito Domex culinary workshops video"
                }
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <Image
              className="workshop-illustration"
              src={featuredPhotos.team.src}
              alt={photoAlt.team[locale]}
              width={featuredPhotos.team.width}
              height={featuredPhotos.team.height}
              sizes="(max-width: 62rem) 44vw, 18vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-tight social-section" id="social">
        <div className="shell social-grid">
          <Reveal>
            <span className="eyebrow">{copy.home.socialEyebrow}</span>
            <h2 className="display-md">{copy.home.socialTitle}</h2>
            <p className="lede">{copy.home.socialBody}</p>
          </Reveal>
          <Reveal className="social-links" delay={0.08}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <strong>{link.handle}</strong>
                <Arrow size={14} />
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-tight proof-section">
        <div className="shell proof-block">
          <Reveal>
            <span className="eyebrow">{copy.home.socialProofEyebrow}</span>
            <h2 className="display-sm">{copy.home.socialProofTitle}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">{copy.home.socialProofBody}</p>
          </Reveal>
        </div>
      </section>

      <InfinitePhotoGallery locale={locale} />

      <section className="section-tight">
        <div className="shell call-out">
          <span className="eyebrow">{copy.contact.eyebrow}</span>
          <a href={business.phone.href} className="phone-jumbo">
            {business.phone.display}
          </a>
          <p className="lede">{copy.contact.body}</p>
        </div>
      </section>

      <QuoteBand locale={locale} />
    </SiteShell>
  )
}
