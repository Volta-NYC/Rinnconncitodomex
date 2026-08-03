import type { Copy } from "./copy"

/**
 * English copy. The original site is Spanish-only, so this is a translation of the
 * client's own words, extended only where a page needs connective tissue — never with
 * new claims. No dishes, prices, clients, awards, or dates appear here, because none
 * exist in the source material.
 */
export const copyEn: Copy = {
  meta: {
    title: "Rinconcito Domex | Dominican & Mexican Catering in Brooklyn",
    description:
      "Gourmet catering for every event. Dominican and Mexican cooking for weddings, birthdays, corporate gatherings, schools, and agencies across New York. MWBE-certified, based in Brooklyn.",
    titleSuffix: "Rinconcito Domex",
  },
  nav: {
    home: "Home",
    catering: "Catering",
    about: "Our Story",
    contact: "Contact",
    switchLanguage: "Español",
    openMenu: "Menu",
    closeMenu: "Close",
    skipToContent: "Skip to content",
  },
  actions: {
    requestQuote: "Request a quote",
    call: "Call",
    explore: "Explore",
    directions: "Get directions",
    seeCatering: "See how catering works",
    ourStory: "Our story",
  },
  brand: {
    tagline: "Dominican & Mexican Catering",
    mwbe: "MWBE-certified",
    location: "Brooklyn, New York",
    tableLine: "Two kitchens. One long table.",
    rights: "All rights reserved.",
  },
  home: {
    eyebrow: "Catering across New York",
    titleLead: "Gourmet catering for",
    titleAccent: "every event",
    intro:
      "Delicious food and exceptional service for your celebrations — Dominican and Mexican cooking brought to one table, in Brooklyn and across New York.",
    proof: "MWBE-certified",
    proofDetail: "Brooklyn · Serving all five boroughs",
    chaptersEyebrow: "How it works",
    chaptersTitle: "Three steps to a table that's yours",
    chapters: [
      {
        number: "01",
        title: "Tell us the occasion",
        body: "The event, the date, the place, and how many guests you expect. That's enough for us to start.",
      },
      {
        number: "02",
        title: "Talk it through",
        body: "We go over your preferences, your schedule, and any dietary needs in the room — a conversation, not a form.",
      },
      {
        number: "03",
        title: "Shape the experience",
        body: "We build a direction around your guests and your venue, then quote it. Every event is different, so every menu is too.",
      },
    ],
    pillarsEyebrow: "What we stand on",
    pillarsTitle: "Our mission, in three parts",
    pillars: [
      {
        title: "Our mission",
        body: "We are dedicated to exceptional culinary experiences for every kind of event, meeting our clients' needs through personalized service and a menu that impresses every guest.",
      },
      {
        title: "Quality and flavor",
        body: "We use only fresh, high-quality ingredients in every dish. Food should be delicious, but also healthy and nourishing — so that every bite is memorable.",
      },
      {
        title: "Personalized service",
        body: "Every event is unique, so our service adapts to what yours actually needs. A wedding, a birthday, a corporate gathering — we're here to make your vision real.",
      },
    ],
    audiencesEyebrow: "Who we serve",
    audiencesTitle: "Built for the rooms New York eats in",
    audiencesBody:
      "From school programs and public-sector occasions to company gatherings and family celebrations, the approach starts the same way: with your guests.",
    craftEyebrow: "In the kitchen",
    craftTitle: "Two culinary traditions, cooked side by side",
    craftBody:
      "Rinconcito Domex was born to combine the authentic flavors of Dominican and Mexican cooking into a single experience — one that's distinctive, accessible, and full of culture.",
    craftPoints: [
      "Fresh, high-quality ingredients in every dish",
      "Menus shaped around your guests, not a fixed list",
      "Service that adapts to your venue and schedule",
    ],
  },
  catering: {
    eyebrow: "Catering for New York",
    title: "Food that brings people together.",
    body: "Every gathering has its own purpose. We start by understanding yours, then shape a catering conversation around your guests, your venue, and what the day actually requires.",
    stepsTitle: "A thoughtful start to every event",
    stepsBody:
      "Whether you're planning a wedding, a birthday, a corporate gathering, a school event, or a public-sector occasion, begin with the details that matter most.",
    steps: [
      {
        title: "Share the occasion",
        body: "Tell us the event type, date, location, and expected number of guests.",
      },
      {
        title: "Talk through your needs",
        body: "Bring your preferences, your schedule, and any dietary considerations to the conversation.",
      },
      {
        title: "Shape the experience",
        body: "We'll discuss a personalized direction built around your event, then put a quote to it.",
      },
    ],
    menuTitle: "About the menu",
    menuHeadline: "There is no fixed menu.",
    menuBody:
      "We don't publish a fixed menu, because we don't cook from one. Dishes are chosen for your guests, your venue, and the season — Dominican, Mexican, or drawing on both.",
    menuNote:
      "Call us and we'll walk you through what suits your event.",
    audiencesTitle: "Choose your starting point",
  },
  audiences: {
    schools: {
      label: "Schools and programs",
      title: "Catering for schools and student programs",
      body: "Food for school events, staff gatherings, and student programs — planned around your calendar, your space, and the number of people you're feeding.",
      bullets: [
        "Events sized to a class, a grade, or a full staff",
        "Dietary considerations discussed up front",
        "Timing built around the school day",
      ],
      prompt: "What we'll ask about",
      details: [
        "The occasion and the age group you're catering for",
        "Date, start time, and how long service needs to run",
        "Where the food will be served and what the space allows",
        "Guest count and any dietary requirements in the group",
      ],
    },
    agencies: {
      label: "Government and public sector",
      title: "Catering for agencies and public-sector occasions",
      body: "As an MWBE-certified business, we're set up to work with public-sector organizations across New York on the occasions that bring their people together.",
      bullets: [
        "MWBE-certified",
        "Comfortable with procurement timelines",
        "Service scaled to the room and the schedule",
      ],
      prompt: "What we'll ask about",
      details: [
        "The nature of the occasion and who is attending",
        "Date, location, and the schedule you need service to fit",
        "Guest count and any dietary requirements",
        "Any documentation or process your organization requires",
      ],
    },
    corporate: {
      label: "Corporate",
      title: "Catering for company gatherings",
      body: "Meetings, milestones, team gatherings, and client-facing occasions — catered so the food supports the room instead of interrupting it.",
      bullets: [
        "Sized from a small meeting to a full-company event",
        "Set up around your office or your venue",
        "One point of contact from first call to service",
      ],
      prompt: "What we'll ask about",
      details: [
        "The type of gathering and what it needs to accomplish",
        "Date, time, and how service should fit the agenda",
        "Where you're hosting and what the space allows",
        "Guest count and any dietary requirements",
      ],
    },
    celebrations: {
      label: "Weddings and celebrations",
      title: "Catering for weddings, birthdays, and family celebrations",
      body: "The occasions the business was built for. Weddings, birthdays, and family gatherings, catered with the flavors that make them feel like home.",
      bullets: [
        "Weddings, birthdays, and family gatherings",
        "Dominican, Mexican, or drawing on both",
        "A menu direction shaped with you, not handed to you",
      ],
      prompt: "What we'll ask about",
      details: [
        "The celebration and what it means to the people in the room",
        "Date, location, and how you want the day to run",
        "Guest count and any dietary requirements",
        "The flavors your family would look for first",
      ],
    },
  },
  about: {
    eyebrow: "Our story",
    title: "Two cultures, one table.",
    body: "Rinconcito Domex is a food and catering business born to combine the authentic flavors of Dominican and Mexican cooking into a single experience — distinctive, accessible, and full of culture.",
    storyTitle: "Where we're going",
    story: [
      "Rinconcito Domex is a food and catering company. It was founded with a mission: to combine the authentic flavors of Dominican and Mexican cooking into one experience that is distinctive, accessible, and full of culture.",
      "Alongside its restaurants, Rinconcito Domex continues to grow as an MWBE-certified business, focused on expanding its catering services and becoming a dependable partner to organizations and companies across New York.",
      "That's the whole idea behind the long table: two kitchens that don't usually share one, cooking for the same room.",
    ],
    valuesTitle: "What guides the kitchen",
    mwbeTitle: "MWBE-certified",
    mwbeBody:
      "Rinconcito Domex is a certified Minority and Women-owned Business Enterprise, working to become a dependable catering partner for organizations and companies in New York.",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Let's talk about your event.",
    body: "Or better yet — come visit us. Call and we'll talk through the occasion, the guest count, and what your day actually needs.",
    phoneLabel: "Call us",
    visitLabel: "Visit us",
    hoursLabel: "Hours",
    weekdays: "Monday – Friday",
    weekend: "Saturday & Sunday",
    weekendValue: "Closed",
    readyTitle: "Ready when you call",
    readyBody:
      "Having these four details to hand makes the first conversation a short one.",
    checklist: [
      "The type of event and the date",
      "Where you're hosting it",
      "How many guests you expect",
      "Any dietary requirements in the group",
    ],
    closingTitle: "Ready when you are",
  },
  quoteBand: {
    title: "Let's set the table.",
    body: "Tell us about the occasion and we'll shape the catering around it.",
  },
}
