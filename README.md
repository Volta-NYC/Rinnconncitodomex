# Rinconcito Domex

A bilingual site for a Dominican + Mexican catering business in Brooklyn, rebuilt from a
scrape of the client's GoDaddy site.

Next.js 16 (App Router) · TypeScript · Tailwind v4 · self-hosted fonts · no external
runtime dependencies. Every page is statically prerendered.

```bash
npm install
npm run dev          # http://localhost:3000

npm run build        # static prerender of all 16 pages
npm start            # serve the build on :3000
npm run verify       # browser smoke test — see below (expects the site on :3100)
npm run typecheck
```

## The design — "Mesa Larga"

Two kitchens, one long table. A hairline runs down the page like the edge of a banquet
table, and section boundaries are cut into it as **papel picado** — the perforated banner
that hangs over celebration tables in both cultures. That is the one loud idea; the rest
is quiet: warm bone paper, cacao ink, achiote red as the anchor both flags share, with
indigo and maize as the two cultural poles.

Type is Fraunces (display, with its `SOFT`/`WONK` axes actually used) over Archivo (body).
Full design rationale: [`docs/superpowers/specs/2026-08-03-mesa-larga-design.md`](docs/superpowers/specs/2026-08-03-mesa-larga-design.md).

## Layout

```
src/
  app/
    (en)/            English root layout — <html lang="en"> — /, /catering, /about, /contact
    (es)/            Spanish root layout — <html lang="es"> — /es/...
    globals.css      Design tokens + every component style
    sitemap.ts robots.ts manifest.ts
  content/
    business.ts      NAP, hours, MWBE, route helper, Schema.org Caterer
    copy.ts          The Copy type + dictionary lookup
    copy.en.ts       English strings
    copy.es.ts       Spanish strings (the client's original language)
    images.ts        Local media manifest with per-locale alt text
  components/
    site-chrome.tsx  Masthead, colophon, page shell
    sections.tsx     Papel picado edge, rail marks, ribbon, quote band
    reveal.tsx       The single motion primitive
    pages/           One module per page type, shared by both locales
  lib/metadata.ts    Canonical + hreflang + Open Graph builder
scripts/verify.mjs   Browser smoke test
```

Both locales render the same page components with a `locale` prop, so a layout change
lands in both languages at once. `copy.en.ts` and `copy.es.ts` are both typed as `Copy`,
which makes a missing translation a compile error instead of a hole on the page.

## Content rules

Every fact on this site traces to `raw messy data/rinconcitodomex.com_.md` — the only
client-authored file in the scrape (the other 997 are GoDaddy's own marketing pages).

**There is deliberately no menu or price page.** The original site's menu is untouched
GoDaddy boilerplate ("Primer artículo — 12 — Agrega una descripción"): no dish, price, or
category in it is real. Rather than invent a menu, the catering page states plainly that
menus are built per event and quoted on a call. The same rule killed testimonials, staff
bios, founding dates, and client logos — none exist in the source.

If the client supplies a real menu, add it to `src/content/` as its own typed module and
give it a route; nothing in the current structure has to move.

## Media

The site uses the supplied Rinconcito Domex food, team, storefront, workshop, and brand
artwork from `public/images/rinconcito/` and `public/brand/`. The homepage hosts Reel 4
locally; the workshops section lazily embeds the dedicated public workshop video from
the supplied Drive so visitors can play it without adding a 281 MB file to the site.

## Verification

`npm run verify` drives real Chrome over all 16 routes at phone and desktop widths and
fails on: horizontal overflow, wrong `<html lang>`, missing or duplicate `<h1>`, images
without alt text, broken images, missing JSON-LD, links with no accessible name, reveals
that never resolve, a broken mobile drawer, or a language switch that loses the page.

It needs Chrome locally and the site already running:

```bash
npm run build && npm start -- -p 3100 &
npm run verify
```

Override with `CHROME=/path/to/chrome` and `BASE_URL=http://…` if needed.

## Accessibility

Skip link, semantic landmarks, visible focus rings, AA contrast, real alt text per
locale, `hreflang` pairs, and a full `prefers-reduced-motion` path that renders every
reveal in its final state.
