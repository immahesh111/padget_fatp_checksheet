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
        'custom-purple': '#41408a', // Add your custom color here
      },
    },
  },
  plugins: [],
}