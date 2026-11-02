import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionCurtain } from "../components/SectionCurtain";
import { Magnetic } from "../components/Magnetic";
import { asesor } from "../data/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldClass = "w-full border-b border-navy/30 bg-transparent pb-2 outline-none transition-colors focus:border-gold";
const labelClass = "mb-1 block text-sm text-navy/70";

export function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [error, setError] = useState<string | null>(null);
  const [enviadoA, setEnviadoA] = useState<string | null>(null);

  const update = (key: keyof typeof form) => (value: string) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { nombre, email, telefono } = form;
    if (!nombre.trim() || !email.trim() || !telefono.trim()) {
      setError("Completa nombre, email y teléfono para continuar.");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("Ingresa un email válido.");
      return;
    }
    setError(null);
    setEnviadoA(nombre.trim().split(/\s+/)[0]);
  };

  return (
    <SectionCurtain>
      <section id="contacto" className="bg-cream-dark px-6 py-24 text-navy md:px-16">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-[0.3em] text-gold uppercase">Contacto</p>
            <h2 className="mb-10 font-serif text-3xl md:text-4xl">Agenda una visita al residencial</h2>

            <AnimatePresence mode="wait">
              {enviadoA ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-xl border border-navy/15 bg-white/50 p-6"
                  role="status"
                >
                  Gracias, {enviadoA}. Tu solicitud fue recibida — un asesor se pondrá en contacto contigo a la
                  brevedad.
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="nombre" className={labelClass}>Nombre completo</label>
                    <input id="nombre" type="text" autoComplete="name" className={fieldClass}
                      value={form.nombre} onChange={(e) => update("nombre")(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input id="email" type="email" autoComplete="email" className={fieldClass}
                      value={form.email} onChange={(e) => update("email")(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="telefono" className={labelClass}>Teléfono</label>
                    <input id="telefono" type="text" inputMode="tel" autoComplete="tel" className={fieldClass}
                      value={form.telefono} onChange={(e) => update("telefono")(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className={labelClass}>Mensaje (opcional)</label>
                    <textarea id="mensaje" rows={3} className={`${fieldClass} resize-none`}
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
                        className="overflow-hidden text-sm text-red-600"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <Magnetic strength={0.3}>
                    <button
                      type="submit"
                      className="border border-navy px-8 py-3 text-sm tracking-wide uppercase transition-colors duration-300 hover:bg-navy hover:text-cream"
                    >
                      Enviar solicitud
                    </button>
                  </Magnetic>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <aside className="self-start rounded-2xl border border-navy/15 bg-white/40 p-8">
            <img src={asesor.foto} alt={asesor.nombre} className="h-24 w-24 rounded-full bg-cream object-cover" />
            <p className="mt-6 font-serif text-xl">{asesor.nombre}</p>
            <p className="mt-1 text-sm text-navy/60">{asesor.rol}</p>
            <ul className="mt-6 space-y-3 text-sm text-navy/80">
              <li className="flex items-center gap-3">
                <Phone strokeWidth={1.5} className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${asesor.telefono.replace(/\s/g, "")}`} className="hover:text-gold">{asesor.telefono}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail strokeWidth={1.5} className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${asesor.email}`} className="break-all hover:text-gold">{asesor.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{asesor.direccion}</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </SectionCurtain>
  );
}
