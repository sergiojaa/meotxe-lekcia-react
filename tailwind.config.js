/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "light-green": "#50d71e"
      },
      screens: {
        tablet: "640px",
      }
    },
  },
  plugins: [],
}

