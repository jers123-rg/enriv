import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionCurtain } from "../components/SectionCurtain";
import { Magnetic } from "../components/Magnetic";
import { direccion, mensajeWhatsApp, telefono, whatsappUrl } from "../data/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldClass =
  "w-full border-b border-navy/50 bg-transparent pb-2 text-base text-navy outline-none transition-colors duration-300 placeholder:text-navy/65 focus:border-gold";
const labelClass = "mb-1 block text-sm text-navy/70";

type Form = { nombre: string; telefono: string; email: string; mensaje: string };

function armarMensaje(f: Form) {
  return [
    `Hola, soy ${f.nombre.trim()}. Me gustaría agendar una visita a Residencial Lomas Virreyes.`,
    `Teléfono: ${f.telefono.trim()}`,
    f.email.trim() && `Email: ${f.email.trim()}`,
    f.mensaje.trim(),
  ]
    .filter(Boolean)
    .join("\n");
}

export function Contacto() {
  const [form, setForm] = useState<Form>({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [error, setError] = useState<string | null>(null);
  const [enviado, setEnviado] = useState<{ nombre: string; url: string } | null>(null);

  const update = (key: keyof Form) => (value: string) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim()) {
      setError("Escribe tu nombre y tu teléfono para continuar.");
      return;
    }
    if (form.telefono.replace(/\D/g, "").length < 10) {
      setError("Revisa tu teléfono: debe tener 10 dígitos.");
      return;
    }
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim())) {
      setError("Revisa tu email: parece incompleto.");
      return;
    }
    setError(null);
    const url = whatsappUrl(armarMensaje(form));
    window.open(url, "_blank", "noopener");
    setEnviado({ nombre: form.nombre.trim().split(/\s+/)[0], url });
  };

  return (
    <SectionCurtain>
      <section id="contacto" className="bg-cream px-6 py-24 text-navy md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-serif text-4xl text-balance md:text-6xl">Agenda tu visita</h2>
            <p className="mt-6 max-w-lg text-lg text-pretty text-navy/75">
              Conoce la casa muestra y recorre el residencial con un asesor. Déjanos tus datos y te mandamos la
              solicitud por WhatsApp.
            </p>

            <AnimatePresence mode="wait">
              {enviado ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 rounded-xl border border-navy/15 bg-white/60 p-6"
                  role="status"
                >
                  <p>
                    Gracias, {enviado.nombre}. Abrimos WhatsApp con tu mensaje listo: solo envíalo y un asesor te
                    responderá.
                  </p>
                  <a
                    href={enviado.url}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-block text-sm underline decoration-gold underline-offset-4 hover:text-gold"
                  >
                    ¿No se abrió WhatsApp? Ábrelo aquí
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-10 space-y-7"
                >
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nombre" className={labelClass}>Nombre completo</label>
                      <input id="nombre" type="text" autoComplete="name" required className={fieldClass}
                        value={form.nombre} onChange={(e) => update("nombre")(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="telefono" className={labelClass}>Teléfono</label>
                      <input id="telefono" type="tel" inputMode="tel" autoComplete="tel" required className={fieldClass}
                        placeholder="10 dígitos" value={form.telefono} onChange={(e) => update("telefono")(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email (opcional)</label>
                    <input id="email" type="email" autoComplete="email" className={fieldClass}
                      value={form.email} onChange={(e) => update("email")(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className={labelClass}>¿Qué día te gustaría venir? (opcional)</label>
                    <textarea id="mensaje" rows={3} className={`${fieldClass} resize-none`}
                      placeholder="Por ejemplo: sábado en la mañana"
                      value={form.mensaje} onChange={(e) => update("mensaje")(e.target.value)} />
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        key={error}
                        role="alert"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden text-sm text-red-700"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <Magnetic strength={0.3}>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-gold hover:text-navy"
                    >
                      <MessageCircle strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
                      Enviar por WhatsApp
                    </button>
                  </Magnetic>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <aside className="self-start rounded-2xl border border-navy/15 bg-cream-dark/60 p-8 md:p-10">
            <h3 className="font-serif text-2xl">Oficina de ventas</h3>
            <ul className="mt-8 space-y-5">
              <li>
                <a href={`tel:${telefono.tel}`} className="group flex items-center gap-4">
                  <Phone strokeWidth={1.5} className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="font-serif text-2xl tabular-nums group-hover:text-gold">{telefono.display}</span>
                </a>
              </li>
              <li>
                <a href={whatsappUrl(mensajeWhatsApp)} target="_blank" rel="noopener" className="group flex items-center gap-4">
                  <MessageCircle strokeWidth={1.5} className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="underline decoration-navy/25 underline-offset-4 group-hover:decoration-gold">
                    Escríbenos por WhatsApp
                  </span>
                </a>
              </li>
              <li className="flex gap-4 text-navy/80">
                <MapPin strokeWidth={1.5} className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {direccion.linea1}
                  <br />
                  {direccion.linea2}
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </SectionCurtain>
  );
}
