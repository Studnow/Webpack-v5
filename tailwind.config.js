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
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "brand-img": 'url("src/img/iamp-logo.svg")',
        some: "linear-gradient(to top, var(--tw-gradient-stops))",
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
