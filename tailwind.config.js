module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './projects/**/*.html',
      './projects/**/*.scss'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
