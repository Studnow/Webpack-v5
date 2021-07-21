const { colors } = require('tailwindcss/defaulttheme');
const myColors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
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
  separator: "_",
  theme: {
    colors: {
      yellow: myColors.yellow,
      red: myColors.red,
      white: myColors.white,
    },
    fontFamily: {
      sans: ["Amarante", "sans-serif"],
      serif: ["Amarante", "serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "screen-img": 'url("/src/img/webp/first-bg.webp")',
      }),
    },
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
  ],
};
