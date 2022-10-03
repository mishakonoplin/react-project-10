/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
    "./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0000ff',
        secondary: '#5efc8d',
        lightGray: '#cccccc',
      }
    },
  },
  plugins: [],
}
