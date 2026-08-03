import type { AudienceSlug, Locale } from "./business"
import { copyEn } from "./copy.en"
import { copyEs } from "./copy.es"

/**
 * The shape both languages must satisfy. Because `copy.en.ts` and `copy.es.ts` are
 * both typed as `Copy`, a missing or misnamed translation is a compile error rather
 * than a hole that only shows up on the rendered page.
 */
export type Copy = {
  meta: {
    title: string
    description: string
    /** Short suffix appended to inner page titles, e.g. "Catering | Rinconcito Domex" */
    titleSuffix: string
  }
  nav: {
    home: string
    catering: string
    about: string
    contact: string
    /** Label on the button that switches to the *other* language. */
    switchLanguage: string
    openMenu: string
    closeMenu: string
    skipToContent: string
  }
  actions: {
    requestQuote: string
    call: string
    explore: string
    directions: string
    seeCatering: string
    ourStory: string
  }
  brand: {
    tagline: string
    mwbe: string
    location: string
    /** The one-line expression of the two-cuisine idea. */
    tableLine: string
    rights: string
  }
  home: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    intro: string
    proof: string
    proofDetail: string
    chaptersEyebrow: string
    chaptersTitle: string
    chapters: { number: string; title: string; body: string }[]
    pillarsEyebrow: string
    pillarsTitle: string
    pillars: { title: string; body: string }[]
    audiencesEyebrow: string
    audiencesTitle: string
    audiencesBody: string
    craftEyebrow: string
    craftTitle: string
    craftBody: string
    craftPoints: string[]
  }
  catering: {
    eyebrow: string
    title: string
    body: string
    stepsTitle: string
    stepsBody: string
    steps: { title: string; body: string }[]
    menuTitle: string
    menuHeadline: string
    menuBody: string
    menuNote: string
    audiencesTitle: string
  }
  audiences: Record<
    AudienceSlug,
    {
      label: string
      title: string
      body: string
      bullets: string[]
      prompt: string
      details: string[]
    }
  >
  about: {
    eyebrow: string
    title: string
    body: string
    storyTitle: string
    story: string[]
    valuesTitle: string
    mwbeTitle: string
    mwbeBody: string
  }
  contact: {
    eyebrow: string
    title: string
    body: string
    phoneLabel: string
    visitLabel: string
    hoursLabel: string
    weekdays: string
    weekend: string
    weekendValue: string
    readyTitle: string
    readyBody: string
    checklist: string[]
    closingTitle: string
  }
  quoteBand: {
    title: string
    body: string
  }
}

const dictionaries: Record<Locale, Copy> = {
  en: copyEn,
  es: copyEs,
}

export function getCopy(locale: Locale): Copy {
  return dictionaries[locale]
}

/** The locale a language switch should send the visitor to. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en"
}
