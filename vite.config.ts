import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Rutas relativas: el sitio funciona en la raíz o en una subcarpeta.
  base: "./",
  plugins: [react(), tailwindcss()],
});
