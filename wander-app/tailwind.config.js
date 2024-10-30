/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#325D59',
        primaryGreen2: '#43AA8B',
        secondaryTeal: '#788FCE',
        secondaryOrange: '#FA9161',
        neutralBlack: '#0C0C20',
        neutralWhite: 'FAFFFD'
      },
      boxShadow: {
        'orange-category': '5px 5px 1px rgba(250,145,97,1)',
      },
    },
  },
  plugins: [],
}

