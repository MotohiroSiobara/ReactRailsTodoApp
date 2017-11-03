var path = require('path');
var webpack = require('webpack');

if (typeof(process.env.NODE_ENV) === 'undefined') {
  process.env.NODE_ENV = 'development';
}

module.exports = {
  entry: path.join(__dirname, 'javascripts/react_components.js'),
  output: {
    path: path.join(__dirname, '../app/assets/javascripts'),
    filename: 'react_components.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.BannerPlugin({
      banner: '//= require_self\n//= require react_ujs',
      raw: true,
      entrOnly: true,
    }),
  ],
  devtool: (process.env.NODE_ENV == 'development' ? 'inline-source-map' : ''),
};
