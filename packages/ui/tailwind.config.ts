import baseConfig from "../../tailwind.config";

const config = {
  ...baseConfig,
    theme: {
    extend: {
      colors: {
        "custom-light": "#f9d978", // Ajusta según tu diseño
      },
    },
  },
  plugins: [],
};

export default config;

