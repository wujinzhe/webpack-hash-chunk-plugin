const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const WebpackHashChunkPlugin = require('../index')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          // {
          //   loader: path.resolve(__dirname, 'loader.js'),
          //   options: {}
          // }
        ]
      },
    ]
  },
  devServer: {
    port: 9090,
    hot: true,
    stats: {
      all: false,
      timings: true,
      version: true,
      builtAt: true,
      assets: true,
      assetsSort: 'field',
      errors: true,
      warnings: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackHashChunkPlugin()
  ],
  stats: {
    all: false,
    timings: true,
    version: true,
    builtAt: true,
    assets: true,
    assetsSort: 'field',
    errors: true,
    warnings: true
  }
}