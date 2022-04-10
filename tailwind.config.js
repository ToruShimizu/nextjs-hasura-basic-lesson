module.exports = {
  // どの階層にあるファイルに適用するか
  content: [
    './pages/**/*.{js,ts,tsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: [],
}
