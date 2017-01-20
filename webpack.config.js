const path              = require('path')
const webpack           = require('webpack')

module.exports = {
  entry: {
    bundle    : './src/app.js',
  },
  output: {
    path: path.resolve('dist/'),
    filename: "[name].js",
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
}
