module.exports = {
  // purge: [
  //   './src/**/*.html',
  //   './src/**/*.js',
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'black': '#1F1C1C',
      'white': '#fff',
      'blue': '#5494F5',
      'grey': {
        '300': '#FBFBFB',
        '400': '#EBEBEB',
        '600': '#B5B5B5'
      },
    },
    fontSize: {
      'small': '0.833rem',
      'base': '1rem',
      'lg': '1.728rem',
      'xl': '2.074rem',
      '2xl': '3.583rem'
    },
    fontFamily: {
      'sans': ['Kumbh Sans', 'sans-serif']
    },
    extend: {
      spacing: {
        '1200': '75rem',
        '760': '48rem'
      },
      borderWidth: {
        '1': '1px'
      }
    }
  },
  variants: {},
  plugins: [],
}
