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
        'bright-teal':'#009193',
        'custom-gray':'#999999',
        'bright-yellow':'#F6BE00',
        'neon-green':'#0BDA51',
        'electric-blue':'#007FFF',
        'luminous-cyan':'#00FFFF',
        'bright-red':'#C32148'
      },
    },
  },
  plugins: [],
}