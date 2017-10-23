var path = require('path');
const context = path.resolve(__dirname, './src');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  context,
  entry: './index.js',
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './src'),
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss-loader'
        ],
        test: /\.css$/
      },
      {
        test: /\.js?/,
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-react-jsx',
            [ 'react-css-modules', { context } ]
          ]
        }
      },
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env'
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    })
  ]
};
