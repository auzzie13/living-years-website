/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'living-blue': '#24617f',
        'living-cream': '#fffdeb',
        'living-gold': '#d7b97c',
      },
    },
  },
  plugins: [],
}