export type Treatment = {
  name: string
  price: string
  /** Imagen de referencia que se muestra al hacer clic */
  image: string
  /** Descripción de cómo funciona el tratamiento */
  info: string
}

export type TreatmentGroup = {
  id: string
  title: string
  /** Imagen ilustrativa del grupo */
  image: string
  imageAlt: string
  treatments: Treatment[]
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export const stats = [
  { value: '+12 AÑOS', label: 'Experiencia' },
  { value: '+1,200 PACIENTES', label: 'Satisfechos' },
  { value: 'MIEMBRO ISAPS', label: 'Certificación' },
  { value: 'TECNOLOGÍA AVANZADA', label: 'Equipamiento' },
  { value: 'Seguridad', label: 'Prioridad' },
]

export const facialTreatments: Treatment[] = [
  {
    name: 'Ojeras con Ácido Hialurónico Redensity 2',
    price: '$280.000',
    image: '/images/treat-ojeras.png',
    info: 'Rellenamos el surco de la ojera con ácido hialurónico específico para la zona periocular, hidratando y aportando volumen para atenuar el aspecto de cansancio y las sombras bajo los ojos.',
  },
  {
    name: 'Exosomas Faciales',
    price: '$250.000 por sesión',
    image: '/images/treat-meso.png',
    info: 'Aplicación de exosomas que estimulan la regeneración celular, mejorando la textura, luminosidad y firmeza de la piel desde el interior.',
  },
  {
    name: 'Bruxismo con Toxina Botulínica',
    price: '$300.000',
    image: '/images/treat-toxina.png',
    info: 'Infiltración de toxina botulínica en el músculo masetero para relajar la mandíbula, reduciendo el apriete dental, el dolor y estilizando el contorno facial.',
  },
  {
    name: 'Diseño y Relleno de Labios Juvederm 1ml',
    price: '$270.000',
    image: '/images/featured-labios.png',
    info: 'Diseño personalizado de labios con ácido hialurónico Juvederm para aportar volumen, definición y proporción, siempre buscando un resultado natural.',
  },
  {
    name: 'Rinomodelación con Ácido Hialurónico',
    price: '$275.000',
    image: '/images/featured-rinomodelacion.png',
    info: 'Corrección no quirúrgica del perfil nasal con ácido hialurónico, disimulando el dorso, elevando la punta y armonizando la nariz en pocos minutos.',
  },
  {
    name: 'Vitaminas Faciales NCTF',
    price: '$150.000',
    image: '/images/treat-meso.png',
    info: 'Mesoterapia con el complejo NCTF que nutre la piel con vitaminas, aminoácidos y minerales, devolviendo hidratación profunda y luminosidad.',
  },
  {
    name: 'Definición de Mentón, Pómulos y Mandíbula',
    price: 'desde $270.000',
    image: '/images/treat-mandibula.png',
    info: 'Modelamos los tercios medio e inferior del rostro con ácido hialurónico de alta densidad para definir pómulos, mentón y línea mandibular.',
  },
  {
    name: 'Toxina Botulínica - Tercio Superior o Inferior',
    price: '$275.000',
    image: '/images/treat-toxina.png',
    info: 'Suaviza las líneas de expresión relajando la musculatura del tercio superior o inferior, previniendo la aparición de arrugas dinámicas.',
  },
]

export const treatmentGroups: TreatmentGroup[] = [
  {
    id: 'bioestimuladores',
    title: 'Bioestimuladores de Colágeno',
    image: '/images/bioestimuladores.png',
    imageAlt: 'Paciente recibiendo un tratamiento facial de bioestimulación',
    treatments: [
      {
        name: 'Radiesse',
        price: '$650.000',
        image: '/images/bioestimuladores.png',
        info: 'Bioestimulador de hidroxiapatita cálcica que estimula la producción natural de colágeno, aportando firmeza y sostén al rostro de forma progresiva.',
      },
      {
        name: 'HarmonyCa',
        price: '$650.000',
        image: '/images/bioestimuladores.png',
        info: 'Combina relleno inmediato con bioestimulación de colágeno, ofreciendo un efecto lifting natural y duradero.',
      },
      {
        name: 'Sculptra',
        price: '$690.000',
        image: '/images/bioestimuladores.png',
        info: 'Ácido poli-L-láctico que reactiva la síntesis de colágeno, restaurando volumen y mejorando la calidad de la piel gradualmente.',
      },
      {
        name: 'Stim',
        price: '$580.000',
        image: '/images/bioestimuladores.png',
        info: 'Bioestimulador que revitaliza la piel promoviendo la regeneración de colágeno para un aspecto más firme y descansado.',
      },
    ],
  },
  {
    id: 'armonizacion',
    title: 'Armonización Facial',
    image: '/images/armonizacion-face.png',
    imageAlt: 'Rostro de mujer con piel radiante tras armonización facial',
    treatments: [
      {
        name: 'Bioestimuladores',
        price: 'desde $580.000',
        image: '/images/bioestimuladores.png',
        info: 'Estimulación de colágeno para recuperar firmeza y sostén, base de una armonización facial natural.',
      },
      {
        name: 'Ácido Hialurónico 1ml',
        price: 'desde $250.000',
        image: '/images/armonizacion-face.png',
        info: 'Volumen y proyección precisa en la zona a tratar con 1ml de ácido hialurónico de grado médico.',
      },
      {
        name: 'Ácido Hialurónico 3ml',
        price: '$700.000',
        image: '/images/armonizacion-face.png',
        info: 'Protocolo completo de armonización con 3ml de ácido hialurónico para reequilibrar las proporciones del rostro.',
      },
      {
        name: 'Toxina Botulínica',
        price: 'desde $275.000',
        image: '/images/treat-toxina.png',
        info: 'Relaja las líneas de expresión y complementa la armonización para un resultado descansado y armónico.',
      },
    ],
  },
  {
    id: 'corporales',
    title: 'Tratamientos Corporales',
    image: '/images/corporales.png',
    imageAlt: 'Consulta de tratamiento corporal estético',
    treatments: [
      {
        name: 'Tratamiento de Glúteos (60ml AH + 2ml Bioestimulador)',
        price: '$2.500.000',
        image: '/images/corporales.png',
        info: 'Protocolo de aumento y modelado de glúteos combinando ácido hialurónico corporal y bioestimulador para volumen y firmeza sin cirugía.',
      },
      {
        name: 'Hilos Tensores Aptos 190mm Full Face',
        price: '$1.380.000',
        image: '/images/corporales.png',
        info: 'Colocación de hilos tensores reabsorbibles para reposicionar los tejidos y generar un efecto lifting natural en todo el rostro.',
      },
    ],
  },
  {
    id: 'packs',
    title: 'Packs Especiales',
    image: '/images/packs-facial.png',
    imageAlt: 'Mujer recibiendo un tratamiento facial de un pack especial',
    treatments: [
      {
        name: 'Pack Rinomodelación + Labios Juvederm',
        price: '$525.000',
        image: '/images/featured-labios.png',
        info: 'Combinación de rinomodelación y diseño de labios en una sola sesión para armonizar el centro del rostro con un precio preferencial.',
      },
      {
        name: 'Definición Mandibular (4 jeringas)',
        price: '$850.000',
        image: '/images/treat-mandibula.png',
        info: 'Protocolo intensivo de 4 jeringas para definir de forma marcada la línea mandibular y el mentón.',
      },
    ],
  },
]

export const featuredTreatments = [
  {
    title: 'Armonización Facial',
    image: '/images/featured-armonizacion.png',
  },
  {
    title: 'Diseño y Escultura Labial',
    image: '/images/featured-labios.png',
  },
  {
    title: 'Rinomodelación',
    image: '/images/featured-rinomodelacion.png',
  },
]

export const steps = [
  { number: '01', title: 'Agenda', description: 'Reserva tu evaluación inicial' },
  { number: '02', title: 'Plan', description: 'Diseñamos tu procedimiento' },
  { number: '03', title: 'Resultado', description: 'Logra tu transformación' },
]
