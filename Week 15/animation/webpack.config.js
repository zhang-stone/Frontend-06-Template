module.exports = {
  entry: "./animation-demo.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins:
              [
                [
                  '@babel/plugin-transform-react-jsx',
                  {
                    pragma: "createElement"
                  }
                ]]
          }
        }
      }
    ]
  },
  devServer: {
    // contentBase: './dist'
  },
  optimization: {
    minimize: false,
  },
  mode: "development"
}