/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        sen: ['Sen', 'sans-serif'],
        paytoneone:['Paytone One', 'sans-serif'],
      },
      colors:{
        'popup-azul': '#03051D' ,
       

      },
      spacing:{
        'ret-azul': '700px'
      },
    },
  },
  plugins: [],
}

