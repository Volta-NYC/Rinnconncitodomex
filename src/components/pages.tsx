import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  HeartHandshake,
  Landmark,
  MapPin,
  Phone,
  School,
  Sparkles,
} from "lucide-react"
import { MenuSection } from "@/components/menu-section"
import { Reveal } from "@/components/reveal"
import { SiteFrame } from "@/components/site-chrome"
import { DishMarquee, SplitDuo, TileBand } from "@/components/visuals"
import {
  address,
  globalCopy,
  mapHref,
  phoneDisplay,
  phoneHref,
  route,
  type Locale,
  type Sector,
} from "@/lib/site"

const homeCopy = {
  en: {
    eyebrow: "Brooklyn-born · MWBE-certified",
    titleTop: "Dominican heart.",
    titleBottom: "Mexican soul.",
    heroCopy:
      "Personalized catering that brings two rich culinary traditions to celebrations, workplaces, schools, and public-sector organizations across New York.",
    explore: "Explore catering",
    proof: "Made for meaningful gatherings",
    proofSub: "Fresh ingredients · Personalized service · Memorable flavor",
    introKicker: "One table. Countless reasons to gather.",
    introTitle: "Catering with culture at the center.",
    introBody:
      "Rinconcito Domex was created to bring authentic Dominican and Mexican flavors together in an experience that feels accessible, generous, and full of culture. Every event starts with listening—and every menu is shaped around the people at the table.",
    audiencesTitle: "Built for New York’s tables",
    audiencesBody:
      "From everyday teams to community institutions, we’re ready to talk through the size, setting, and needs of your event.",
    craftKicker: "Our approach",
    craftTitle: "Good food is only the beginning.",
    craftBody:
      "We pair fresh, high-quality ingredients with attentive planning and personalized service—so your catering feels considered from the first conversation to the final plate.",
    points: ["Fresh, quality ingredients", "Menus shaped around your event", "Service with care and attention"],
    ctaKicker: "Planning an event?",
    ctaTitle: "Let’s make your next table unforgettable.",
    ctaBody: "Tell us what you’re planning. We’ll start with a conversation about your event and your needs.",
  },
  es: {
    eyebrow: "Nacido en Brooklyn · Certificado MWBE",
    titleTop: "Corazón dominicano.",
    titleBottom: "Alma mexicana.",
    heroCopy:
      "Catering personalizado que une dos grandes tradiciones culinarias para celebraciones, empresas, escuelas y organizaciones del sector público en Nueva York.",
    explore: "Explorar catering",
    proof: "Creado para encuentros con significado",
    proofSub: "Ingredientes frescos · Servicio personalizado · Sabor memorable",
    introKicker: "Una mesa. Infinitas razones para reunirnos.",
    introTitle: "Catering con la cultura en el centro.",
    introBody:
      "Rinconcito Domex nació para combinar los sabores auténticos de las cocinas dominicana y mexicana en una experiencia accesible, generosa y llena de cultura. Cada evento comienza escuchando, y cada menú se adapta a las personas que compartirán la mesa.",
    audiencesTitle: "Hecho para las mesas de Nueva York",
    audiencesBody:
      "Desde equipos de trabajo hasta instituciones comunitarias, estamos listos para conversar sobre el tamaño, el lugar y las necesidades de tu evento.",
    craftKicker: "Nuestro enfoque",
    craftTitle: "La buena comida es solo el comienzo.",
    craftBody:
      "Combinamos ingredientes frescos y de alta calidad con planificación atenta y servicio personalizado, para que tu catering se sienta cuidado desde la primera conversación hasta el último plato.",
    points: ["Ingredientes frescos y de calidad", "Menús adaptados a tu evento", "Servicio atento y personalizado"],
    ctaKicker: "¿Estás planeando un evento?",
    ctaTitle: "Hagamos que tu próxima mesa sea inolvidable.",
    ctaBody: "Cuéntanos qué estás planeando. Comenzaremos conversando sobre tu evento y tus necesidades.",
  },
} as const

