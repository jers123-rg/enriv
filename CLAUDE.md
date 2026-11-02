# Instrucciones para Claude

- Responde siempre en español.
- En cualquier trabajo de interfaz (diseño, maquetación, revisión de UI), usa la skill `impeccable`.
- En animaciones y detalles de pulido, usa `emil-design-eng` y las skills de animación
  (`animate`, `review-animations`, `improve-animations`, etc.).

## Proyecto

Landing page de Residencial Lomas Virreyes (Calimaya, Estado de México).
React 19 + TypeScript + Vite + Tailwind CSS v4 + GSAP ScrollTrigger + Lenis + Motion.

- Todo el contenido (textos, fotos, videos, datos de contacto) está en `src/data/content.ts`.
- Respeta la arquitectura existente: `ScrubSection` (video fijado con GSAP), `SectionCurtain`
  (telón con `whileInView`), `Magnetic`, `SmoothScrollProvider` (Lenis movido por el ticker de GSAP).
  No las reemplaces por aproximaciones solo con CSS ni por otras librerías.
- `npm run build:single` genera `lomas-virreyes.html`, la página completa en un solo archivo.
