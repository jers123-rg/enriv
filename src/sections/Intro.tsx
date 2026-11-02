import type { MouseEvent } from "react";
import { SectionCurtain } from "../components/SectionCurtain";
import { useAnchorScroll } from "../components/SmoothScrollProvider";
import { capitulos } from "../data/content";

export function Intro() {
  const scrollTo = useAnchorScroll();
  const go = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo(event.currentTarget.getAttribute("href")!);
  };

  return (
    <SectionCurtain>
      <section className="bg-cream px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl font-serif text-4xl text-balance text-navy md:text-6xl">Un día en Lomas Virreyes</h2>
          <p className="mt-6 max-w-2xl text-lg text-pretty text-navy/75">
            Un residencial cerrado en San Andrés Ocotlán, Calimaya, con áreas verdes, juegos infantiles y caseta de
            vigilancia. Recorre cómo se vive aquí, de la mañana a la noche.
          </p>

          <ol className="mt-16 grid gap-y-10 border-t border-navy/15 sm:grid-cols-2 md:grid-cols-4">
            {capitulos.map((c) => (
              <li key={c.id} className="relative pt-8">
                <span aria-hidden="true" className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-gold" />
                <a href={`#${c.id}`} onClick={go} className="group block pr-6">
                  <span className="block font-serif text-4xl text-gold tabular-nums md:text-5xl">{c.hora}</span>
                  <span className="mt-3 block text-sm text-navy/60">{c.momento}</span>
                  <span className="mt-1 block font-serif text-xl text-navy underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-gold">
                    {c.titulo}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SectionCurtain>
  );
}
