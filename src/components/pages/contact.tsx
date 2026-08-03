import { business, type Locale } from "@/content/business"
import { getCopy } from "@/content/copy"
import { Reveal } from "@/components/reveal"
import { PapelEdge, RailMark } from "@/components/sections"
import { Arrow, SiteShell } from "@/components/site-chrome"

/**
 * There is no contact form. The business runs on a phone number during
 * weekday hours, so the page's job is to make calling easy and to tell the
 * caller what to have ready — not to collect a lead into an inbox nobody
 * has told us exists.
 */
export function ContactPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)

  return (
    <SiteShell locale={locale}>
      <section className="page-hero">
        <div className="shell contact-grid">
          <div>
            <span className="eyebrow">{copy.contact.eyebrow}</span>
            <h1 className="display-lg" style={{ marginBlock: "1.1rem 1.4rem" }}>
              {copy.contact.title}
            </h1>
            <p className="lede">{copy.contact.body}</p>
          </div>

          <div className="contact-card">
            <div className="contact-row">
              <span className="micro">{copy.contact.phoneLabel}</span>
              <a href={business.phone.href}>{business.phone.display}</a>
            </div>

            <div className="contact-row">
              <span className="micro">{copy.contact.visitLabel}</span>
              <p>{business.address.full}</p>
              <a
                className="text-link"
                href={business.mapHref}
                target="_blank"
                rel="noreferrer"
                style={{ justifySelf: "start", marginTop: "0.35rem" }}
              >
                {copy.actions.directions}
                <Arrow size={14} />
              </a>
            </div>

            <div className="contact-row">
              <span className="micro">{copy.contact.hoursLabel}</span>
              <div className="hours-table">
                <div>
                  <span>{copy.contact.weekdays}</span>
                  <span>9:00 – 17:00</span>
                </div>
                <div className="hours-closed">
                  <span>{copy.contact.weekend}</span>
                  <span>{copy.contact.weekendValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RailMark />
      <PapelEdge color="var(--color-cacao)" />

      <section className="ground-dark section">
        <div className="shell story">
          <Reveal>
            <span className="eyebrow eyebrow-quiet">{copy.contact.closingTitle}</span>
            <h2 className="display-md" style={{ marginTop: "0.9rem" }}>
              {copy.contact.readyTitle}
            </h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>
              {copy.contact.readyBody}
            </p>
          </Reveal>

          <Reveal as="ul" className="checklist" delay={0.08}>
            {copy.contact.checklist.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <PapelEdge color="var(--color-cacao)" flip />

      <section className="section-tight">
        <div className="shell call-out">
          <span className="eyebrow">{copy.contact.phoneLabel}</span>
          <a href={business.phone.href} className="phone-jumbo">
            {business.phone.display}
          </a>
          <p className="lede">
            {copy.contact.weekdays} · 9:00 – 17:00 · {business.address.full}
          </p>
        </div>
      </section>
    </SiteShell>
  )
}
