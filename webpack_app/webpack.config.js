const path = require('path');
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js', // Entry file wordt gecompileerd met de daarbij horende assets
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'), // De gecompileerde file komt in deze folder te staan
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        // Is het een .css file?
        test: /\.css$/,
        // Gebruik deze loaders
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ]
    }
    ]
  },
  plugins: [new UglifyJSPlugin()]
}