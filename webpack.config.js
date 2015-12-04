'use strict';

const path = require('path');

module.exports = {
  context : __dirname + '/src',
  entry   : './index.js',
  output  : {
    path      : __dirname + '/public',
    filename  : 'index.bundle.js'
  },

  module : {
    loaders : [
      {
        loader : 'babel',
        include : [
          path.resolve(__dirname, 'src')
        ],
        test : /\.js$/,
        query : {
          presets : [
            'es2015'
          ]
        }
      }
    ]
  }
};