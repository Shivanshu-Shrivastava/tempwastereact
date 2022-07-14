const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: rgba(59, 130, 246, 0.5),
        sky: colors.sky,

      },
    },
  },
  plugins: [],
}
