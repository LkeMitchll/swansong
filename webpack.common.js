/* eslint-disable */
const webpack = require('webpack');
var path = require('path');
const context = path.resolve(__dirname, 'src');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        loader: 'file-loader?name=fonts/[name].[ext]',
        test: /\.(woff|woff2|eot|ttf|svg)$/
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env',
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      title: 'Swansong'
    })
  ]
};
