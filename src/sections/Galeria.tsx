import { motion, type Variants } from "motion/react";
import { SectionCurtain } from "../components/SectionCurtain";
import { useMagnet } from "../components/Magnetic";
import { galeria } from "../data/content";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const tile: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Tile({ src, alt }: { src: string; alt: string }) {
  const { springX, springY, onMouseMove, onMouseLeave } = useMagnet(0.12);
  return (
    <motion.figure
      variants={tile}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative aspect-square overflow-hidden rounded-xl bg-cream-dark"
    >
      {/* Slightly oversized so the drift never exposes the tile's edge. */}
      <motion.div className="absolute -inset-3" style={{ x: springX, y: springY }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </motion.div>
      <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="translate-y-2 text-sm text-white transition-transform duration-500 group-hover:translate-y-0">
          {alt}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export function Galeria() {
  return (
    <SectionCurtain>
      <section id="galeria" className="bg-cream px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-sm tracking-[0.3em] text-gold uppercase">Galería</p>
          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {galeria.map((image) => (
              <Tile key={image.src} {...image} />
            ))}
          </motion.div>
        </div>
      </section>
    </SectionCurtain>
  );
}
