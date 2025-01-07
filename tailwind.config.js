/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#EC315A",
        customPurple: "#441D81",
      },
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"],
        BebasNeune: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
