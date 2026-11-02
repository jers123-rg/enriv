import { MapPin, Navigation } from "lucide-react";
import { SectionCurtain } from "../components/SectionCurtain";
import { cercania, direccion } from "../data/content";

export function Ubicacion() {
  return (
    <SectionCurtain>
      <section id="ubicacion" className="bg-cream-dark px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-4xl text-balance text-navy md:text-6xl">Dónde estamos</h2>
            <p className="mt-6 flex gap-3 text-lg text-navy/80">
              <MapPin strokeWidth={1.5} className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {direccion.linea1}
                <br />
                {direccion.linea2}
              </span>
            </p>

            <dl className="mt-10 border-t border-navy/15">
              {cercania.map((c) => (
                <div key={c.lugar} className="flex items-baseline justify-between gap-6 border-b border-navy/15 py-4">
                  <dt className="text-navy/85">{c.lugar}</dt>
                  <dd className="font-serif text-xl text-navy tabular-nums">{c.tiempo}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-navy/70">Tiempos aproximados en auto; varían con el tráfico.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={direccion.googleMaps}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-gold hover:text-navy"
              >
                <Navigation strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
                Cómo llegar
              </a>
              <a
                href={direccion.waze}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center rounded-full border border-navy/40 px-6 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors duration-300 hover:border-navy"
              >
                Abrir en Waze
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-cream shadow-[0_24px_48px_-24px_rgba(15,26,46,0.35)]">
            {/* Visible solo mientras el mapa carga o si no puede cargar. */}
            <a
              href={direccion.googleMaps}
              target="_blank"
              rel="noopener"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-navy/60 hover:text-navy"
            >
              <MapPin strokeWidth={1.5} className="h-6 w-6 text-gold" aria-hidden="true" />
              Ver el mapa en Google Maps
            </a>
            <iframe
              title="Mapa de Residencial Lomas Virreyes en Calimaya"
              src={direccion.mapaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative h-[22rem] w-full border-0 md:h-full md:min-h-[32rem]"
            />
          </div>
        </div>
      </section>
    </SectionCurtain>
  );
}
