/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      screens:{
        'sm': {'max': '400px'},
        'md': {'min': '401px','max': '810px'},
      },
    },
  },
  plugins: [],
}

