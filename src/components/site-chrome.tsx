"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, type ReactNode } from "react"
import { business, route, type Locale } from "@/content/business"
import { getCopy, otherLocale } from "@/content/copy"

function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg
      className="arrow"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M2 8h12M9 3l5 5-5 5" strokeLinecap="square" />
    </svg>
  )
}

export { Arrow }

function Wordmark({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  return (
    <Link href={route(locale)} className="wordmark" aria-label={business.name}>
      Rinconcito
      <span className="wordmark-dots" aria-hidden="true">
        <i />
        <i />
      </span>
      Domex
      <small>{copy.brand.tagline}</small>
    </Link>
  )
}

/**
 * The masthead. Nav links are derived from the copy dictionary so EN and ES
 * can never drift out of sync, and the language switch preserves the current
 * page rather than dumping the visitor back on the home page.
 */
function Masthead({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // A route change should always close the drawer, however it was triggered.
  useEffect(() => setOpen(false), [pathname])

  const links = [
    { href: route(locale), label: copy.nav.home },
    { href: route(locale, "/catering"), label: copy.nav.catering },
    { href: route(locale, "/about"), label: copy.nav.about },
    { href: route(locale, "/contact"), label: copy.nav.contact },
  ]

  const other = otherLocale(locale)
  const rest = locale === "es" ? pathname.replace(/^\/es/, "") : pathname
  const switchHref = route(other, rest === "/" ? "" : rest)

  const isCurrent = (href: string) => pathname === href

  return (
    <header className="masthead">
      <div className="shell masthead-inner">
        <Wordmark locale={locale} />

        <nav className="nav-desktop" aria-label={copy.nav.home}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={isCurrent(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href={switchHref} className="lang-switch" hrefLang={other} lang={other}>
            {copy.nav.switchLanguage}
          </Link>
          <a className="button" href={business.phone.href}>
            {copy.actions.call}
            <Arrow />
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-drawer"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? copy.nav.closeMenu : copy.nav.openMenu}
        </button>
      </div>

      {open && (
        <div className="nav-drawer" id="site-drawer">
          <div className="shell">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}>
                    {link.label}
                    <Arrow />
                  </Link>
                </li>
              ))}
              <li>
                <Link href={switchHref} hrefLang={other} lang={other}>
                  {copy.nav.switchLanguage}
                  <Arrow />
                </Link>
              </li>
              <li>
                <a href={business.phone.href}>
                  {business.phone.display}
                  <Arrow />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

function Colophon({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const year = new Date().getFullYear()

  return (
    <footer className="colophon">
      <div className="shell">
        <div className="colophon-grid">
          <div>
            <h2>{copy.brand.tableLine}</h2>
            <p className="colophon-note">
              {copy.brand.mwbe} · {copy.brand.location}
            </p>
          </div>

          <div>
            <span className="colophon-label">{copy.nav.catering}</span>
            <ul className="colophon-list">
              <li>
                <Link href={route(locale, "/catering")}>{copy.nav.catering}</Link>
              </li>
              <li>
                <Link href={route(locale, "/about")}>{copy.nav.about}</Link>
              </li>
              <li>
                <Link href={route(locale, "/contact")}>{copy.nav.contact}</Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="colophon-label">{copy.contact.visitLabel}</span>
            <ul className="colophon-list">
              <li>
                <a href={business.phone.href}>{business.phone.display}</a>
              </li>
              <li>{business.address.full}</li>
              <li>
                {copy.contact.weekdays} · 9:00–17:00
              </li>
              <li>
                <a href={business.mapHref} target="_blank" rel="noreferrer">
                  {copy.actions.directions}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="colophon-base">
          <span>
            © {year} {business.name}. {copy.brand.rights}
          </span>
          <span>
            Made by{" "}
            <a
              className="colophon-credit-link"
              href="https://www.novusnyc.org/"
              target="_blank"
              rel="noreferrer"
            >
              Novus
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

/**
 * Page shell. Every route renders through this so the rail, masthead, and
 * colophon stay identical across both languages.
 *
 * `lang` is set here rather than on <html> because a single root layout serves
 * both locales; putting it on the content wrapper keeps screen readers correct.
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  const copy = getCopy(locale)
  return (
    <div lang={locale}>
      <a className="skip-link" href="#main">
        {copy.nav.skipToContent}
      </a>
      <Masthead locale={locale} />
      <main id="main" className="rail">
        {children}
      </main>
      <Colophon locale={locale} />
    </div>
  )
}
