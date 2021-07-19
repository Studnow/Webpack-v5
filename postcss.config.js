module.exports = {
  plugins: {
    "postcss-preset-env": {
      browsers: "last 2 versions",
    },
    tailwindcss: {
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
    },
    autoprefixer: {},
  },
};
