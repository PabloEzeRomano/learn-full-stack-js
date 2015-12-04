'use strict';

const
  path    = require('path'),
  webpack = require('webpack');

module.exports = {
  context : __dirname + '/src',
  entry   : './index.js',
  output  : {
    path      : __dirname + '/public',
    filename  : 'index.bundle.js'
  },

  plugins : [
    new webpack.DefinePlugin({
      ON_TEST : process.env.NODE_ENV === 'test'
    })
  ],

  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel',
        include : [
          path.resolve(__dirname, 'src')
        ],
        query : {
          presets : [
            'es2015'
          ]
        }
      },
      { test : /\.html$/, loader : 'raw', include : [ path.resolve(__dirname, 'src')] },
      { test : /\.css$/, loader : 'style!css' },
      { test : /\.styl$/, loader : 'style!css!stylus', include : [ path.resolve(__dirname, 'src')] },
      { test : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file' }
    ]
  }
};