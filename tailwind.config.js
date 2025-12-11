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
        'living-gold': '#d3be93',
      },
    },
  },
  plugins: [],
}