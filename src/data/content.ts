/**
 * Todo el contenido del sitio vive aquí.
 *
 * FOTOS: capturas del sitio oficial (lomasvirreyes.mx), recortadas para quitar
 * los controles del carrusel. Están en /public/media. Si consigues versiones en
 * alta resolución, reemplaza los archivos con el mismo nombre.
 *
 * DATOS: teléfono y dirección vienen del sitio oficial. Modelos, medidas,
 * precio, tiempos de traslado y amenidades vienen de anuncios publicados en
 * portales inmobiliarios; confírmalos con la desarrolladora.
 */

export const telefono = {
  display: "722 319 1919",
  tel: "+527223191919",
  whatsapp: "527223191919",
};

export const whatsappUrl = (mensaje: string) =>
  `https://wa.me/${telefono.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const mensajeWhatsApp = "Hola, me interesa Residencial Lomas Virreyes. ¿Me pueden dar informes?";

export const direccion = {
  linea1: "Boulevard Virreyes S/N, Col. San Andrés Ocotlán",
  linea2: "Calimaya, Estado de México, C.P. 52220",
  mapaEmbed:
    "https://www.google.com/maps?q=Residencial+Lomas+Virreyes,+Boulevard+de+los+Virreyes,+San+Andr%C3%A9s+Ocotl%C3%A1n,+Calimaya,+M%C3%A9x.&z=14&output=embed",
  googleMaps:
    "https://www.google.com/maps/dir/?api=1&destination=Residencial+Lomas+Virreyes,+San+Andr%C3%A9s+Ocotl%C3%A1n,+Calimaya",
  waze: "https://waze.com/ul?q=Residencial%20Lomas%20Virreyes%20Calimaya&navigate=yes",
};

export const fotos = {
  fachada: { src: "media/fachada.jpg", alt: "Fachadas de casas en Residencial Lomas Virreyes" },
  jardin: { src: "media/castilla-plus-jardin.jpg", alt: "Jardín trasero del modelo Castilla Plus" },
  recamara: { src: "media/recamara-principal.jpg", alt: "Recámara principal" },
  infantil: { src: "media/recamara-infantil.jpg", alt: "Recámara infantil con dos camas" },
};

/** Los capítulos del día; también alimentan el riel lateral. */
export const capitulos = [
  { id: "inicio", hora: "7:00", momento: "Mañana", titulo: "La llegada" },
  { id: "jardin", hora: "13:00", momento: "Mediodía", titulo: "El jardín" },
  { id: "amenidades", hora: "17:00", momento: "Tarde", titulo: "La casa club" },
  { id: "noche", hora: "21:00", momento: "Noche", titulo: "Las recámaras" },
] as const;

export type Escena = {
  id: string;
  hora?: string;
  /** Luz del momento del día sobre la foto. */
  luz?: "manana" | "mediodia" | "noche";
  foto: { src: string; alt: string };
  /** Segunda foto, enmarcada junto al texto. */
  fotoExtra?: { src: string; alt: string };
  titulo: string;
  texto?: string;
};

export const escenas = {
  jardin: {
    id: "jardin",
    hora: "13:00",
    luz: "mediodia",
    foto: fotos.jardin,
    titulo: "El comedor se abre al jardín",
    texto:
      "En el modelo Castilla Plus, el comedor se abre por completo hacia un jardín propio: comer afuera al mediodía mientras los niños juegan en el pasto.",
  },
  noche: {
    id: "noche",
    hora: "21:00",
    luz: "noche",
    foto: fotos.recamara,
    fotoExtra: fotos.infantil,
    titulo: "Descansar en casa",
    texto: "Recámaras amplias, con grandes ventanales y espacio para toda la familia.",
  },
} satisfies Record<string, Escena>;

export const modelos = [
  { nombre: "Granada", detalle: "Lote de 180 m² · 3 recámaras · 2 baños · 2 estacionamientos" },
  { nombre: "Castilla Plus", detalle: "220 m² de terreno · 170 m² de construcción · jardín propio" },
  { nombre: "Toledo", detalle: "233 m² de terreno · 237 m² de construcción · el más amplio" },
  { nombre: "Málaga", detalle: "Sala con doble altura" },
  { nombre: "Castilla y Madeira", detalle: "Pregunta por medidas y disponibilidad" },
];

export const precio = {
  desde: "$3,250,000",
  nota: "Precio de referencia; varía según modelo y disponibilidad.",
};

export const casaClub = [
  "Alberca techada",
  "Canchas de pádel",
  "Gimnasio",
  "Salón de usos múltiples",
  "Ludoteca",
];

export const enElResidencial = [
  "Amplias áreas verdes",
  "Juegos infantiles",
  "Canchas deportivas",
  "Caseta de vigilancia y acceso controlado 24/7",
  "Estacionamiento de visitas",
];

export const cercania = [
  { lugar: "Plaza Punta Zero", tiempo: "≈ 5 min" },
  { lugar: "Centro de Metepec", tiempo: "10–15 min" },
  { lugar: "Galerías Metepec", tiempo: "10–15 min" },
];
