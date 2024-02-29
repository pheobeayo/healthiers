/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
  screens: {
    'xs': '320px',
    'sm': '640px',
    'md': '768px',
    tablet: '960px',
    'xl': '1280px',
    laptop: "1366px",
    '2xl': '1536px',
    
  },
  plugins: [require('flowbite/plugin')],
}

