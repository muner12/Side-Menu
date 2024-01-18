/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:"Montserrat"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
