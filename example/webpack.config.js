const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    // main: 'src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    // path: './dist/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // include: path.resolve(__dirname, '../src/'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
    ]
  },
  devServer: {
    port: 9090,
    stats: {
      all: false,
      timings: true,
      version: true,
      builtAt: true,
      assets: true,
      assetsSort: 'field'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/index.html'
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"base"'
    // })
  ],
  // stats: {
  //   all: false,
  //   timings: true,
  //   version: true,
  //   builtAt: true,
  //   assets: true,
  //   assetsSort: 'field'
  // }
}