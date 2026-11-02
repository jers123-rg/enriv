import { useEffect, useState, type MouseEvent } from "react";
import { motion, type Variants } from "motion/react";
import { Magnetic } from "./Magnetic";
import { useAnchorScroll } from "./SmoothScrollProvider";

const links = [
  { label: "Modelos", href: "#modelos" },
  { label: "Galería", href: "#galeria" },
  { label: "Amenidades", href: "#amenidades" },
  { label: "Contacto", href: "#contacto" },
];

const variants: Variants = {
  solid: {
    backgroundColor: "rgba(248,244,236,0.92)",
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

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm"
      variants={variants}
      initial="transparent"
      animate={scrolled ? "solid" : "transparent"}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#hero"
          onClick={handleClick}
          className={`font-serif text-lg tracking-[0.2em] uppercase transition-colors duration-300 ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          Lomas Virreyes
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                scrolled ? "text-navy/70 hover:text-gold" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Magnetic strength={0.4} className="hidden md:inline-block">
          <a
            href="#contacto"
            onClick={handleClick}
            className={`text-sm tracking-wide underline underline-offset-4 transition-colors duration-300 ${
              scrolled ? "text-navy decoration-gold" : "text-white decoration-white/50"
            }`}
          >
            Agendar visita
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
