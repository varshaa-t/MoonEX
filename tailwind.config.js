/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'yellow': '#e4b40d',
  			'light-yellow': '#dbc268',
  			'medium-gray': '#9e9e9e',
  			'pink': '#ff007a',
  			'bluish-gray': '#0c1b28',
  			'green-tick': '#b2ffac',
  			'red-x': '#ff5050',
  			'gray-card': '#b6b6b6',
			'dark-blue' : '#051422'
  		},
  		fontFamily: {
  			'raleway': ['Raleway, sans-serif'],
  			'neue-machina-regular': ['Neue Machina Regular'],
  			'neue-machina-bold': ['Neue Machina Bold'],
  			'conthrax': ['Conthrax'],
  			'roboto': ['Roboto, sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
}

