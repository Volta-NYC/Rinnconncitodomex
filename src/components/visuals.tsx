import Image from "next/image"
import { marqueeDishes } from "@/lib/menu"
import type { Locale } from "@/lib/site"

/**
 * One photograph, two color treatments, meeting at a seam down the middle:
 * Talavera cobalt/maíz on the left, indigo/rosa on the right.
 * Both layers load the same optimized source, so this costs one request.
 */
export function SplitDuo({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}) {
  return (
    <div className={`split-duo ${className}`.trim()}>
      <div className="duo duo-mex" aria-hidden="true">
        <Image src={src} alt="" fill sizes={sizes} priority={priority} />
      </div>
      <div className="duo duo-dom">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    </div>
  )
}

/**
 * The scrolling band. Once real dishes exist in `menu.ts` it names them;
 * until then it falls back to the client's own phrases from their site, so
 * the band never claims a dish the kitchen hasn't confirmed.
 */
const brandPhrases = {
  en: [
    "Gourmet catering for every event",
    "Personalized service",
    "Quality and flavor",
    "Fresh ingredients",
    "MWBE-certified",
    "Brooklyn, New York",
  ],
  es: [
    "Catering gourmet para todo evento",
    "Servicio personalizado",
    "Calidad y sabor",
    "Ingredientes frescos",
    "Certificado MWBE",
    "Brooklyn, Nueva York",
  ],
} as const

export function DishMarquee({ locale }: { locale: Locale }) {
  const dishes = marqueeDishes(locale)
  const items = dishes.length > 0 ? dishes : [...brandPhrases[locale]]
  const group = (
    <div className="marquee-group">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {group}
        {group}
      </div>
    </div>
  )
}

export function TileBand() {
  return <div className="tile-band" aria-hidden="true" />
}
