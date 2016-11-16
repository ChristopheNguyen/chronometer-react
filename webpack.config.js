var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
      path: path.join(__dirname, './public'),
      filename: 'app.js',
      publicPath: '/assets/'
    },
    module: {
      loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['es2015', 'react']
          }
        },
        { test: /\.css/, loader: ExtractTextPlugin.extract("css") }
      ]
    },
    plugins: [
      new ExtractTextPlugin("app.css"), // Exports every css file into one css file
      new webpack.optimize.OccurrenceOrderPlugin(), // Implements livereload
      new webpack.HotModuleReplacementPlugin() // Implements livereload
    ]
};