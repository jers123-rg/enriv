import { MotionConfig } from "motion/react";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import { Navbar } from "./components/Navbar";
import { DayRail } from "./components/DayRail";
import { ContactBar } from "./components/ContactBar";
import { ScrubSection } from "./components/ScrubSection";
import { Hero } from "./sections/Hero";
import { Intro } from "./sections/Intro";
import { Casas } from "./sections/Casas";
import { CasaClub } from "./sections/CasaClub";
import { Ubicacion } from "./sections/Ubicacion";
import { Contacto } from "./sections/Contacto";
import { Footer } from "./sections/Footer";
import { escenas } from "./data/content";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <SmoothScrollProvider>
          <Navbar />
          <DayRail />
          <main>
            <Hero />
            <Intro />
            <ScrubSection section={escenas.jardin} />
            <Casas />
            <CasaClub />
            <ScrubSection section={escenas.noche} />
            <Ubicacion />
            <Contacto />
          </main>
          <Footer />
          <ContactBar />
        </SmoothScrollProvider>
        <div className="grain-overlay" aria-hidden="true" />
      </div>
    </MotionConfig>
  );
}
