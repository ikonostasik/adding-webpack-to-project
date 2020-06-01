const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        // Loaders have reversed order
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // Works second -> transform css into js
          'sass-loader' // Works first -> transform sass|scss into css
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
