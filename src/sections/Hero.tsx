import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { MapPin, MessageCircle } from "lucide-react";
import { ScrubSection, child } from "../components/ScrubSection";
import { Magnetic } from "../components/Magnetic";
import { useAnchorScroll } from "../components/SmoothScrollProvider";
import { fotos, mensajeWhatsApp, precio, whatsappUrl } from "../data/content";

export function Hero() {
  const scrollTo = useAnchorScroll();
  const toContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo("#contacto");
  };

  return (
    <ScrubSection section={{ id: "inicio", foto: fotos.fachada, titulo: "Residencial Lomas Virreyes" }}>
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <motion.h1
            variants={child}
            className="font-serif text-5xl leading-[1.02] tracking-[-0.01em] text-balance text-white md:text-7xl lg:text-8xl"
          >
            Residencial Lomas Virreyes
          </motion.h1>
          <motion.p variants={child} className="mt-6 max-w-xl text-lg text-pretty text-white/85 md:text-xl">
            Casas en condominio cerrado en Calimaya, a minutos de Metepec. Áreas verdes, vigilancia las 24 horas y
            casa club en camino.
          </motion.p>
          <motion.div variants={child} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.3}>
              <a
                href="#contacto"
                onClick={toContact}
                className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors duration-300 hover:bg-cream"
              >
                Agendar visita
              </a>
            </Magnetic>
            <a
              href={whatsappUrl(mensajeWhatsApp)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              <MessageCircle strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.dl variants={child} className="shrink-0 text-white md:text-right">
          <dt className="text-sm text-white/70">Casas desde</dt>
          <dd className="font-serif text-3xl lining-nums md:text-4xl">
            {precio.desde} <span className="text-lg text-white/80">MXN*</span>
          </dd>
          <dd className="mt-3 flex items-center gap-2 text-sm text-white/75 md:justify-end">
            <MapPin strokeWidth={1.5} className="h-4 w-4 text-gold" aria-hidden="true" />
            San Andrés Ocotlán, Calimaya
          </dd>
        </motion.dl>
      </div>
    </ScrubSection>
  );
}
