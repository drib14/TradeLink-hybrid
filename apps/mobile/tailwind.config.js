/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#14213D',
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
