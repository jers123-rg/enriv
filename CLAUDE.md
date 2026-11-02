# Instrucciones para Claude

- Responde siempre en español.
- En cualquier trabajo de interfaz (diseño, maquetación, revisión de UI), usa la skill `impeccable`.
- En animaciones y detalles de pulido, usa `emil-design-eng` y las skills de animación
  (`animate`, `review-animations`, `improve-animations`, etc.).

## Proyecto

Landing page de Residencial Lomas Virreyes (Calimaya, Estado de México).
React 19 + TypeScript + Vite + Tailwind CSS v4 + GSAP ScrollTrigger + Lenis + Motion.

- Sitio real de ventas. Producto, datos confirmados y lo que NO se debe inventar: `PRODUCT.md`.
- Todo el contenido (textos, fotos, datos de contacto) está en `src/data/content.ts`.
  Solo fotos reales de Lomas Virreyes (`public/media`); nada de imágenes de stock.
- Estructura "Un día en Lomas Virreyes": portada (7:00), jardín (13:00), casa club (17:00),
  recámaras (21:00), luego galería, ubicación y contacto. El riel del día (`DayRail`) y la barra
  de contacto (`ContactBar`) leen los capítulos de `content.ts`.
- Respeta la arquitectura existente: `ScrubSection` (foto fijada con GSAP que se acerca con el scroll), `SectionCurtain`
  (telón con `whileInView`), `Magnetic`, `SmoothScrollProvider` (Lenis movido por el ticker de GSAP).
  No las reemplaces por aproximaciones solo con CSS ni por otras librerías.
- `npm run build:single` genera `lomas-virreyes.html`, la página completa en un solo archivo.
