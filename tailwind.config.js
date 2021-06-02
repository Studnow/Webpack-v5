module.exports = {
  purge: {
    enabled: false, // for prod enabled: true, dev - enabled: false
    content: [
      "./src/pages/templates/**/**/*.pug",
      "./src/index.js",
      "./src/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      accent: "#D4C17F",
      dark: "#242B33",
      white: "#fff",
      input: "#ffffff33",
    },
    extend: {
      fontFamily: { text: ["Raleway-Regular"], header: ["PlayfairDisplay"] },
      gridTemplateRows: {
        stretch: "auto 1fr auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
