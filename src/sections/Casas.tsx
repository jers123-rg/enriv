import { MessageCircle } from "lucide-react";
import { SectionCurtain } from "../components/SectionCurtain";
import { modelos, precio, whatsappUrl } from "../data/content";

export function Casas() {
  return (
    <SectionCurtain>
      <section id="casas" className="bg-cream-dark px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-serif text-4xl text-balance text-navy md:text-6xl">Elige tu casa</h2>
            <p className="mt-6 max-w-xl text-lg text-pretty text-navy/75">
              Varios modelos para distintas etapas de la familia. Estas son las medidas publicadas; tu asesor te
              confirma disponibilidad y acabados.
            </p>

            <dl className="mt-12 border-t border-navy/15">
              {modelos.map((m) => (
                <div
                  key={m.nombre}
                  className="grid gap-1 border-b border-navy/15 py-6 sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-8"
                >
                  <dt className="font-serif text-2xl text-navy">{m.nombre}</dt>
                  <dd className="text-navy/75">{m.detalle}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="self-start rounded-2xl bg-navy p-8 text-cream shadow-[0_24px_48px_-20px_rgba(15,26,46,0.45)] md:p-10 lg:sticky lg:top-28">
            <p className="text-sm text-cream/70">Casas desde</p>
            <p className="mt-2 font-serif text-5xl lining-nums md:text-6xl">
              {precio.desde}
              <span className="ml-2 font-sans text-base text-cream/75">MXN*</span>
            </p>
            <p className="mt-6 text-sm text-pretty text-cream/70">* {precio.nota}</p>
            <a
              href={whatsappUrl("Hola, quiero la lista de precios de Residencial Lomas Virreyes.")}
              target="_blank"
              rel="noopener"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors duration-300 hover:bg-cream"
            >
              <MessageCircle strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
              Pedir lista de precios
            </a>
          </aside>
        </div>
      </section>
    </SectionCurtain>
  );
}
