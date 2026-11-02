import { motion, type Variants } from "motion/react";
import { Car, House, Ruler, ShieldCheck, type LucideIcon } from "lucide-react";
import { SectionCurtain } from "../components/SectionCurtain";
import { AnimatedValue } from "../components/AnimatedValue";
import { stats } from "../data/content";

const icons: Record<(typeof stats)[number]["icon"], LucideIcon> = {
  ruler: Ruler,
  house: House,
  car: Car,
  shield: ShieldCheck,
};

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Stats() {
  return (
    <SectionCurtain>
      <section className="bg-cream-dark px-6 py-20 md:px-16">
        <motion.div
          className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => {
            const Icon = icons[stat.icon];
            return (
              <motion.div
                key={stat.label}
                variants={card}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="rounded-2xl border border-navy/10 bg-white/40 p-6"
              >
                <Icon strokeWidth={1.5} className="mb-4 h-6 w-6 text-gold" />
                <div className="font-serif text-3xl text-navy md:text-4xl">
                  {"value" in stat ? (
                    <AnimatedValue value={stat.value} suffix={"suffix" in stat ? stat.suffix : ""} />
                  ) : (
                    stat.display
                  )}
                </div>
                <div className="mt-2 text-sm tracking-wide text-navy/60 uppercase">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </SectionCurtain>
  );
}
