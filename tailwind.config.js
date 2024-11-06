/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      },
      spacing: {
        35: "35px",
      },
    },
  },
  plugins: [],
};
