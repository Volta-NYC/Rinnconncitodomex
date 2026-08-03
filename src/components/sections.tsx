"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { business, route, type Locale } from "@/content/business"
import { getCopy } from "@/content/copy"
import { Arrow } from "./site-chrome"

/**
 * Papel picado — the perforated banner edge that hangs over celebration tables
 * in both Dominican and Mexican households. Used as the cut between grounds,
 * so section boundaries read as a hung banner rather than a CSS border.
 *
 * `color` is the ground the scallops are cut *out of*; `flip` hangs it from the
 * bottom of a band instead of the top.
 */
export function PapelEdge({
  color = "var(--color-bone)",
  flip = false,
}: {
  color?: string
  flip?: boolean
}) {
  return (
    <div
      className={`papel${flip ? " papel-flip" : ""}`}
      style={{ ["--papel-color" as string]: color }}
      aria-hidden="true"
    />
  )
}

/**
 * A place setting on the long table. Fills in once it has been scrolled to —
 * the table being set as you move down the page.
 */
export function RailMark() {
  const ref = useRef<HTMLDivElement>(null)
  const [set, setSet] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSet(true),
      { rootMargin: "-45% 0px -45% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="rail-mark" data-set={set} aria-hidden="true" />
}

/**
 * The tagline running edge to edge. Duplicated once so the track can loop
 * seamlessly at -50%; hidden from assistive tech because the same words are
 * already in the hero.
 */
export function Ribbon({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const phrases = [
    copy.brand.tagline,
    copy.brand.tableLine,
    copy.brand.mwbe,
    copy.brand.location,
  ]
  const group = (
    <div className="ribbon-track" aria-hidden="true">
      {[...phrases, ...phrases].map((phrase, index) => (
        <span key={`${phrase}-${index}`}>{phrase}</span>
      ))}
    </div>
  )
  return (
    <div className="ribbon" role="presentation">
      {group}
    </div>
  )
}

/** The closing call to action, repeated at the foot of every page. */
export function QuoteBand({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  return (
    <>
      <PapelEdge color="var(--color-achiote)" />
      <section className="quote-band section-tight">
        <div className="shell quote-inner">
          <div>
            <h2>{copy.quoteBand.title}</h2>
            <p>{copy.quoteBand.body}</p>
          </div>
          <div className="quote-actions">
            <a className="button button-maize" href={business.phone.href}>
              {copy.actions.call} · {business.phone.display}
            </a>
            <Link className="button button-ghost" href={route(locale, "/contact")}>
              {copy.nav.contact}
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
