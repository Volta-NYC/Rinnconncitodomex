import Image from "next/image"
import { business, type Locale } from "@/content/business"
import { getCopy } from "@/content/copy"
import { featuredPhotos, photoAlt, rinconcitoPhotos } from "@/content/images"
import { Reveal } from "@/components/reveal"
import { PapelEdge, RailMark } from "@/components/sections"
import { Arrow, SiteShell } from "@/components/site-chrome"

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

          <figure className="contact-photo">
            <Image
              src={featuredPhotos.storefront.src}
              alt={photoAlt.storefront[locale]}
              width={featuredPhotos.storefront.width}
              height={featuredPhotos.storefront.height}
              sizes="(max-width: 62rem) 92vw, 36vw"
              priority
            />
          </figure>

          <form
            className="contact-form"
            action=""
            method="post"
          >
            <h2 className="display-sm">{copy.contact.formTitle}</h2>
            <label>
              <span>{copy.contact.nameLabel}</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>{copy.contact.emailLabel}</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>{copy.contact.phoneNumberLabel}</span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              <span>{copy.contact.subjectLabel}</span>
              <select name="subjectCategory" required defaultValue="">
                <option value="" disabled>
                  {copy.contact.subjectLabel}
                </option>
                {copy.contact.subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="contact-form-message">
              <span>{copy.contact.messageLabel}</span>
              <textarea name="message" rows={6} required />
            </label>
            <button className="button" type="submit">
              {copy.contact.submitLabel}
              <Arrow />
            </button>
          </form>
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

          <Reveal className="contact-ready-side" delay={0.08}>
            <ul className="checklist">
              {copy.contact.checklist.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="contact-ready-photos">
              {[rinconcitoPhotos[27], featuredPhotos.lime].map((photo) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photoAlt.food[locale]}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 62rem) 44vw, 22vw"
                />
              ))}
            </div>
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
