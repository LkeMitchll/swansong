var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  module: {
    loaders: [
        {
        test: /\.js?/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env',
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    })
  ]
};
