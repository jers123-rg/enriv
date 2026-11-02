# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Familias y compradores del Valle de Toluca (Metepec, Toluca, Calimaya) que están evaluando comprar una casa nueva en un residencial cerrado. Llegan desde anuncios, búsquedas o recomendaciones, muchas veces desde el celular, y quieren saber rápido cómo son las casas, qué amenidades hay, dónde está y cómo contactar a ventas.

## Product Purpose

Sitio real de ventas de Residencial Lomas Virreyes. Su trabajo es convertir el interés en contacto: llamada, WhatsApp, formulario o visita al residencial. Éxito = más solicitudes de informes y visitas agendadas.

## Positioning

Casas residenciales en condominio cerrado en San Andrés Ocotlán, Calimaya, a pocos minutos de Metepec: más espacio, áreas verdes y casa club a un precio menor que dentro de Metepec. (Las cifras de traslado publicadas por portales varían entre 10 y 15 minutos; no prometer una cifra exacta.)

## Operating Context

- El visitante compara contra otros residenciales de la zona (por ejemplo Hacienda de las Fuentes, Rancho el Mesón).
- La decisión se cierra en persona: visita a la casa muestra y trato con un asesor.
- Muchos visitantes llegan desde el celular y prefieren llamar o escribir por WhatsApp.

## Capabilities and Constraints

- Una sola página (landing) en React 19 + TypeScript + Vite + Tailwind v4 + GSAP ScrollTrigger + Lenis + Motion.
- Todo el contenido vive en `src/data/content.ts`.
- El formulario de contacto aún no envía datos a ningún servidor (solo valida y confirma en pantalla). Pendiente: conectarlo a un correo o CRM.
- Modelos conocidos por anuncios: Granada, Castilla, Castilla Plus, Málaga, Madeira y Toledo. Medidas solo confirmadas por anuncios de terceros.

## Brand Commitments

- Nombre: Residencial Lomas Virreyes.
- Idioma: español de México, tuteo.
- Contacto oficial (tomado del sitio lomasvirreyes.mx): teléfono 722 319 1919 (también WhatsApp, confirmado por el cliente). Dirección: Boulevard Virreyes S/N, Col. San Andrés Ocotlán, Calimaya, Estado de México, C.P. 52220.

## Evidence on Hand

- Fotos reales (capturas del sitio oficial, baja resolución ~1000 px de ancho) en `public/media/`: fachada de casas, jardín trasero del modelo Castilla Plus, recámara principal, recámara infantil.
- Precio: solo de portales de anuncios ("desde $3,250,000 MXN"); el cliente aprobó mostrarlo como precio de referencia con aviso.
- Amenidades: según anuncios, casa club (alberca, canchas de pádel, salón de usos múltiples, ludoteca, gimnasio) en construcción o próxima; áreas verdes, juegos infantiles, canchas deportivas y caseta de vigilancia con acceso controlado.
- No hay: testimonios, reseñas citables, nombres de asesores, horarios de oficina ni fotos de amenidades. No inventarlos.

## Product Principles

1. Cada sección acerca al visitante a contactar: teléfono y WhatsApp siempre a la mano.
2. Solo fotos e información reales de Lomas Virreyes; lo no confirmado se marca como tal.
3. Claridad antes que espectáculo: modelos, amenidades y ubicación se entienden en segundos, también en el celular.
4. Honestidad con lo que está en construcción (casa club).
