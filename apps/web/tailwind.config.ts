import type { Config } from "tailwindcss";
import * as tailwindcssMotion from 'tailwindcss-motion';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-15': [
          '15px',
          {
            lineHeight: '26px'
          }
        ]
      },
      screens: {
        pre_md: '1080px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    tailwindcssMotion,
  ], 
} satisfies Config;
