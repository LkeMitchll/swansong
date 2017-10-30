var path = require('path');
const context = path.resolve(__dirname, 'src');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-react-jsx', [ 'react-css-modules', { context } ]
          ]
        },
        test: /\.js$/
      },
      {
        include: path.resolve(__dirname, './src'),
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]'
        ],
        test: /\.css$/
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env',
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/fonts', to: 'dist/fonts', toType: 'dir' }
    ])
  ]
};
