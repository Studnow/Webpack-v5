// const { colors } = require('tailwindcss/defaulttheme');
const myColors = require('tailwindcss/colors');

module.exports = {
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
  // separator: "_",
  theme: {
    colors: {
      yellow: myColors.yellow,
      red: myColors.red,
      white: myColors.white,
      black: myColors.black,
      gray: myColors.gray,
      green: myColors.green,
    },
    fontFamily: {
      sans: ["Amarante", "sans-serif"],
      serif: ["Amarante", "serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "screen-img-webp": 'url("/src/img/webp/first-bg.webp")',
        "screen-img": 'url("/src/img/first-bg.jpg")',
      }),
    },
  },
  variants: {
    textColor: ["active", "hover"],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
  ],
};
