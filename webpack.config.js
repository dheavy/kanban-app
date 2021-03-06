var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),

    TARGET = process.env.npm_lifecycle_event,
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build');

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: APP_PATH
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ title: 'Kanban App '})
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  }
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
