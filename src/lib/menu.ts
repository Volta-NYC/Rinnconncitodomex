import type { Locale } from "@/lib/site"

/* ============================================================================
 * THE MENU LIVES HERE. THIS IS THE ONLY FILE YOU NEED TO EDIT.
 *
 * Status: PLACEHOLDER. The names and prices below are the GoDaddy template
 * defaults carried over from the old rinconcitodomex.com — the client never
 * filled the menu section in. Replace every `name`, `price`, and `description`
 * with real dishes before launch.
 *
 * Notes:
 *  - Keep the `en` and `es` arrays the same shape. A dish that exists in one
 *    language and not the other will simply not appear on that locale's page.
 *  - `price` is a plain string, rendered as-is after a "$". Use "12" for $12,
 *    "12–18" for a range, or "MP" / "Market" if it varies.
 *  - `description` may be an empty string; the row just tightens up.
 *  - Add or remove categories and items freely — the layout adapts.
 *  - `menuIsPlaceholder` below drives the on-page warning and the marquee.
 *    Flip it to `false` once real dishes are in, and the dish names start
 *    feeding the scrolling band automatically.
 * ========================================================================= */

export const menuIsPlaceholder = true

export type MenuItem = {
  name: string
  price: string
  description: string
}

export type MenuCategory = {
  name: string
  description: string
  items: MenuItem[]
}

export const menu: Record<Locale, MenuCategory[]> = {
  en: [
    {
      name: "First category",
      description: "Add a description of this category",
      items: [
        { name: "First item", price: "12", description: "Add a description of this item" },
        { name: "Second item", price: "15", description: "Add a description of this item" },
        { name: "Third item", price: "22", description: "Add a description of this item" },
      ],
    },
    {
      name: "Second category",
      description: "Add a description of this category",
      items: [
        { name: "First item", price: "12", description: "Add a description of this item" },
        { name: "Second item", price: "15", description: "Add a description of this item" },
        { name: "Third item", price: "22", description: "Add a description of this item" },
      ],
    },
  ],
  es: [
    {
      name: "Primera categoría",
      description: "Agrega una descripción de esta categoría",
      items: [
        { name: "Primer artículo", price: "12", description: "Agrega una descripción de este artículo" },
        { name: "Segundo artículo", price: "15", description: "Agrega una descripción de este artículo" },
        { name: "Tercer artículo", price: "22", description: "Agrega una descripción de este artículo" },
      ],
    },
    {
      name: "Segunda categoría",
      description: "Agrega una descripción de esta categoría",
      items: [
        { name: "Primer artículo", price: "12", description: "Agrega una descripción de este artículo" },
        { name: "Segundo artículo", price: "15", description: "Agrega una descripción de este artículo" },
        { name: "Tercer artículo", price: "22", description: "Agrega una descripción de este artículo" },
      ],
    },
  ],
}

export const menuCopy = {
  en: {
    kicker: "Menu & pricing",
    title: "What we bring to the table.",
    body: "A starting point for your event. Menus are shaped around your guests, so tell us what you have in mind.",
    placeholderNotice:
      "This menu is a placeholder. Real dishes and pricing are on the way — call us and we'll talk through options for your event.",
  },
  es: {
    kicker: "Menú / Lista de precios",
    title: "Lo que traemos a la mesa.",
    body: "Un punto de partida para tu evento. Los menús se adaptan a tus invitados, así que cuéntanos qué tienes en mente.",
    placeholderNotice:
      "Este menú es provisional. Pronto publicaremos los platillos y precios reales — llámanos y conversamos sobre las opciones para tu evento.",
  },
} as const

/** Dish names for the scrolling band, only once real dishes exist. */
export function marqueeDishes(locale: Locale): string[] {
  if (menuIsPlaceholder) return []
  return menu[locale].flatMap((category) => category.items.map((item) => item.name))
}
