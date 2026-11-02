import { useEffect, useState, type MouseEvent } from "react";
import { motion, type Variants } from "motion/react";
import { Phone } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { useAnchorScroll } from "./SmoothScrollProvider";
import { telefono } from "../data/content";

const links = [
  { label: "Casas", href: "#casas" },
  { label: "Casa club", href: "#amenidades" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const variants: Variants = {
  solid: {
    backgroundColor: "rgba(248,244,236,0.94)",
    boxShadow: "0 1px 0 rgba(15,26,46,0.08)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  transparent: {
    backgroundColor: "rgba(248,244,236,0)",
    boxShadow: "0 1px 0 rgba(15,26,46,0)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const scrollTo = useAnchorScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo(event.currentTarget.getAttribute("href")!);
  };

  const tone = scrolled ? "text-navy" : "text-white";

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 ${scrolled ? "backdrop-blur-sm" : ""}`}
      variants={variants}
      initial="transparent"
      animate={scrolled ? "solid" : "transparent"}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10 md:py-5">
        <a
          href="#inicio"
          onClick={handleClick}
          className={`font-serif text-lg tracking-[0.18em] uppercase transition-colors duration-300 ${tone}`}
        >
          Lomas Virreyes
        </a>

        <nav aria-label="Secciones" className="hidden gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                scrolled ? "text-navy/75 hover:text-gold" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${telefono.tel}`}
            className={`hidden items-center gap-2 text-sm tabular-nums transition-colors duration-300 md:flex ${tone} hover:text-gold`}
          >
            <Phone strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
            {telefono.display}
          </a>
          <Magnetic strength={0.4} className="hidden md:inline-block">
            <a
              href="#contacto"
              onClick={handleClick}
              className={`text-sm tracking-wide underline underline-offset-4 transition-colors duration-300 ${
                scrolled ? "text-navy decoration-gold" : "text-white decoration-white/50"
              } hover:decoration-gold`}
            >
              Agendar visita
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.header>
  );
}
