import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = { children: ReactNode; color?: string };

/** Covers a section with a solid panel that lifts away once, the first time it enters view. */
export function SectionCurtain({ children, color = "bg-navy" }: Props) {
  return (
    <div className="relative overflow-hidden">
      {children}
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-30 ${color}`}
        style={{ transformOrigin: "top" }}
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
