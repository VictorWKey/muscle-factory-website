/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarylight: "#C1121F",
        primarydark:"#780000",
        secondarylight: "#669BBC",
        secondarydark: "#003049"
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

