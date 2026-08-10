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

export const rinconcitoPhotos = [
  { src: "/images/rinconcito/01-7bcec61a-3816-4910-a14e-651dd3d4a29b.jpg", width: 1198, height: 1800 },
  { src: "/images/rinconcito/02-domex-may2026-60.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/03-domex-may2026-61.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/04-domex-may2026-65.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/05-dsc07299.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/06-dsc07337.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/07-dsc07352.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/08-dsc07426.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/09-dsc07458.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/10-dsc07500.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/11-dsc07633.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/12-dsc07665.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/13-dsc07680.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/14-dsc07721.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/15-dsc07738.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/16-dsc07770.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/17-dsc07806.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/18-dsc07814.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/19-dsc07830.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/20-dsc07863.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/21-dsc07886.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/22-dsc07902.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/23-dsc07918.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/24-dsc07932.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/25-dsc07942.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/26-dsc07996.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/27-dsc08018.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/28-dsc08071.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/29-dsc08101.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/30-dsc08115.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/31-dsc08176.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/32-dsc08215.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/33-dsc08242.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/34-dsc08253.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/35-dsc08292.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/36-dsc08319.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/37-dsc08332.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/38-dsc08366.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/39-dsc08381.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/40-dsc08426.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/41-dsc08455.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/42-dsc08465.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/43-dsc08550.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/44-dsc08573.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/45-dsc08607.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/46-dsc08618.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/47-dsc08666.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/48-dsc08773.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/49-dsc08828.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/50-dsc08898.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/51-dsc08901.jpg", width: 1800, height: 1200 },
  { src: "/images/rinconcito/52-dsc08942.jpg", width: 1200, height: 1800 },
  { src: "/images/rinconcito/53-elrinconcitomix-hero.jpg", width: 1800, height: 1350 },
  { src: "/images/rinconcito/54-img-4348.jpg", width: 1800, height: 1442 },
] as const

export const featuredPhotos = {
  table: rinconcitoPhotos[52],
  storefront: rinconcitoPhotos[1],
  classVisit: rinconcitoPhotos[2],
  team: rinconcitoPhotos[3],
  lime: rinconcitoPhotos[9],
  shrimp: rinconcitoPhotos[53],
  tacos: rinconcitoPhotos[20],
  service: rinconcitoPhotos[31],
} as const

export const photoAlt = {
  food: {
    en: "Rinconcito Domex Dominican and Mexican fusion dishes",
    es: "Platos de fusión dominicana y mexicana de Rinconcito Domex",
  },
  storefront: {
    en: "Rinconcito Domex storefront on Dekalb Avenue",
    es: "Fachada de Rinconcito Domex en Dekalb Avenue",
  },
  team: {
    en: "The Rinconcito Domex team inside the restaurant",
    es: "El equipo de Rinconcito Domex dentro del restaurante",
  },
  visit: {
    en: "A group visit outside Rinconcito Domex",
    es: "Una visita de grupo afuera de Rinconcito Domex",
  },
  detail: {
    en: "A fresh lime squeezed over tacos",
    es: "Un limón fresco exprimido sobre tacos",
  },
} as const
