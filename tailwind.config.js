module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
