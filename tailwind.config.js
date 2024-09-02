/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        'primary-dark': '#E64A2E',
        secondary: '#FFC300',
        accent: '#C70039',
        'accent-dark': '#A8002F',
      },
    },
  },
  plugins: [],
}