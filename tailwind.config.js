/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orangePrimary: '#FF6600',
        grayPrimary: '#494949',
      },
    },
  },
  plugins: [],
};