const audienceCopy = {
  en: [
    { slug: "schools", icon: School, number: "01", title: "Schools", body: "Catering conversations shaped around your school community, schedule, and event." },
    { slug: "government", icon: Landmark, number: "02", title: "Government", body: "An MWBE-certified Brooklyn business ready to discuss public-sector catering needs." },
    { slug: "corporate", icon: Building2, number: "03", title: "Corporate", body: "Flavor-forward catering for meetings, celebrations, and company gatherings." },
  ],
  es: [
    { slug: "schools", icon: School, number: "01", title: "Escuelas", body: "Conversaciones de catering adaptadas a tu comunidad escolar, horario y evento." },
    { slug: "government", icon: Landmark, number: "02", title: "Gobierno", body: "Una empresa de Brooklyn certificada MWBE, lista para conversar sobre necesidades del sector público." },
    { slug: "corporate", icon: Building2, number: "03", title: "Empresas", body: "Catering lleno de sabor para reuniones, celebraciones y eventos corporativos." },
  ],
} as const

export function HomePage({ locale }: { locale: Locale }) {
  const t = homeCopy[locale]
  const g = globalCopy[locale]
  return (
    <SiteFrame locale={locale}>
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid shell">
          <div className="hero-copy">
            <Reveal>
              <div className="eyebrow light"><span />{t.eyebrow}</div>
              <h1>
                <span>{t.titleTop}</span>
                <em>{t.titleBottom}</em>
              </h1>
              <p>{t.heroCopy}</p>
              <div className="hero-actions">
                <Link className="button button-sun" href={route(locale, "/contact")}>
                  {g.quote}<ArrowRight size={18} />
                </Link>
                <Link className="text-link light-link" href={route(locale, "/catering")}>
                  {t.explore}<ChevronRight size={17} />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero-visual" delay={0.14}>
            <div className="hero-image-frame">
              <SplitDuo
                src="/images/fresh-cuisine.jpg"
                alt="A catering table set for service"
                priority
                sizes="(max-width: 900px) 92vw, 48vw"
              />
            </div>
            <div className="culture-seal" aria-hidden="true">
              <span>DOM</span><i>×</i><span>MEX</span>
            </div>
            <div className="mwbe-card">
              <BadgeCheck />
              <div><strong>{g.mwbe}</strong><span>{g.brooklyn}</span></div>
            </div>
          </Reveal>
        </div>
        <div className="hero-proof shell">
          <span>{t.proof}</span><i /> <span>{t.proofSub}</span>
        </div>
      </section>

      <DishMarquee locale={locale} />

      <section className="intro-band">
        <div className="intro-section section shell">
          <Reveal className="intro-content">
            <div className="eyebrow"><span />{t.introKicker}</div>
            <h2>{t.introTitle}</h2>
          </Reveal>
          <Reveal className="intro-body" delay={0.08}>
            <p>{t.introBody}</p>
            <Link className="text-link" href={route(locale, "/about")}>{locale === "en" ? "Our story" : "Nuestra historia"}<ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <TileBand />

      <section className="audience-section section">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div><div className="eyebrow light"><span />{locale === "en" ? "Who we serve" : "A quién servimos"}</div><h2>{t.audiencesTitle}</h2></div>
            <p>{t.audiencesBody}</p>
          </Reveal>
          <div className="audience-grid">
            {audienceCopy[locale].map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.slug} delay={index * 0.08}>
                  <Link className="audience-card" href={route(locale, `/catering/${item.slug}`)}>
                    <div className="audience-top"><span>{item.number}</span><Icon aria-hidden="true" /></div>
                    <div className="audience-body"><h3>{item.title}</h3><p>{item.body}</p></div>
                    <span className="audience-cta">
                      <span className="round-arrow"><ArrowRight /></span>
                      {g.explore}
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="craft-band">
        <div className="craft-section section shell">
          <Reveal className="craft-images">
            <div className="craft-main-image">
              <SplitDuo src="/images/personal-service.jpg" alt="A chef preparing food in a kitchen" sizes="(max-width: 800px) 92vw, 42vw" />
            </div>
            <div className="craft-accent">
              <SplitDuo src="/images/food-prep.jpg" alt="Ingredients on a preparation surface" sizes="260px" />
            </div>
            <div className="craft-stamp"><Sparkles /><span>DOMEX</span><small>Brooklyn · NY</small></div>
          </Reveal>
          <Reveal className="craft-copy" delay={0.1}>
            <div className="eyebrow light"><span />{t.craftKicker}</div>
            <h2>{t.craftTitle}</h2>
            <p>{t.craftBody}</p>
            <ul>{t.points.map((point) => <li key={point}><Check />{point}</li>)}</ul>
            <Link className="button button-dark" href={route(locale, "/catering")}>{locale === "en" ? "See our catering approach" : "Conoce nuestro enfoque"}<ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <QuoteBand locale={locale} />
    </SiteFrame>
  )
}

