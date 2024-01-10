/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-light": "#AEAED3",
        "purple-dark": "#0D1122",
        "mikly-white": "#E0D8CD",
      },
      fontFamily: {
        "kanit": ['Kanit', 'sans-serif'],
        "lemon": ['Lemon', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
