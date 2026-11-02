import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// StrictMode is intentionally omitted: GSAP pinning re-parents DOM nodes, and
// the dev-only double effect run would create and kill every pin twice.
createRoot(document.getElementById("root")!).render(<App />);
