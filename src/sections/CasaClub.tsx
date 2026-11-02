import { Check, CircleDashed } from "lucide-react";
import { SectionCurtain } from "../components/SectionCurtain";
import { casaClub, enElResidencial } from "../data/content";

export function CasaClub() {
  return (
    <SectionCurtain color="bg-cream">
      <section id="amenidades" className="bg-navy px-6 py-24 text-cream md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-[9rem_1fr] md:gap-10">
            <p className="font-serif text-3xl text-gold tabular-nums md:pt-2 md:text-right md:text-5xl">
              <span className="sr-only">Hora: </span>17:00
            </p>
            <div>
              <h2 className="max-w-3xl font-serif text-4xl text-balance md:text-6xl">La tarde, en la casa club</h2>
              <p className="mt-6 max-w-2xl text-lg text-pretty text-cream/80">
                La casa club está en construcción. Cuando abra, la tarde se pasará entre la alberca, el pádel y el
                gimnasio, sin salir del residencial. Mientras tanto, las áreas verdes y los juegos ya son parte del día.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:ml-[11.5rem] md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="flex flex-wrap items-center gap-3 font-serif text-2xl">
                Casa club
                <span className="rounded-full border border-gold/50 px-3 py-1 font-sans text-xs tracking-wide text-gold">
                  En construcción
                </span>
              </h3>
              <ul className="mt-6">
                {casaClub.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-cream/15 py-4 text-cream/85">
                    <CircleDashed strokeWidth={1.5} className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl">En el residencial</h3>
              <ul className="mt-6">
                {enElResidencial.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-cream/15 py-4 text-cream/85">
                    <Check strokeWidth={1.5} className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 text-sm text-cream/60 md:ml-[11.5rem]">
            Amenidades según el material de venta publicado. Pregunta a tu asesor por el avance de obra.
          </p>
        </div>
      </section>
    </SectionCurtain>
  );
}
