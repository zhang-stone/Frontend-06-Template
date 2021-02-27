
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: './src/main.js',
  module: {
    rules: [{ test: /\.vue$/, use: 'vue-loader' }],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/*.html", to: "[name].[ext]" },
      ],
    }),
  ],
  mode: 'development',
};