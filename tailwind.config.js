/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Clash: ['"Clash Grotesk"', "sans-serif"],
        Satoshi : ['"Satoshi"', "sans-serif"]
      },
      colors:{
        'black': '#0E0E0E',
        'white': '#FFFFFF',
        'red': '#DB4537',
      },
      fontSize:{
        'clamp1': 'clamp(20px, 6vw, 50px)',
        'clamp2': 'clamp(10px, 4vw, 32px)',
        'clamp3': 'clamp(10px, 2vw, 24px)',
        'clamp4': 'clamp(5px, 6vw, 45px)',
        'clamp2': 'clamp(10px, 4vw, 45px)',
        'clamp5': 'clamp(20px, 6vw, 100px)',

      },
      height: {
        'clamp4': 'clamp(15px, 70vw, 700px)',
      },
      gridTemplateColumns: {
        'template-columns-[60%_40%]': '60% 40%',
      },

    },
  },
  plugins: [],
}

