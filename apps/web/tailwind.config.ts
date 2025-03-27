import baseConfig from "../../tailwind.config";
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
		sm: '640px',
		md: '768px',
    	lg: '1024px',
    	xl: '1280px'
      },
      colors: {
      },
    },
  },
  plugins: [
    tailwindcssMotion,
  ], 
} satisfies Config;
