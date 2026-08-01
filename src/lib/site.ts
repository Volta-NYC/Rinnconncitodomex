export type Locale = "en" | "es"
export type Sector = "schools" | "government" | "corporate"

export const phoneDisplay = "(347) 365-2786"
export const phoneHref = "tel:+13473652786"
export const address = "505 Dekalb Avenue, Brooklyn, NY"
export const mapHref =
  "https://www.google.com/maps/search/?api=1&query=505%20Dekalb%20Avenue%2C%20Brooklyn%2C%20NY"

export const route = (locale: Locale, path = "") =>
  `${locale === "es" ? "/es" : ""}${path || "/"}`.replace(/\/+/g, "/")

export const navigation = {
  en: [
    ["Home", ""],
    ["Catering", "/catering"],
    ["Our Story", "/about"],
    ["Contact", "/contact"],
  ],
  es: [
    ["Inicio", ""],
    ["Catering", "/catering"],
    ["Nuestra historia", "/about"],
    ["Contacto", "/contact"],
  ],
} as const

export const globalCopy = {
  en: {
    tagline: "Dominican + Mexican Catering",
    quote: "Request a quote",
    call: "Call now",
    language: "Español",
    menu: "Menu",
    close: "Close menu",
    mwbe: "MWBE-certified",
    brooklyn: "Brooklyn, New York",
    footerLine: "Two cultures. One table. Made for New York.",
    explore: "Explore",
    hours: "Monday–Friday · 9 AM–5 PM",
    rights: "All rights reserved.",
  },
  es: {
    tagline: "Catering Dominicano + Mexicano",
    quote: "Solicitar cotización",
    call: "Llámanos",
    language: "English",
    menu: "Menú",
    close: "Cerrar menú",
    mwbe: "Empresa certificada MWBE",
    brooklyn: "Brooklyn, Nueva York",
    footerLine: "Dos culturas. Una mesa. Hecho para Nueva York.",
    explore: "Explorar",
    hours: "Lunes–viernes · 9 AM–5 PM",
    rights: "Todos los derechos reservados.",
  },
} as const
