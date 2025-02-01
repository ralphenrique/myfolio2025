/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Garamond: ['"Garamond96DTPro"', "sans-serif"],
        Neue : ['"Neue Augenblick"', "sans-serif"]
      },
      colors:{
        'black': '#0E0E0E',
        'white': '#FFFFFF',
        'red': '#DB4537',
      },
      fontSize:{
        'clamp1': 'clamp(15px, 8vw, 75px)',
        'clamp2': 'clamp(10px, 4vw, 32px)',
        'clamp3': 'clamp(10px, 2vw, 24px)',
        'clamp4': 'clamp(15px, 9vw, 45px)',
      },
      height: {
        'clamp4': 'clamp(15px, 60vw, 500px)',
      },

    },
  },
  plugins: [],
}

