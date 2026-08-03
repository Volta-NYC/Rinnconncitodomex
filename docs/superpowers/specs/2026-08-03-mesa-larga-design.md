# Rinconcito Domex — "Mesa Larga" site design

**Date:** 2026-08-03
**Status:** Approved

## Business (sourced only from `raw messy data/rinconcitodomex.com_.md`)

Rinconcito Domex is a Dominican + Mexican food and catering business in Brooklyn.
Everything below is quoted or directly paraphrased from the scrape; nothing is invented.

- Tagline: "Catering Gourmet para Todo Evento" / "Deliciosa comida y servicio
  excepcional para tus celebraciones."
- Positioning: "combinar los sabores auténticos de la cocina dominicana y mexicana en
  una experiencia única, accesible y llena de cultura."
- MWBE-certified; growing catering to become "un socio confiable para organizaciones y
  empresas en Nueva York."
- Three pillars: Nuestra Misión · Calidad y Sabor · Servicio Personalizado.
- Event types named by the client: bodas, cumpleaños, reuniones corporativas.
- NAP: 505 Dekalb Avenue, Brooklyn, NY · 1 347-365-2786 · Mon–Fri 9:00–17:00, Sat/Sun closed.
- Original site language: Spanish.

### What does not exist

The scrape's menu section is untouched GoDaddy boilerplate ("Primer artículo — 12 —
Agrega una descripción"). There are no real dishes, prices, categories, testimonials,
staff names, or founding dates anywhere in the source.

**Decision: the site ships no menu or price page.** Menus are presented as built
per-event and quoted on a call. Inventing a menu would fabricate the client's product.

## Concept — "Mesa Larga" (the long table)

*Two cultures, one long table.* A continuous thin rule runs down the page like the edge
of a banquet table; sections hang off it and chapter markers count along it as the user
scrolls. It gives the site a spine instead of a stack of cards, and expresses the one
genuinely distinctive fact about the business: Dominican **and** Mexican, not either.

## Visual system

Deliberately not the cold WebGL of the two library templates (`hubtown`, `igloo`), whose
glacial monochrome is wrong for a warm family caterer.

- Ground: warm bone paper `#F7F1E6`; ink-brown text `#231A14`.
- Accents: achiote red `#BF3B22` (the anchor shared by both flags), tomatillo green and
  indigo as the two cultural poles, maize gold for warmth. Ink and rules, not gradients.
- Type: Fraunces (soft high-contrast serif) for display, Inter for UI and body. Both
  self-hosted via `@fontsource` — no external font CDN.
- Photography: full-bleed and generous, presented straight.

## Motion

Craft borrowed from the library templates, retimed warm: one shared easing curve
(`cubic-bezier(0.16, 1, 0.3, 1)`), staggered fade-and-rise reveals, a sticky pinned
"how it works" chapter, and the table rail drawing itself on scroll. Full
`prefers-reduced-motion` fallback that renders everything in its final state.

## Architecture

- **Stack:** Next.js 16 App Router, TypeScript, Tailwind v4 (CSS-first `@theme`),
  `next/image`, `motion` for reveals. No GSAP — sticky positioning plus scroll progress
  covers the pinning at far less weight.
- **Content layer:** `src/content/` typed modules — `business.ts` (NAP, hours, MWBE),
  `copy.en.ts` / `copy.es.ts`, `audiences.ts`, `images.ts`. EN/ES parity is enforced by a
  shared type, so a missing translation is a compile error.
- **Routes:** `/`, `/catering`, `/catering/[audience]` (schools · agencies · corporate ·
  celebrations), `/about`, `/contact`, each mirrored under `/es`. Plus `sitemap.ts`,
  `robots.ts`, `manifest.ts`, and `Caterer` JSON-LD generated from `business.ts`.
- **Accessibility:** semantic landmarks, visible focus, AA contrast, real alt text,
  `hreflang` pairs, reduced-motion support.

## Media

Six CC0 placeholder photographs in `public/`, documented in `docs/image-credits.md`.
The site loads no media from the original site or any external CDN.
