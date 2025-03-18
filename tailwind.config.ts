import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}, // Sin temas de colores aquí, cada app los manejará
  },
  plugins: [],
};

export default config;

