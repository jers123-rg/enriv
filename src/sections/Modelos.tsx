import { motion, type Variants } from "motion/react";
import { House, Ruler, Sofa, type LucideIcon } from "lucide-react";
import { SectionCurtain } from "../components/SectionCurtain";
import { modelos, modelosNota } from "../data/content";

const icons: Record<(typeof modelos)[number]["icon"], LucideIcon> = { house: House, sofa: Sofa, ruler: Ruler };

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Modelos() {
  return (
    <SectionCurtain>
      <section id="modelos" className="bg-cream px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm tracking-[0.3em] text-gold uppercase">Modelos</p>
          <h2 className="mb-12 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
            Casas en condominio, a minutos de Metepec
          </h2>
        </div>
        <motion.div
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {modelos.map(({ icon, label, description }) => {
            const Icon = icons[icon];
            return (
              <motion.article
                key={label}
                variants={card}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white/40 p-8 shadow-[0_1px_2px_rgba(15,26,46,0.04)] transition-shadow duration-500 hover:border-gold/40 hover:shadow-[0_24px_48px_-12px_rgba(15,26,46,0.18)]"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 transition-colors duration-500 group-hover:bg-gold">
                  <Icon strokeWidth={1.5} className="h-6 w-6 text-gold transition-colors duration-500 group-hover:text-cream" />
                </span>
                <h3 className="font-serif text-2xl text-navy">{label}</h3>
                <p className="mt-3 leading-relaxed text-navy/70">{description}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <p className="mx-auto mt-10 max-w-6xl text-sm text-navy/60">{modelosNota}</p>
      </section>
    </SectionCurtain>
  );
}
