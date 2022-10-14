/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coast': "url('/src/components/assets/picture2.jpg')",
      },
      colors: {
        'logo-yellow': '#C8B568',
      },
    },
  },
  plugins: [require('daisyui')],
}
