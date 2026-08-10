import type { Copy } from "./copy"

/**
 * Spanish copy — the client's original language. Where the scrape gave us their exact
 * wording ("Catering Gourmet para Todo Evento", the three pillars, the About section),
 * that wording is preserved verbatim rather than re-translated from the English.
 */
export const copyEs: Copy = {
  meta: {
    title: "Rinconcito Domex | Catering Dominicano y Mexicano en Brooklyn",
    description:
      "Catering gourmet para todo evento. Cocina dominicana y mexicana para bodas, cumpleaños, reuniones corporativas, escuelas y agencias en Nueva York. Empresa certificada MWBE en Brooklyn.",
    titleSuffix: "Rinconcito Domex",
  },
  nav: {
    home: "Inicio",
    catering: "Catering",
    about: "Nuestra historia",
    contact: "Contacto",
    switchLanguage: "English",
    openMenu: "Menú",
    closeMenu: "Cerrar",
    skipToContent: "Ir al contenido",
  },
  actions: {
    requestQuote: "Solicitar cotización",
    call: "Llamar",
    explore: "Explorar",
    directions: "Cómo llegar",
    seeCatering: "Conoce nuestro proceso",
    ourStory: "Nuestra historia",
  },
  brand: {
    tagline: "Catering Dominicano y Mexicano",
    mwbe: "Empresa certificada MWBE",
    location: "Brooklyn, Nueva York",
    tableLine: "Dos cocinas. Una misma mesa.",
    rights: "Todos los derechos reservados.",
  },
  home: {
    eyebrow: "Catering en todo Nueva York",
    titleLead: "Catering gourmet para",
    titleAccent: "todo evento",
    intro:
      "Deliciosa comida y servicio excepcional para tus celebraciones — cocina dominicana y mexicana reunidas en una misma mesa, en Brooklyn y en todo Nueva York.",
    proof: "Empresa certificada MWBE",
    proofDetail: "Brooklyn · Servicio en los cinco condados",
    chaptersEyebrow: "Cómo funciona",
    chaptersTitle: "Tres pasos hacia una mesa que es tuya",
    chapters: [
      {
        number: "1",
        title: "Cuéntanos la ocasión",
        body: "El evento, la fecha, el lugar y cuántos invitados esperas. Con eso podemos comenzar.",
      },
      {
        number: "2",
        title: "Conversemos",
        body: "Revisamos tus preferencias, tu horario y cualquier consideración alimentaria — una conversación, no un formulario.",
      },
      {
        number: "3",
        title: "Demos forma a la experiencia",
        body: "Construimos una dirección pensada en tus invitados y tu lugar, y la cotizamos. Cada evento es distinto, y cada menú también.",
      },
    ],
    pillarsEyebrow: "En lo que creemos",
    pillarsTitle: "Nuestra misión, en tres partes",
    pillars: [
      {
        title: "Nuestra misión",
        body: "Nos dedicamos a ofrecer experiencias culinarias excepcionales para todo tipo de eventos, satisfaciendo las necesidades de nuestros clientes mediante un servicio personalizado y un menú delicioso que impresiona a todos los invitados.",
      },
      {
        title: "Calidad y sabor",
        body: "Utilizamos solo ingredientes frescos y de alta calidad en todos nuestros platillos. Creemos que la comida debe ser no solo deliciosa, sino también saludable y nutritiva, asegurando que cada bocado sea una experiencia memorable.",
      },
      {
        title: "Servicio personalizado",
        body: "Entendemos que cada evento es único, por lo que ofrecemos un servicio personalizado que se adapta a tus necesidades específicas. Ya sea una boda, un cumpleaños o una reunión corporativa, estamos aquí para hacer realidad tu visión.",
      },
    ],
    audiencesEyebrow: "A quién servimos",
    audiencesTitle: "Hecho para las mesas donde come Nueva York",
    audiencesBody:
      "Desde programas escolares y ocasiones del sector público hasta reuniones de empresa y celebraciones familiares, el enfoque comienza igual: por tus invitados.",
    craftEyebrow: "En la cocina",
    craftTitle: "Dos tradiciones culinarias, cocinadas lado a lado",
    craftBody:
      "Rinconcito Domex nació con la misión de combinar los sabores auténticos de la cocina dominicana y mexicana en una experiencia única, accesible y llena de cultura.",
    craftPoints: [
      "Ingredientes frescos y de alta calidad en cada platillo",
      "Menús pensados para tus invitados, no una lista fija",
      "Servicio que se adapta a tu lugar y tu horario",
    ],
  },
  catering: {
    eyebrow: "Catering para Nueva York",
    title: "Comida que acerca a las personas.",
    body: "Cada encuentro tiene su propio propósito. Comenzamos por entender el tuyo y luego damos forma a una conversación de catering enfocada en tus invitados, el lugar y lo que el día realmente necesita.",
    stepsTitle: "Un comienzo atento para cada evento",
    stepsBody:
      "Ya sea una boda, un cumpleaños, una reunión corporativa, un evento escolar o una ocasión del sector público, comienza con los detalles más importantes.",
    steps: [
      {
        title: "Comparte la ocasión",
        body: "Cuéntanos el tipo de evento, la fecha, el lugar y la cantidad estimada de invitados.",
      },
      {
        title: "Conversemos sobre tus necesidades",
        body: "Comparte tus preferencias, tu horario y cualquier consideración alimentaria.",
      },
      {
        title: "Demos forma a la experiencia",
        body: "Hablaremos sobre una dirección personalizada para tu evento y la cotizaremos.",
      },
    ],
    menuTitle: "Sobre el menú",
    menuHeadline: "No existe un menú fijo.",
    menuBody:
      "No publicamos un menú fijo, porque no cocinamos con uno. Los platillos se eligen según tus invitados, el lugar y la temporada — dominicanos, mexicanos, o combinando ambos.",
    menuNote:
      "Llámanos y conversamos sobre lo que mejor le queda a tu evento.",
    audiencesTitle: "Elige por dónde comenzar",
  },
  audiences: {
    schools: {
      label: "Escuelas y programas",
      title: "Catering para escuelas y programas estudiantiles",
      body: "Comida para eventos escolares, reuniones del personal y programas estudiantiles — planificada según tu calendario, tu espacio y la cantidad de personas.",
      bullets: [
        "Eventos para un salón, un grado o todo el personal",
        "Consideraciones alimentarias conversadas desde el inicio",
        "Horarios ajustados a la jornada escolar",
      ],
      prompt: "Lo que te preguntaremos",
      details: [
        "La ocasión y el grupo de edad al que se dirige",
        "Fecha, hora de inicio y duración del servicio",
        "Dónde se servirá la comida y qué permite el espacio",
        "Cantidad de invitados y requerimientos alimentarios del grupo",
      ],
    },
    agencies: {
      label: "Gobierno y sector público",
      title: "Catering para agencias y ocasiones del sector público",
      body: "Como empresa certificada MWBE, estamos preparados para trabajar con organizaciones del sector público en todo Nueva York en las ocasiones que reúnen a su gente.",
      bullets: [
        "Empresa certificada MWBE",
        "Familiarizados con los tiempos de contratación pública",
        "Servicio a la medida del lugar y del horario",
      ],
      prompt: "Lo que te preguntaremos",
      details: [
        "El carácter de la ocasión y quiénes asistirán",
        "Fecha, lugar y el horario en que debe darse el servicio",
        "Cantidad de invitados y requerimientos alimentarios",
        "Cualquier documentación o proceso que requiera tu organización",
      ],
    },
    corporate: {
      label: "Corporativo",
      title: "Catering para reuniones de empresa",
      body: "Reuniones, celebraciones de equipo y ocasiones con clientes — con un servicio que acompaña la reunión en lugar de interrumpirla.",
      bullets: [
        "Desde una junta pequeña hasta un evento de toda la empresa",
        "Montaje en tu oficina o en tu lugar de preferencia",
        "Un solo contacto desde la primera llamada hasta el servicio",
      ],
      prompt: "Lo que te preguntaremos",
      details: [
        "El tipo de reunión y su objetivo",
        "Fecha, hora y cómo debe encajar el servicio en la agenda",
        "Dónde será el evento y qué permite el espacio",
        "Cantidad de invitados y requerimientos alimentarios",
      ],
    },
    celebrations: {
      label: "Bodas y celebraciones",
      title: "Catering para bodas, cumpleaños y celebraciones familiares",
      body: "Las ocasiones para las que nació esta empresa. Bodas, cumpleaños y reuniones familiares, con los sabores que las hacen sentir como en casa.",
      bullets: [
        "Bodas, cumpleaños y reuniones familiares",
        "Cocina dominicana, mexicana o ambas",
        "Una dirección de menú construida contigo, no impuesta",
      ],
      prompt: "Lo que te preguntaremos",
      details: [
        "La celebración y lo que significa para quienes estarán ahí",
        "Fecha, lugar y cómo quieres que transcurra el día",
        "Cantidad de invitados y requerimientos alimentarios",
        "Los sabores que tu familia buscaría primero",
      ],
    },
  },
  about: {
    eyebrow: "Nuestra historia",
    title: "Dos culturas, una misma mesa.",
    body: "Rinconcito Domex es una empresa de comida y catering que nació para combinar los sabores auténticos de la cocina dominicana y mexicana en una experiencia única, accesible y llena de cultura.",
    storyTitle: "Hacia dónde vamos",
    story: [
      "Rinconcito Domex es una empresa de comida y catering. La empresa nació con la misión de combinar los sabores auténticos de la cocina dominicana y mexicana en una experiencia única, accesible y llena de cultura.",
      "Además de sus restaurantes, Rinconcito Domex continúa creciendo como una empresa certificada MWBE enfocada en expandir sus servicios de catering y convertirse en un socio confiable para organizaciones y empresas en Nueva York.",
      "Esa es la idea detrás de la mesa larga: dos cocinas que no suelen compartir mesa, cocinando para la misma reunión.",
    ],
    valuesTitle: "Lo que guía la cocina",
    mwbeTitle: "Empresa certificada MWBE",
    mwbeBody:
      "Rinconcito Domex es una empresa certificada MWBE (propiedad de minorías y mujeres), enfocada en convertirse en un socio confiable de catering para organizaciones y empresas en Nueva York.",
  },
  contact: {
    eyebrow: "Comunícate con nosotros",
    title: "Hablemos de tu evento.",
    body: "O, aún mejor, ¡ven a visitarnos! Llámanos y conversamos sobre la ocasión, la cantidad de invitados y lo que tu día realmente necesita.",
    phoneLabel: "Llámanos",
    visitLabel: "Visítanos",
    hoursLabel: "Horario",
    weekdays: "Lunes – viernes",
    weekend: "Sábado y domingo",
    weekendValue: "Cerrado",
    readyTitle: "Listos cuando llames",
    readyBody:
      "Tener estos cuatro datos a la mano hace que la primera conversación sea breve.",
    checklist: [
      "El tipo de evento y la fecha",
      "Dónde se llevará a cabo",
      "Cuántos invitados esperas",
      "Cualquier requerimiento alimentario del grupo",
    ],
    closingTitle: "Cuando estés listo",
  },
  quoteBand: {
    title: "Pongamos la mesa.",
    body: "Cuéntanos sobre la ocasión y damos forma al catering a su alrededor.",
  },
}
