import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";

const LenisContext = createContext<Lenis | null>(null);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis();
    instance.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker so both share one animation frame.
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export function useLenis() {
  return useContext(LenisContext);
}

/** Scrolls to an in-page anchor through Lenis, falling back to native smooth scroll. */
export function useAnchorScroll() {
  const lenis = useLenis();
  return (href: string) => {
    if (lenis) {
      lenis.scrollTo(href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
}