function QuoteBand({ locale }: { locale: Locale }) {
  const t = homeCopy[locale]
  const g = globalCopy[locale]
  return (
    <section className="quote-band">
      <div className="quote-orb one" /><div className="quote-orb two" />
      <Reveal className="shell quote-content">
        <div className="eyebrow light centered"><span />{t.ctaKicker}<span /></div>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaBody}</p>
        <div className="quote-actions">
          <Link className="button button-sun" href={route(locale, "/contact")}>{g.quote}<ArrowRight /></Link>
          <a className="button button-ghost" href={phoneHref}><Phone />{phoneDisplay}</a>
        </div>
      </Reveal>
    </section>
  )
}

const cateringCopy = {
  en: {
    kicker: "Catering for New York",
    title: "Food that brings people closer.",
    body: "Every gathering has its own purpose. We start by understanding yours, then shape a catering conversation around your people, setting, and needs.",
    planTitle: "A thoughtful start to every event",
    planBody: "Whether you’re planning a wedding, birthday, corporate gathering, school event, or public-sector occasion, begin with the details that matter most.",
    steps: [
      ["Share the occasion", "Tell us the event type, date, location, and expected number of guests."],
      ["Talk through your needs", "Bring your preferences, schedule, and any dietary considerations to the conversation."],
      ["Shape the experience", "We’ll discuss a personalized direction built around your event."],
    ],
    choose: "Choose your starting point",
  },
  es: {
    kicker: "Catering para Nueva York",
    title: "Comida que acerca a las personas.",
    body: "Cada encuentro tiene su propio propósito. Comenzamos por entender el tuyo y luego damos forma a una conversación de catering enfocada en tus invitados, el lugar y tus necesidades.",
    planTitle: "Un comienzo atento para cada evento",
    planBody: "Ya sea una boda, un cumpleaños, una reunión corporativa, un evento escolar o una ocasión del sector público, comienza con los detalles más importantes.",
    steps: [
      ["Comparte la ocasión", "Cuéntanos el tipo de evento, la fecha, el lugar y la cantidad estimada de invitados."],
      ["Conversemos sobre tus necesidades", "Comparte tus preferencias, horario y cualquier consideración alimentaria."],
      ["Demos forma a la experiencia", "Hablaremos sobre una dirección personalizada para tu evento."],
    ],
    choose: "Elige por dónde comenzar",
  },
} as const

