export type Item = {
  label: string
  detail?: string
}

export type Section = {
  title: string
  note?: string
  items: Item[]
}

export const photoSections: Section[] = [
  {
    title: "1. Portada / Hero (fondo principal)",
    items: [
      {
        label: "1 foto ambiente de la consulta o del doctor atendiendo",
        detail:
          "Horizontal, alta resolución, tono oscuro y elegante. Es el fondo del titular “Belleza natural, resultados seguros.”",
      },
    ],
  },
  {
    title: "2. Sobre el Dr. Daniel Muñoz",
    items: [
      {
        label: "1 retrato profesional del doctor",
        detail: "Vertical o cuadrado, buena iluminación.",
      },
    ],
  },
  {
    title: "3. Tratamientos destacados (idealmente antes / después)",
    items: [
      { label: "Armonización Facial", detail: "Perfil de rostro, antes y después." },
      { label: "Diseño y Escultura Labial", detail: "Primer plano de labios." },
      { label: "Rinomodelación", detail: "Perfil de nariz / rostro." },
    ],
  },
  {
    title: "4. Nuestros Servicios (Tratamientos Faciales)",
    items: [{ label: "1 foto del doctor realizando un tratamiento facial en consulta" }],
  },
  {
    title: "5. Fotos de referencia de cada tratamiento facial",
    note: "Aparecen al hacer clic en cada precio. Se necesita 1 foto que muestre cómo se realiza cada uno.",
    items: [
      { label: "Ojeras con Ácido Hialurónico" },
      { label: "Toxina Botulínica (tercio superior / inferior)" },
      { label: "Definición de Mentón, Pómulos y Mandíbula" },
      { label: "Vitaminas Faciales / Mesoterapia" },
      {
        label: "Opcionales (si existen)",
        detail: "Exosomas, Bruxismo, Diseño de labios y Rinomodelación con Ácido Hialurónico.",
      },
    ],
  },
  {
    title: "6. Bioestimuladores de Colágeno",
    items: [{ label: "1 foto del procedimiento (radiofrecuencia / aplicación)" }],
  },
  {
    title: "7. Armonización Facial",
    items: [{ label: "1 foto de resultado (rostro con piel radiante)" }],
  },
  {
    title: "8. Tratamientos Corporales",
    items: [
      {
        label: "1 foto de tratamiento corporal",
        detail: "Glúteos / hilos tensores. Discreta y elegante.",
      },
    ],
  },
  {
    title: "9. Packs Especiales",
    items: [{ label: "1 foto de tratamiento facial con roller / masaje" }],
  },
  {
    title: "10. Resultados que hablan por sí mismos (2 tarjetas)",
    items: [
      { label: "“Ver Galería”", detail: "1 foto de un caso de éxito." },
      { label: "“Agendar Consulta”", detail: "1 foto lifestyle (paciente / doctor)." },
    ],
  },
]

export const videoSection: Section = {
  title: "Videos y Reels",
  note: "Sección dedicada del sitio.",
  items: [
    {
      label: "Reels o videos verticales usados en redes sociales",
      detail:
        "Formato 9:16, archivo .mp4. Puede enviar los que quiera destacar; la página permite subir varios y reproducirlos.",
    },
  ],
}

export const dataSection: Section = {
  title: "Datos a confirmar (texto, no imágenes)",
  items: [
    {
      label: "Teléfono, correo y ciudades reales",
      detail: "Actualmente: +56 9 1234 5678 · contacto@drdanielmunoz.cl · Santiago – Antofagasta – Calama.",
    },
    {
      label: "Cifras y precios",
      detail: "“+12 años”, “+1,200 pacientes”, etc., y los precios, por si cambiaron.",
    },
  ],
}

export const deliveryTips = [
  "Enviar todo en alta resolución.",
  "Fotos de rostro: en vertical o cuadrado.",
  "Portada y fotos de secciones: en horizontal.",
  "Reels: en formato .mp4 vertical (9:16).",
]
