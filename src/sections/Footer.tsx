import { direccion, telefono } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-navy px-6 pt-16 pb-28 text-cream/70 md:px-10 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-xl tracking-[0.18em] text-cream uppercase">Lomas Virreyes</p>
          <p className="mt-4 text-sm">
            {direccion.linea1}, {direccion.linea2}
          </p>
          <a href={`tel:${telefono.tel}`} className="mt-2 inline-block text-sm tabular-nums hover:text-gold">
            Tel. {telefono.display}
          </a>
        </div>
        <p className="text-xs leading-relaxed text-pretty text-cream/55 md:text-right">
          Precios, medidas y amenidades son de referencia y pueden cambiar sin previo aviso. La casa club está en
          construcción. © {new Date().getFullYear()} Residencial Lomas Virreyes.
        </p>
      </div>
    </footer>
  );
}
