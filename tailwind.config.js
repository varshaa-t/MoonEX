/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow' : '#e4b40d',
        'light-yellow': '#dbc268',
        'medium-gray': '#9e9e9e',
        'pink' : '#ff007a',
        'bluish-gray' : '#0c1b28',
        'green-tick' : '#b2ffac',
        'red-x' : '#ff5050',
        'gray-card' : "#b6b6b6"
      },
      fontFamily: {
        'raleway' : ['Raleway, sans-serif'],
        'neue-machina-regular' : ['Neue Machina Regular'],
        'neue-machina-bold' : ['Neue Machina Bold'],
        'conthrax' : ['Conthrax'],
        'roboto' : ['Roboto, sans-serif']
      }
    },
  },
  plugins: [],
}

