import { motion } from "motion/react";
import { SectionCurtain } from "../components/SectionCurtain";
import { useMagnet } from "../components/Magnetic";
import { galeria } from "../data/content";

// Mosaico 3 × 2 en escritorio: grande + chica arriba, chica + grande abajo.
const spans = ["md:col-span-2", "", "", "md:col-span-2"];

function Tile({ src, alt, span }: { src: string; alt: string; span: string }) {
  const { springX, springY, onMouseMove, onMouseLeave } = useMagnet(0.12);
  return (
    <figure
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-dark md:aspect-auto ${span}`}
    >
      {/* Un poco más grande que la celda para que el desplazamiento nunca deje ver el borde. */}
      <motion.div className="absolute -inset-3" style={{ x: springX, y: springY }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </motion.div>
      <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
        <span className="text-sm text-white transition-transform duration-500 md:translate-y-2 md:group-hover:translate-y-0">
          {alt}
        </span>
      </figcaption>
    </figure>
  );
}

export function Galeria() {
  return (
    <SectionCurtain>
      <section id="galeria" className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl text-balance text-navy md:text-6xl">El residencial en fotos</h2>
          <div className="mt-12 grid gap-4 md:auto-rows-[20rem] md:grid-cols-3">
            {galeria.map((foto, i) => (
              <Tile key={foto.src} {...foto} span={spans[i]} />
            ))}
          </div>
        </div>
      </section>
    </SectionCurtain>
  );
}
