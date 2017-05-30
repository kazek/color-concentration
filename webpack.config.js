const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './color-concentration.js',
  output: {
     path: __dirname + '/dist',
     filename: 'color-concentration.js'
  },
  module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: 'babel-loader'
       }
     ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  ]
 }
