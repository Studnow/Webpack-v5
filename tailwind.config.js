const { colors } = require('tailwindcss/defaulttheme');
const myColors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/**/*.pug",
      "./src/**/**/**/*.pug",
      "./src/**/**/**/**/*.pug",
      "./src/**/**/**/**/**/*.pug",
      "./src/**/*.js",
      "./src/**/*.css",
      "./src/**/*.sass",
    ],
  },
  separator: '_',
  theme: {
    colors: {
      yellow: myColors.yellow,
      red: myColors.red
    },
    fontFamily: {
      sans: ["Amarante", "sans-serif"],
      serif: ["Amarante", "serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "brand-img": 'url("src/img/brand.svg")',
      }),
    },
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
  ],
};
