# Residencial Lomas Virreyes · Landing

React 19 + TypeScript + Vite + Tailwind CSS v4 + GSAP ScrollTrigger + Lenis + Motion.

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # versión final en /dist
```

## Cambiar fotos, videos y textos

Todo el contenido está en `src/data/content.ts`.

1. Copia tus archivos a `public/media/` (por ejemplo `public/media/acceso.mp4`).
2. En `content.ts`, reemplaza la URL correspondiente por `"/media/acceso.mp4"`.

Videos: para que el scroll se vea fluido, exporta los MP4 con un keyframe por
cuadro y sin audio, por ejemplo:

```bash
ffmpeg -i original.mp4 -an -vf scale=1920:-2 -g 1 -crf 23 -movflags +faststart public/media/acceso.mp4
```

Los datos de modelos, precio y amenidades se tomaron de portales inmobiliarios
públicos; confírmalos con el desarrollador antes de publicar. Los datos del
asesor son de ejemplo.

## Página en un solo archivo

```bash
npm run build:single
```

Genera `lomas-virreyes.html`, que se abre con doble clic en el navegador.
