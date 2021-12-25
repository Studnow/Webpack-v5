// const { colors } = require('tailwindcss/defaulttheme');
const myColors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/**/*.pug",
    "./src/**/**/**/*.pug",
    "./src/**/**/**/**/*.pug",
    "./src/**/**/**/**/**/*.pug",
    "./src/**/*.js",
    "./src/**/*.css",
    "./src/**/**/*.css",
    "./src/**/**/**/*.css",
    "./src/**/*.sass",
  ],
  // separator: "_",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: myColors.white,
      black: myColors.black,
      blue: "#0499DD",
      yellow: {
        1: "#FFC700",
        2: "#E59B06",
      },
      gray: {
        1: "#D4D4D4",
        2: "#EDEDED",
        3: "#FBFBFB",
      },
      red: "#BC0000",
      green: "#17C1BC",
    },
    fontFamily: {
      // sans: ["montserrat", "sans-serif"],
      // serif: ["'marko-one-tr'", "serif"],
      display: ["montserrat-tr", "sans-serif"],
      decor: ["marko-one-tr", "serif"],
      prescription: ["mr_kindlyjasmineg-tr"],
      my: ["Amarante", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "screen-img-webp": 'url("/src/img/demo/webp/first-bg.webp")',
        "screen-img": 'url("/src/img/demo/first-bg.jpg")',
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
