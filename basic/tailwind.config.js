module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'Beau': ['Beau Rivage', 'system-ui',],
      },
      'colors': {
        'gold': '#F0A500'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/img/setup.jpg')",
      }
    },
  },
  plugins: [],
}
