var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var TARGET = process.env.npm_lifecycle_event;

var config = {
  entry: path.resolve(__dirname, 'main.js'),
  devtool: TARGET === 'start'? 'eval-source-map' : 'source-map',
  output: {
    filename: 'todomvc.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.js$/,
      loader: 'babel?optional=es7.decorators',
      exclude: node_modules
    }]
  }
};

module.exports = config;
