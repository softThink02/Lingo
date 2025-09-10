
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content:  [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        nohemi: ["Nohemi", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
