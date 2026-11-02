import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const spring = { stiffness: 150, damping: 15, mass: 0.2 };

/** Spring-driven offset that pulls an element toward the cursor. */
export function useMagnet(strength: number) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { springX, springY, onMouseMove, onMouseLeave };
}

type Props = { children: ReactNode; className?: string; strength?: number };

export function Magnetic({ children, className = "inline-block", strength = 0.35 }: Props) {
  const { springX, springY, onMouseMove, onMouseLeave } = useMagnet(strength);
  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}
