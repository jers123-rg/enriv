import { motion } from "motion/react";
import { SectionCurtain } from "../components/SectionCurtain";
import { precio } from "../data/content";

export function Precio() {
  return (
    <SectionCurtain>
      <section id="precio" className="bg-cream px-6 py-32 text-center md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 text-sm tracking-[0.3em] text-gold uppercase"
        >
          {precio.eyebrow}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="font-serif text-5xl text-navy md:text-7xl"
        >
          {precio.valor}
        </motion.p>
        <p className="mx-auto mt-8 max-w-md text-sm text-navy/60">{precio.nota}</p>
      </section>
    </SectionCurtain>
  );
}
