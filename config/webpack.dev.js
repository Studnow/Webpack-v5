const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    publicPath: "/",
    // hot: true,   // for js HMR, for html/pug off HMR
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
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
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      // "postcss-loader",
      // {
      //   loader: "sass-loader",
      //   options: {
      //     sourceMap: true,
      //   },
      // },
      //   ],
      // },
    ],
  },
});
