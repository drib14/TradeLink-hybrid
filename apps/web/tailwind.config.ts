import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B236E',
          blue: '#2563EB',
          teal: '#14B8A6',
          gold: '#F4B942',
          background: '#F3F6FA',
        },
      },
    },
  },
  plugins: [],
};

export default config;
