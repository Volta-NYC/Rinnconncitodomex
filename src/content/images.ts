/**
 * Local media only — the site never loads an image from the original site or any CDN.
 * These are CC0 placeholders standing in for real client photography;
 * see `docs/image-credits.md`. Swap the files in place and these entries still hold.
 */
export const images = {
  hero: {
    src: "/images/hero-service.jpg",
    width: 1024,
    height: 724,
    alt: {
      en: "Catering staff plating platters for service",
      es: "Personal de catering emplatando bandejas para el servicio",
    },
  },
  kitchen: {
    src: "/images/kitchen-craft.jpg",
    width: 960,
    height: 563,
    alt: {
      en: "Cooks finishing plates on the pass",
      es: "Cocineros terminando los platos en el pase",
    },
  },
  peppers: {
    src: "/images/prep-peppers.jpg",
    width: 960,
    height: 640,
    alt: {
      en: "Fresh red peppers on a cutting board",
      es: "Pimientos rojos frescos sobre una tabla de cortar",
    },
  },
  spread: {
    src: "/images/catering-spread.jpg",
    width: 1024,
    height: 683,
    alt: {
      en: "A platter of tacos served with rice and corn",
      es: "Una bandeja de tacos servida con arroz y maíz",
    },
  },
  chef: {
    src: "/images/story-chef.jpg",
    width: 960,
    height: 640,
    alt: {
      en: "A chef prepping ingredients in a professional kitchen",
      es: "Un chef preparando ingredientes en una cocina profesional",
    },
  },
} as const

export type ImageKey = keyof typeof images
