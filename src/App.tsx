import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import { Navbar } from "./components/Navbar";
import { ScrubSection } from "./components/ScrubSection";
import { Modelos } from "./sections/Modelos";
import { Stats } from "./sections/Stats";
import { Galeria } from "./sections/Galeria";
import { Amenidades } from "./sections/Amenidades";
import { Precio } from "./sections/Precio";
import { Contacto } from "./sections/Contacto";
import { scrubSections } from "./data/content";

export default function App() {
  return (
    <div className="relative">
      <SmoothScrollProvider>
        <Navbar />
        <main>
          <ScrubSection section={scrubSections.hero} primary />
          <Modelos />
          <Stats />
          <ScrubSection section={scrubSections.acceso} />
          <ScrubSection section={scrubSections.interiores} />
          <Galeria />
          <Amenidades />
          <ScrubSection section={scrubSections.valle} />
          <Precio />
          <Contacto />
        </main>
      </SmoothScrollProvider>
      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}