export function CateringPage({ locale }: { locale: Locale }) {
  const t = cateringCopy[locale]
  return (
    <SiteFrame locale={locale}>
      <PageHero kicker={t.kicker} title={t.title} body={t.body} image="/images/fresh-cuisine.jpg" imageAlt="A carefully set event table" />
      <section className="planning-band">
        <div className="section shell planning-section">
          <Reveal className="planning-heading"><h2>{t.planTitle}</h2><p>{t.planBody}</p></Reveal>
          <div className="steps-grid">
            {t.steps.map(([title, body], index) => (
              <Reveal className="step-card" key={title} delay={index * 0.06}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <DishMarquee locale={locale} />
      <MenuSection locale={locale} />
      <section className="sector-list section">
        <div className="shell">
          <Reveal><div className="eyebrow light"><span />{locale === "en" ? "Audience-focused catering" : "Catering enfocado"}</div><h2>{t.choose}</h2></Reveal>
          <div className="sector-links">
            {audienceCopy[locale].map((item) => {
              const Icon = item.icon
              return <Link key={item.slug} href={route(locale, `/catering/${item.slug}`)}><Icon /><span><strong>{item.title}</strong><small>{item.body}</small></span><ArrowRight /></Link>
            })}
          </div>
        </div>
      </section>
      <QuoteBand locale={locale} />
    </SiteFrame>
  )
}

const sectors = {
  en: {
    schools: { label: "School catering", title: "A better food conversation for your school community.", body: "Planning for a school starts with understanding the people, timing, and purpose of the event. Share the details, and we’ll discuss a personalized catering direction.", bullets: ["School and community events", "Schedule and guest-count planning", "Dietary needs discussed during inquiry"], prompt: "Helpful details to share", details: ["Event date and location", "Estimated number of guests", "Schedule and service timing", "Dietary considerations"] },
    government: { label: "Government catering", title: "A local MWBE partner for public-sector gatherings.", body: "Rinconcito Domex is a certified MWBE business based in Brooklyn. We welcome conversations with agencies and organizations planning catered meetings and events.", bullets: ["MWBE-certified business", "Brooklyn-based", "Personalized event conversations"], prompt: "Helpful details to share", details: ["Agency or organization", "Event purpose and date", "Location and guest count", "Procurement contact details"] },
    corporate: { label: "Corporate catering", title: "Bring more culture to the company table.", body: "From meetings to celebrations, we bring Dominican and Mexican flavor together with a personal approach shaped around your company gathering.", bullets: ["Meetings and company gatherings", "Celebrations and special occasions", "A personalized planning approach"], prompt: "Helpful details to share", details: ["Company and event type", "Date, timing, and location", "Estimated number of guests", "Preferences and dietary considerations"] },
  },
  es: {
    schools: { label: "Catering escolar", title: "Una mejor conversación de comida para tu comunidad escolar.", body: "Planificar para una escuela comienza por entender a las personas, el horario y el propósito del evento. Comparte los detalles y hablaremos sobre una dirección de catering personalizada.", bullets: ["Eventos escolares y comunitarios", "Planificación de horarios e invitados", "Necesidades alimentarias tratadas durante la consulta"], prompt: "Detalles útiles para compartir", details: ["Fecha y lugar del evento", "Cantidad estimada de invitados", "Horario y momento del servicio", "Consideraciones alimentarias"] },
    government: { label: "Catering gubernamental", title: "Un socio MWBE local para eventos del sector público.", body: "Rinconcito Domex es una empresa certificada MWBE con sede en Brooklyn. Recibimos con gusto consultas de agencias y organizaciones que estén planificando reuniones y eventos.", bullets: ["Empresa certificada MWBE", "Con sede en Brooklyn", "Conversaciones personalizadas para cada evento"], prompt: "Detalles útiles para compartir", details: ["Agencia u organización", "Propósito y fecha del evento", "Lugar y cantidad de invitados", "Datos del contacto de adquisiciones"] },
    corporate: { label: "Catering corporativo", title: "Lleva más cultura a la mesa de tu empresa.", body: "Desde reuniones hasta celebraciones, unimos sabores dominicanos y mexicanos con un enfoque personal adaptado al encuentro de tu empresa.", bullets: ["Reuniones y encuentros de empresa", "Celebraciones y ocasiones especiales", "Un enfoque de planificación personalizado"], prompt: "Detalles útiles para compartir", details: ["Empresa y tipo de evento", "Fecha, horario y lugar", "Cantidad estimada de invitados", "Preferencias y consideraciones alimentarias"] },
  },
} as const

export function SectorPage({ locale, sector }: { locale: Locale; sector: Sector }) {
  const t = sectors[locale][sector]
  const icons = { schools: School, government: Landmark, corporate: Building2 }
  const Icon = icons[sector]
  return (
    <SiteFrame locale={locale}>
      <section className="sector-hero">
        <div className="shell sector-hero-grid">
          <Reveal className="sector-hero-copy">
            <div className="sector-icon"><Icon /></div>
            <div className="eyebrow light"><span />{t.label}</div>
            <h1>{t.title}</h1><p>{t.body}</p>
            <Link className="button button-sun" href={route(locale, "/contact")}>{globalCopy[locale].quote}<ArrowRight /></Link>
          </Reveal>
          <Reveal className="sector-summary" delay={0.1}>
            <span>{locale === "en" ? "At a glance" : "En resumen"}</span>
            <ul>{t.bullets.map((item) => <li key={item}><Check />{item}</li>)}</ul>
          </Reveal>
        </div>
      </section>
      <TileBand />
      <section className="detail-band">
        <div className="section shell detail-section">
          <Reveal><h2>{t.prompt}</h2></Reveal>
          <div className="detail-list">{t.details.map((item, index) => <Reveal key={item} delay={index * 0.05}><span>0{index + 1}</span><p>{item}</p></Reveal>)}</div>
        </div>
      </section>
      <QuoteBand locale={locale} />
    </SiteFrame>
  )
}

const aboutCopy = {
  en: { kicker: "Our story", title: "Born from two kitchens. Built for one New York.", body: "Rinconcito Domex began with a mission to combine authentic Dominican and Mexican flavors in one accessible, culture-filled experience.", mission: "Our mission", missionTitle: "Food that remembers where it comes from.", missionBody: "We believe memorable food begins with quality ingredients, cultural pride, and genuine care for the people being served. As we grow, our focus remains on personalized catering and becoming a trusted partner for New York organizations and businesses.", values: [["Culture", "Two culinary traditions, brought together with respect."], ["Care", "A personal approach shaped around each event."], ["Quality", "Fresh, high-quality ingredients in every dish."]] },
  es: { kicker: "Nuestra historia", title: "Nacido de dos cocinas. Creado para un solo Nueva York.", body: "Rinconcito Domex nació con la misión de combinar sabores auténticos dominicanos y mexicanos en una experiencia accesible y llena de cultura.", mission: "Nuestra misión", missionTitle: "Comida que recuerda de dónde viene.", missionBody: "Creemos que una comida memorable comienza con ingredientes de calidad, orgullo cultural y un cuidado genuino por las personas. A medida que crecemos, mantenemos nuestro enfoque en el catering personalizado y en convertirnos en un socio confiable para organizaciones y empresas de Nueva York.", values: [["Cultura", "Dos tradiciones culinarias unidas con respeto."], ["Atención", "Un enfoque personal adaptado a cada evento."], ["Calidad", "Ingredientes frescos y de alta calidad en cada plato."]] },
} as const

export function AboutPage({ locale }: { locale: Locale }) {
  const t = aboutCopy[locale]
  return <SiteFrame locale={locale}>
    <PageHero kicker={t.kicker} title={t.title} body={t.body} image="/images/personal-service.jpg" imageAlt="Chef preparing food in a professional kitchen" />
    <section className="story-band">
      <div className="section shell story-section">
        <Reveal className="story-copy"><div className="eyebrow"><span />{t.mission}</div><h2>{t.missionTitle}</h2><p>{t.missionBody}</p><div className="mwbe-inline"><BadgeCheck /><span><strong>{globalCopy[locale].mwbe}</strong><small>{globalCopy[locale].brooklyn}</small></span></div></Reveal>
        <div className="values-list">{t.values.map(([title, body], index) => <Reveal key={title} delay={index * 0.06}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></Reveal>)}</div>
      </div>
    </section>
    <DishMarquee locale={locale} />
    <QuoteBand locale={locale} />
  </SiteFrame>
}

const contactCopy = {
  en: { kicker: "Start a conversation", title: "Tell us what you’re bringing to the table.", body: "Planning a catered event? Call us to discuss your date, location, guest count, and what you have in mind.", phone: "Catering inquiries", visit: "Visit us", directions: "Get directions", hours: "Business hours", weekdays: "Monday–Friday", closed: "Saturday–Sunday", closedValue: "Closed", ready: "Before you call", readyBody: "Having these details ready will help us understand your event.", checklist: ["Event date and location", "Type of gathering", "Estimated guest count", "Preferences or dietary considerations"] },
  es: { kicker: "Comienza una conversación", title: "Cuéntanos qué traerás a la mesa.", body: "¿Estás planeando un evento? Llámanos para conversar sobre la fecha, el lugar, la cantidad de invitados y lo que tienes en mente.", phone: "Consultas de catering", visit: "Visítanos", directions: "Cómo llegar", hours: "Horario", weekdays: "Lunes–viernes", closed: "Sábado–domingo", closedValue: "Cerrado", ready: "Antes de llamar", readyBody: "Tener estos detalles listos nos ayudará a entender tu evento.", checklist: ["Fecha y lugar del evento", "Tipo de encuentro", "Cantidad estimada de invitados", "Preferencias o consideraciones alimentarias"] },
} as const

export function ContactPage({ locale }: { locale: Locale }) {
  const t = contactCopy[locale]
  return <SiteFrame locale={locale}>
    <section className="contact-hero">
      <div className="shell contact-grid">
        <Reveal className="contact-title"><div className="eyebrow light"><span />{t.kicker}</div><h1>{t.title}</h1><p>{t.body}</p></Reveal>
        <Reveal className="contact-card" delay={0.1}>
          <div className="contact-block"><span className="contact-icon"><Phone /></span><div><small>{t.phone}</small><a href={phoneHref}>{phoneDisplay}</a></div></div>
          <div className="contact-block"><span className="contact-icon"><MapPin /></span><div><small>{t.visit}</small><p>{address}</p><a className="mini-link" href={mapHref} target="_blank" rel="noreferrer">{t.directions}<ArrowRight /></a></div></div>
          <div className="contact-block"><span className="contact-icon"><Clock3 /></span><div><small>{t.hours}</small><p>{t.weekdays}<br /><strong>9:00 AM–5:00 PM</strong></p><p className="closed-hours">{t.closed}<br /><strong>{t.closedValue}</strong></p></div></div>
        </Reveal>
      </div>
    </section>
    <TileBand />
    <section className="callprep-band">
      <div className="section shell call-prep">
        <Reveal className="call-prep-heading"><h2>{t.ready}</h2><p>{t.readyBody}</p></Reveal>
        <div className="checklist">{t.checklist.map((item, index) => <Reveal key={item} delay={index * 0.05}><span>{index + 1}</span><p>{item}</p><Check /></Reveal>)}</div>
        <Reveal className="direct-call"><HeartHandshake /><div><span>{locale === "en" ? "Ready when you are" : "Cuando estés listo"}</span><a href={phoneHref}>{globalCopy[locale].call} · {phoneDisplay}</a></div></Reveal>
      </div>
    </section>
  </SiteFrame>
}

function PageHero({ kicker, title, body, image, imageAlt }: { kicker: string; title: string; body: string; image: string; imageAlt: string }) {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <Reveal className="page-hero-copy">
            <div className="eyebrow light"><span />{kicker}</div>
            <h1>{title}</h1>
            <p>{body}</p>
          </Reveal>
          <Reveal className="page-hero-image" delay={0.1}>
            <SplitDuo src={image} alt={imageAlt} priority sizes="(max-width: 900px) 92vw, 46vw" />
          </Reveal>
        </div>
      </section>
      <TileBand />
    </>
  )
}
