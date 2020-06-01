const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          'style-loader', // Works second -> insert css via <style> to html page
          'css-loader', // Works first -> transform css into js
          'sass-loader' // Works first -> transform sass|scss into css
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      template: path.resolve(__dirname, './index.html')
    })
  ]
};
