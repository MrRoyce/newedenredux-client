const path = require('path');

const webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'bootstrap-webpack!./bootstrap.config.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [
    {
      test    : /\.jsx?$/,
      exclude : /node_modules/,
      loader  : 'react-hot!babel'
    },
    {
      test: /\.(css)(\?.+)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
    {test: /\.css$/, loader: 'style-loader!css-loader'},
    {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
   ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
