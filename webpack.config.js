const webpack = require('webpack');

module.exports = {
  entry: './color-concentration.js',
  output: {
     path: './dist',
     filename: 'color-concentration.js'
  },
  module: {
     loaders: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
     }]
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false,
          },
          output: {
              comments: false,
          },
      }),
  ]
 }
