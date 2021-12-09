const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        philipred: "#495982",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
