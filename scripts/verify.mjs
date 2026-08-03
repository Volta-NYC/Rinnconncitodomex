import puppeteer from "puppeteer-core"

/**
 * Smoke-tests the built site in a real browser: every route in both languages,
 * at phone and desktop widths. Checks for horizontal overflow, correct <html lang>,
 * exactly one <h1>, alt text, broken images, JSON-LD, accessible link names, and
 * that the scroll reveals and mobile drawer actually work.
 *
 * Usage: npm run build && npm start &   then   npm run verify
 * Requires Chrome installed locally (CHROME env var overrides the path).
 */

const BASE = process.env.BASE_URL ?? "http://localhost:3100"
const ROUTES = ["/", "/catering", "/catering/schools", "/catering/agencies",
  "/catering/corporate", "/catering/celebrations", "/about", "/contact",
  "/es", "/es/catering", "/es/catering/schools", "/es/catering/agencies",
  "/es/catering/corporate", "/es/catering/celebrations", "/es/about", "/es/contact"]

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
})
const fails = []
const note = (m) => { fails.push(m); console.log("  ✗", m) }

for (const [label, vp] of [
  ["mobile", { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }],
  ["desktop", { width: 1440, height: 900, deviceScaleFactor: 1 }],
]) {
  console.log(`\n== ${label} ==`)
  const page = await browser.newPage()
  await page.setViewport(vp)
  for (const route of ROUTES) {
    const res = await page.goto(BASE + route, { waitUntil: "networkidle0" })
    if (![200, 304].includes(res.status())) note(`${route} → HTTP ${res.status()}`)

    const r = await page.evaluate(() => {
      const de = document.documentElement
      const imgs = [...document.querySelectorAll("img")]
      return {
        overflow: de.scrollWidth - window.innerWidth,
        lang: document.documentElement.getAttribute("lang"),
        h1: document.querySelectorAll("h1").length,
        title: document.title,
        noAlt: imgs.filter((i) => !i.getAttribute("alt")).length,
        broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
        jsonld: !!document.querySelector('script[type="application/ld+json"]'),
        emptyLinks: [...document.querySelectorAll("a")].filter(
          (a) => !a.textContent.trim() && !a.getAttribute("aria-label")).length,
      }
    })
    if (r.overflow > 1) note(`${route} overflows by ${r.overflow}px`)
    if (r.h1 !== 1) note(`${route} has ${r.h1} <h1>`)
    if (r.noAlt) note(`${route} has ${r.noAlt} img without alt`)
    if (r.broken) note(`${route} has ${r.broken} broken img`)
    if (r.emptyLinks) note(`${route} has ${r.emptyLinks} link(s) with no accessible name`)
    const wantLang = route.startsWith("/es") ? "es" : "en"
    if (r.lang !== wantLang) note(`${route} lang="${r.lang}" (want ${wantLang})`)
    if (!r.jsonld && !route.includes("/catering/")) note(`${route} missing JSON-LD`)
  }
  await page.close()
}

// Reveal animation actually resolves after scrolling
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(BASE + "/", { waitUntil: "networkidle0" })
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 90))
  }
})
await new Promise((r) => setTimeout(r, 2500))
const hidden = await page.evaluate(() =>
  [...document.querySelectorAll(".reveal")].filter(
    (el) => getComputedStyle(el).opacity !== "1").length)
if (hidden) note(`${hidden} .reveal element(s) still invisible after full scroll`)
else console.log("\n  ✓ all reveals resolved after scroll")

// Mobile nav drawer
await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
await page.goto(BASE + "/", { waitUntil: "networkidle0" })
await page.click(".nav-toggle")
await new Promise((r) => setTimeout(r, 300))
const drawer = await page.evaluate(() => {
  const d = document.querySelector("#site-drawer")
  return { open: !!d, links: d ? d.querySelectorAll("a").length : 0,
           expanded: document.querySelector(".nav-toggle").getAttribute("aria-expanded") }
})
if (!drawer.open || drawer.links < 5 || drawer.expanded !== "true") note(`drawer: ${JSON.stringify(drawer)}`)
else console.log(`  ✓ mobile drawer opens with ${drawer.links} links, aria-expanded=true`)

// Language switch preserves the page
await page.setViewport({ width: 1440, height: 900 })
await page.goto(BASE + "/catering/agencies", { waitUntil: "networkidle0" })
const target = await page.$eval(".lang-switch", (a) => a.getAttribute("href"))
if (target !== "/es/catering/agencies") note(`lang switch → ${target} (want /es/catering/agencies)`)
else console.log("  ✓ language switch preserves the current page")

await browser.close()
console.log(fails.length ? `\nFAILURES: ${fails.length}` : "\nALL CHECKS PASSED")
process.exit(fails.length ? 1 : 0)
