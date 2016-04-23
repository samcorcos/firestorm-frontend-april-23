var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'eval',
  target: 'node',
  entry: [
    './app/specs'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'specs.js'
  },
  plugins: [
    new webpack.IgnorePlugin(/ReactContext/),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss!sass')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    extensions: [ '', '.js', '.scss', '.css', '.json' ],
    modulesDirectories: [ 'app', 'node_modules' ]
  }
}
