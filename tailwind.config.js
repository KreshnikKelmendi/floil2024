/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'sans1': ['Bellarina'],
        'sans2' : ['The Foregen', 'sans-serif']
      },
    },
  },
  plugins: [],
}

