'use strict';

const
  path    = require('path'),
  webpack = require('webpack');

const
  babelPresets = {
    presets : [
      'es2015'
    ]
  };

var config = {
  context : __dirname + '/src',
  entry   : './index.js',
  output  : {
    path      : __dirname + '/public',
    filename  : 'index.bundle.js'
  },

  plugins : [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      moment : "moment",
      tinycolor : "tinycolor2",
      datetimepicker :"eonasdan-bootstrap-datetimepicker",
      robustPointInPolygon : "robust-point-in-polygon"
    }),
    new webpack.DefinePlugin({
      ON_TEST : process.env.NODE_ENV === 'test'
    })
  ],

  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'ng-annotate!babel?' + JSON.stringify(babelPresets),
        include : [
          path.resolve(__dirname, 'src')
        ]
      },
      { test : /\.html$/, loader : 'raw', include : [ path.resolve(__dirname, 'src')] },
      { test : /\.css$/, loader : 'style!css' },
      { test : /\.styl$/, loader : 'style!css!stylus', include : [ path.resolve(__dirname, 'src')] },
      { test : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file' }
    ]
  }
};

config.devtool = 'source-map'

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;