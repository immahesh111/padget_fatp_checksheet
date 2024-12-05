/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Doto":['Doto','sans-serif']
      },
      colors: {
        'custom-purple': '#2a2b84',
        'bright-teal':'#00FFD1',
        'bright-yellow':'#FFFF00',
        'neon-green':'#39FF14',
        'electric-blue':'#007FFF',
        'luminous-cyan':'#00FFFF',
        'bright-red':'#FF0000'
      },
    },
  },
  plugins: [],
}