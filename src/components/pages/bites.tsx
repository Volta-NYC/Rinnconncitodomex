import Image from "next/image"
import Link from "next/link"
import { route, type Locale } from "@/content/business"
import { getCopy } from "@/content/copy"
import { rinconcitoPhotos } from "@/content/images"
import { Reveal } from "@/components/reveal"
import { PapelEdge, RailMark } from "@/components/sections"
import { Arrow, SiteShell } from "@/components/site-chrome"

/** A distinct destination for Bites — never framed as another Domex location. */
export function BitesPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const photos = [rinconcitoPhotos[52], rinconcitoPhotos[53], rinconcitoPhotos[39]]

  return (
    <SiteShell locale={locale}>
      <section className="page-hero bites-hero">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow">{copy.home.bitesEyebrow}</span>
            <h1 className="display-lg">{copy.home.bitesTitle}</h1>
            <p className="lede">{copy.home.bitesBody}</p>
            <div className="hero-actions">
              <Link className="button" href={route(locale, "/contact")}>
                {locale === "es" ? "Conecta con Bites" : "Connect with Bites"}
                <Arrow />
              </Link>
              <Link className="text-link" href={route(locale)}>
                {locale === "es" ? "Explora Domex" : "Explore Domex"}
                <Arrow />
              </Link>
            </div>
          </div>
          <figure className="page-figure">
            <Image
              src={photos[0].src}
              alt={locale === "es" ? "Sabores dominicanos y mexicanos de Rinconcito Bites" : "Dominican and Mexican flavors for Rinconcito Bites"}
              width={photos[0].width}
              height={photos[0].height}
              sizes="(max-width: 62rem) 92vw, 34vw"
              priority
            />
          </figure>
        </div>
      </section>

      <RailMark />

      <section className="section bites-gallery-section">
        <div className="shell">
          <Reveal className="section-head section-head-split">
            <div>
              <span className="eyebrow">Rinconcito Bites</span>
              <h2 className="display-md">
                {locale === "es" ? "Comida, color y una energía para compartir." : "Food, color, and an energy made to share."}
              </h2>
            </div>
            <p className="lede">{copy.home.bitesVibe}</p>
          </Reveal>
          <Reveal className="bites-photo-grid" delay={0.08}>
            {photos.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={locale === "es" ? "Platos vibrantes de Rinconcito" : "Vibrant Rinconcito dishes"}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 62rem) 92vw, 30vw"
              />
            ))}
          </Reveal>
        </div>
      </section>

      <PapelEdge color="var(--color-indigo)" />
      <section className="ground-indigo section">
        <div className="shell bites-difference">
          <Reveal>
            <span className="eyebrow eyebrow-quiet">{copy.home.bitesEyebrow}</span>
            <h2 className="display-md">Rinconcito Domex + Rinconcito Bites</h2>
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
      <PapelEdge color="var(--color-indigo)" flip />
    </SiteShell>
  )
}
