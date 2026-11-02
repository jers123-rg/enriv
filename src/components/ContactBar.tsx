import { MessageCircle, Phone } from "lucide-react";
import { mensajeWhatsApp, telefono, whatsappUrl } from "../data/content";

/** Contacto siempre a la mano: barra inferior en móvil, botón flotante en escritorio. */
export function ContactBar() {
  const wa = whatsappUrl(mensajeWhatsApp);
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 bg-navy pb-[env(safe-area-inset-bottom)] text-sm font-medium text-cream shadow-[0_-8px_24px_-12px_rgba(15,26,46,0.45)] md:hidden">
        <a href={`tel:${telefono.tel}`} className="flex items-center justify-center gap-2 py-4">
          <Phone strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
          Llamar
        </a>
        <a href={wa} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-gold py-4 text-navy">
          <MessageCircle strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      <a
        href={wa}
        target="_blank"
        rel="noopener"
        className="fixed right-6 bottom-6 z-50 hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-navy shadow-[0_12px_28px_-10px_rgba(15,26,46,0.55)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-12px_rgba(15,26,46,0.6)] md:flex"
      >
        <MessageCircle strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
        WhatsApp
        <span className="sr-only"> {telefono.display}</span>
      </a>
    </>
  );
}
