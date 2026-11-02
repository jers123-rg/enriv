import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registered once for the whole app.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
