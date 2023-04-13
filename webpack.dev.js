const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: './src/Index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  }
});