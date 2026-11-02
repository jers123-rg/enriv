import { useEffect, useState, type MouseEvent } from "react";
import { capitulos } from "../data/content";
import { useAnchorScroll } from "./SmoothScrollProvider";

/**
 * Riel del día: marca en qué capítulo (mañana, mediodía, tarde, noche) va el
 * visitante y permite saltar entre ellos. Solo en pantallas grandes.
 */
export function DayRail() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const scrollTo = useAnchorScroll();

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight * 0.5;
      let current = 0;
      capitulos.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= mid) current = i;
      });
      setActive(current);
      const fin = document.getElementById("ubicacion");
      setVisible(!fin || fin.getBoundingClientRect().top > mid);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo(event.currentTarget.getAttribute("href")!);
  };

  return (
    <nav
      aria-label="Un día en Lomas Virreyes"
      className={`fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 rounded-full bg-navy px-2.5 py-4 shadow-[0_12px_32px_-12px_rgba(15,26,46,0.5)] ring-1 ring-cream/15 transition-[opacity,translate] duration-500 ease-out min-[1400px]:block ${
        visible ? "opacity-100" : "pointer-events-none translate-x-4 opacity-0"
      }`}
    >
      <ol className="flex flex-col gap-4">
        {capitulos.map((c, i) => {
          const isActive = i === active;
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                onClick={go}
                aria-current={isActive ? "step" : undefined}
                className="group flex items-center gap-3 rounded-full px-2 py-1"
              >
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full transition-[background-color,transform] duration-300 ${
                    isActive ? "scale-125 bg-gold" : "bg-cream/35 group-hover:bg-cream/70"
                  }`}
                />
                <span
                  className={`font-serif text-sm tabular-nums transition-colors duration-300 ${
                    isActive ? "text-cream" : "text-cream/55 group-hover:text-cream/85"
                  }`}
                >
                  {c.hora}
                  <span className="sr-only"> · {c.momento}: {c.titulo}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
