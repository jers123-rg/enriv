import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionCurtain } from "../components/SectionCurtain";
import { amenidades, amenidadesNota } from "../data/content";

export function Amenidades() {
  return (
    <SectionCurtain>
      <section id="amenidades" className="bg-cream-dark px-6 py-24 md:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-sm tracking-[0.3em] text-gold uppercase">Amenidades</p>
          <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {amenidades.map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-3 border-b border-navy/10 pb-4 text-navy/85"
              >
                <Check strokeWidth={1.5} className="h-5 w-5 shrink-0 text-gold" />
                {item}
              </motion.li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-navy/60">{amenidadesNota}</p>
        </div>
      </section>
    </SectionCurtain>
  );
}
