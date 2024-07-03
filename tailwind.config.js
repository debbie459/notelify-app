/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFFDD0', // You can adjust the hex code to get the exact shade of cream you want
        },
      },
    },
  },
  plugins: [],
}