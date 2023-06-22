/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
          burtons: "burtons",
        },
        'animation': {
          'gradient-x':'gradient-x 1s ease infinite',
        },
        'keyframes': {
          'gradient-x': {
            '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
            }
          }
        }
    },
  },
  plugins: [],
}
