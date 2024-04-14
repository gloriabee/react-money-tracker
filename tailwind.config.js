/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
      cardBg:'#25262B',
      cardText:'#C1C2C5',
      bgBlack:"#141517",
      btnGreen:"#5F9374"
    },
    },
  },
  plugins: [],
}

