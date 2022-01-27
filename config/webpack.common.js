const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const dist = '../dist'

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    // library: 'template-webpack',
    // libraryTarget: 'umd',
    path: path.resolve(__dirname, dist)
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
};