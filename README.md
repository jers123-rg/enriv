# Residencial Lomas Virreyes · Landing

React 19 + TypeScript + Vite + Tailwind CSS v4 + GSAP ScrollTrigger + Lenis + Motion.

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # versión final en /dist
```

## Cambiar fotos, videos y textos

Todo el contenido está en `src/data/content.ts`.

Las fotos están en `public/media/`. Para cambiar una, reemplaza el archivo
conservando el nombre, o agrega uno nuevo y actualiza su ruta en `content.ts`
(por ejemplo `"media/casa-club.jpg"`). Usa fotos de al menos 2000 px de ancho
para la portada.

El teléfono y la dirección vienen del sitio oficial. Modelos, medidas, precio,
tiempos de traslado y amenidades se tomaron de portales inmobiliarios;
confírmalos con la desarrolladora antes de publicar.

El formulario de contacto no usa servidor: arma el mensaje y abre WhatsApp al
722 319 1919 para que el cliente lo envíe.

## Página en un solo archivo

```bash
npm run build:single
```

Genera `lomas-virreyes.html`, que se abre con doble clic en el navegador.
