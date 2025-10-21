/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Gasoek One"', 'sans-serif'], 
        'body': ['"Roboto"', 'sans-serif'],        
        'montserrat': ['Montserrat', 'sans-serif'],
        'rowdies': ['Rowdies', 'sans-serif'],
      },
      colors: {
        // Remove or keep old color
        'ashva-orange': '#FF6D02', 
        'primary': '#ff3d02',
        'secondary': '#ff440a',
        'tertiary': '#fe4b14',
        'quaternary': '#ff5926',
        'quinary': '#fe6537',
        // Add the new "Iron Flame" palette
        'crimson-red': '#DC143C',
        'charcoal': '#222222',
        'gold': '#FFD700',
        'steel-grey': '#A9A9A9',
      },
    },
  },
  plugins: [],
}