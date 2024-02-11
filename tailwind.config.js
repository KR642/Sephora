/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      fontBold: ["AvantGardeBold","sans-serif"],
      fontMedium: ["AvantGardeMedium","sans-serif"]
    },
    colors:{
      "black":"#000",
      "white": "#fff",
      "valentine":"#f32fd3",
      "light-greenbg":"#d4e0e0",
      "light-orangebg":"#F9C49E",
      "light-rose":"DFB5B5",
      "light-yellow":"#DFD3B5",
      "light-green":"#D7DFB5",
      "light-blue":"#B5DDDF",
      "light-lavender":"#B8B5DF",
      "light-rose":"#B8B5DF",
      "banner":"#6B6B6B",
    }
  },
  plugins: [],
}

