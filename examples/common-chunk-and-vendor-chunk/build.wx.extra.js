const webpack = require('webpack');

const webpackConfig = require('./webpack.config.wx.extract.js');
webpack(webpackConfig, (err, stats) => {
  console.log(stats)
});