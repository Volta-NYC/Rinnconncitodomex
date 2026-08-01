"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Globe2, Menu, Phone, X } from "lucide-react"
import { useEffect, useState } from "react"
import {
  globalCopy,
  navigation,
  phoneDisplay,
  phoneHref,
  route,
  type Locale,
} from "@/lib/site"

function LanguageLink({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const nextPath =
    locale === "en"
      ? `/es${pathname === "/" ? "" : pathname}`
      : pathname.replace(/^\/es(?=\/|$)/, "") || "/"
  const c = globalCopy[locale]
  return (
    <Link className="language-toggle" href={nextPath} hrefLang={locale === "en" ? "es" : "en"}>
      <Globe2 size={15} aria-hidden="true" />
      <span>{c.language}</span>
    </Link>
  )
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const c = globalCopy[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    setOpen(false)
  }, [locale, pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={route(locale)} aria-label="Rinconcito Domex home">
          <span className="brand-mark">RD</span>
          <span className="brand-name">
            Rinconcito <strong>Domex</strong>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation[locale].map(([label, path]) => (
            <Link key={path} href={route(locale, path)}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageLink locale={locale} />
          <Link className="button button-dark header-quote" href={route(locale, "/contact")}>
            {c.quote}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? c.close : c.menu}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation[locale].map(([label, path], index) => (
            <Link key={path} href={route(locale, path)}>
              <span>0{index + 1}</span>
              {label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
          <a className="mobile-call" href={phoneHref}>
            <Phone aria-hidden="true" /> {c.call} · {phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const c = globalCopy[locale]
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <span className="brand-mark footer-mark">RD</span>
          <p>{c.footerLine}</p>
        </div>
        <div className="footer-nav">
          {navigation[locale].map(([label, path]) => (
            <Link key={path} href={route(locale, path)}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <span>{c.brooklyn}</span>
          <a href={phoneHref}>{phoneDisplay}</a>
          <span>{c.hours}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rinconcito Domex. {c.rights}</span>
        <LanguageLink locale={locale} />
      </div>
    </footer>
  )
}

export function SiteFrame({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} />
    </>
  )
}
