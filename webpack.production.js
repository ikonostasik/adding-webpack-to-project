const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const DefaultWebpackConfig = require('./webpack.default');

module.exports = merge(DefaultWebpackConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: path.resolve(__dirname, './index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
      chunkFilename: '[id].css'
    })
  ]
});
