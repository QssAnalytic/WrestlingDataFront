/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        wBlue : '#3D50B5',
        wGreen : '#30CD36',
        wDarkGreen : '#0D7818',
        wOrange : '#F26F10',
        wSecBlue : '#3D66B5',
        wMain : '#080C2B',
        wSecMain : '#1B234F',
        wGray : '#A1A4AB',
        wText : '#A0CEE8',
        wShadow : '#BBBBBD',
        wTextSec : '#DBDBDB',
        wSecGreen : '#61a89f',
      }
    },
  },
  plugins: [],
}

