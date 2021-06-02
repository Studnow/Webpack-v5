const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/styles/[name].css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {
                    purge: {
                      enabled: true,
                      content: [
                        "./src/pages/**/*.pug",
                        "./src/index.js",
                        "./src/**/*.js",
                      ],
                    },
                  },
                  "postcss-preset-env": {
                    browsers: "> .5%, last 2 versions",
                  },
                  autoprefixer: {},
                },
              },
            },
          },
        ],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     // Translates CSS into CommonJS
      //     "css-loader",
      //     "postcss-loader",
      //     // Compiles Sass to CSS
      //     "sass-loader",
      //   ],
      // },
    ],
  },
});
