import Link from "next/link"
import { SiteShell } from "@/components/site-chrome"

/** Bilingual by necessity — a 404 can be reached from either language tree. */
export default function NotFound() {
  return (
    <SiteShell locale="es">
      <section className="section">
        <div className="shell call-out">
          <span className="eyebrow">404</span>
          <h1 className="display-lg">Esta página no está en la mesa.</h1>
          <p className="lede">
            That page isn&apos;t on the table. Volvamos al inicio — let&apos;s head back home.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/es">
              Inicio
            </Link>
            <Link className="button button-ghost" href="/">
              Home
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
