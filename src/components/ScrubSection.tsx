import { useEffect, useRef, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { gsap } from "../lib/gsap";
import type { Escena } from "../data/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

export const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const luz = {
  manana: "bg-sky-200/10",
  mediodia: "bg-amber-100/5",
  noche: "bg-navy/40",
} as const;

type Props = {
  section: Escena;
  scrubLength?: string;
  /** Contenido propio en lugar del bloque hora + título + texto (lo usa la portada). */
  children?: ReactNode;
};

/**
 * Foto a sangre fijada con GSAP ScrollTrigger: mientras la sección está fijada,
 * la foto se acerca a su encuadre final siguiendo el scroll.
 */
export function ScrubSection({ section, scrubLength = "+=120%", children }: Props) {
  const wrapperRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const image = imageRef.current;
    if (!wrapper || !image) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        image,
        { scale: 1.14 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: wrapper, start: "top top", end: scrubLength, pin: true, scrub: 1 },
        },
      );
    });
    return () => mm.revert();
  }, [scrubLength]);

  return (
    // Contenedor propiedad de React: GSAP mete su pin-spacer aquí dentro, así
    // React nunca tiene que quitar un nodo que GSAP movió.
    <div>
      <section ref={wrapperRef} id={section.id} className="relative h-svh w-full overflow-hidden bg-navy">
        <img
          ref={imageRef}
          src={section.foto.src}
          alt={section.foto.alt}
          className="absolute inset-0 h-full w-full origin-[50%_60%] object-cover will-change-transform"
        />
        {/* La luz cambia con la hora: mañana fresca, mediodía neutro, noche profunda. */}
        {section.luz && <div aria-hidden="true" className={`absolute inset-0 ${luz[section.luz]}`} />}
        {/* Velo bajo el texto, más denso en celular, donde el texto cubre más foto. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 via-45% to-navy/30 md:from-navy/90 md:via-navy/55 md:to-navy/20"
        />

        <motion.div
          className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-28 md:px-10 md:pb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          {children ?? (
            <div className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-10">
              <motion.p
                variants={child}
                className="font-serif text-3xl text-gold tabular-nums [text-shadow:0_1px_14px_rgba(15,26,46,0.7)] md:pt-3 md:text-right md:text-6xl"
              >
                <span className="sr-only">Hora: </span>
                {section.hora}
              </motion.p>
              <div>
                <motion.h2 variants={child} className="max-w-3xl font-serif text-4xl text-balance text-white md:text-6xl">
                  {section.titulo}
                </motion.h2>
                {section.texto && (
                  <motion.p variants={child} className="mt-5 max-w-xl text-base text-pretty text-white/90 md:text-lg">
                    {section.texto}
                  </motion.p>
                )}
                {section.fotoExtra && (
                  <motion.figure variants={child} className="mt-8 flex items-end gap-4">
                    <img
                      src={section.fotoExtra.src}
                      alt={section.fotoExtra.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-40 rounded-lg object-cover shadow-[0_16px_32px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/20 md:w-64"
                    />
                    <figcaption className="max-w-[12rem] text-sm text-white/85">{section.fotoExtra.alt}</figcaption>
                  </motion.figure>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
