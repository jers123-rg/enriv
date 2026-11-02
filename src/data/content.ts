/**
 * All site copy and media live here so they can be swapped without touching
 * the components.
 *
 * MEDIA: the video and image URLs below are TEMPORARY placeholders (stock
 * footage of a different property). Replace them with real Lomas Virreyes
 * photos/videos: drop the files in /public/media and use paths such as
 * "/media/acceso.mp4" or "/media/casa-club.jpg".
 *
 * DATA: models, sizes, price and amenities were compiled from public real
 * estate listings (Inmuebles24, Vivanuncios, Pincali, Mercado Libre) and may
 * be out of date. Confirm them with the developer before publishing.
 */

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3Bd1EO6EIHxSqCgleKKy9qZ3l1v";

export type ScrubContent = {
  id: string;
  video: string;
  eyebrow: string;
  title: string;
  copy?: string;
};

export const scrubSections = {
  hero: {
    id: "hero",
    video: `${CDN}/hf_20260705_024359_d71d8426-3ea3-4c21-ab6e-96420024fc51.mp4`,
    eyebrow: "La Llegada · Calimaya, Estado de México",
    title: "Residencial Lomas Virreyes",
  },
  acceso: {
    id: "acceso",
    video: `${CDN}/hf_20260705_024952_7d685576-25b1-4a8f-a43c-af217983293e.mp4`,
    eyebrow: "El Acceso",
    title: "Un umbral, no una puerta",
    copy: "Acceso controlado y vigilancia las 24 horas: cada llegada a casa empieza con calma, antes de que la puerta ceda al resto de tu hogar.",
  },
  interiores: {
    id: "interiores",
    video: `${CDN}/hf_20260705_025426_2f58d220-f14f-4991-9f03-1fee8ea2a848.mp4`,
    eyebrow: "Los Interiores",
    title: "Donde la casa respira",
    copy: "Sala, comedor y cocina se abren unos a otros y comparten una misma luz, pensada para la vida en familia.",
  },
  valle: {
    id: "valle",
    video: `${CDN}/hf_20260705_025816_f7a3b1f9-3357-42a7-b83b-df1f25ba5849.mp4`,
    eyebrow: "El Valle",
    title: "Atardeceres sobre el Valle de Toluca",
  },
} satisfies Record<string, ScrubContent>;

export const modelos = [
  {
    icon: "house",
    label: "Modelo Granada",
    description: "3 recámaras, 2 baños y 2 estacionamientos sobre un lote de 180 m².",
  },
  {
    icon: "sofa",
    label: "Modelo Castilla Plus",
    description: "220 m² de terreno y 170 m² de construcción, con espacios pensados para crecer.",
  },
  {
    icon: "ruler",
    label: "Modelo Toledo",
    description: "El más amplio: 233 m² de terreno y 237 m² de construcción.",
  },
] as const;

export const modelosNota = "También disponibles: modelos Málaga (doble altura) y Madeira.";

export const stats = [
  { icon: "ruler", label: "Terreno desde", value: 180, suffix: " m²" },
  { icon: "house", label: "Construcción hasta", value: 237, suffix: " m²" },
  { icon: "car", label: "Estacionamientos", value: 2 },
  { icon: "shield", label: "Vigilancia y acceso controlado", display: "24/7" },
] as const;

export const galeria = [
  { src: `${CDN}/hf_20260705_032822_8e7b22e3-9b3c-4791-9720-283cb479943c.png`, alt: "Cocina con acabados de mármol" },
  { src: `${CDN}/hf_20260705_032832_f204f72d-3f1d-4b26-bea4-1ad12d8abbea.png`, alt: "Baño principal" },
  { src: `${CDN}/hf_20260705_032841_fdf5f2d1-03b2-4f0b-ab00-bff72c37fa59.png`, alt: "Recámara principal" },
  { src: `${CDN}/hf_20260705_032849_35826a41-1cce-44ef-bdd6-a05d1d0a5265.png`, alt: "Detalle de acabados" },
  { src: `${CDN}/hf_20260705_032859_beff3304-d8bc-4b2d-8a8b-07a5d768760d.png`, alt: "Vista nocturna" },
  { src: `${CDN}/hf_20260705_032907_583226f3-2a47-4c59-abc0-d4d5d0ca9ae4.png`, alt: "Fachada al atardecer" },
];

export const amenidades = [
  "Casa club con alberca techada*",
  "Gimnasio*",
  "Canchas de pádel*",
  "Amplias áreas verdes",
  "Juegos infantiles",
  "Canchas deportivas",
  "Estacionamiento de visitas",
  "Seguridad 24/7 con acceso controlado",
];

export const amenidadesNota =
  "* Casa club en desarrollo. Consulta su estado actual con el área de ventas.";

export const precio = {
  eyebrow: "Casas desde",
  valor: "$3,250,000 MXN",
  nota: "Precio de referencia según modelo y disponibilidad. Sujeto a cambio sin previo aviso.",
};

// PLACEHOLDER contact: replace with the real sales advisor / sales office data.
export const asesor = {
  foto: `${CDN}/hf_20260705_033842_db59adc8-1416-4601-85b6-e6b48459026e.png`,
  nombre: "Valeria Castro",
  rol: "Asesora comercial — Residencial Lomas Virreyes",
  telefono: "+52 722 000 0000",
  email: "ventas@lomasvirreyes.example",
  direccion: "Blvd. de los Virreyes, San Andrés Ocotlán, Calimaya, Edo. Méx.",
};
