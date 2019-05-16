const webpack = require('webpack');

const webpackConfig = require('./webpack.config.test.js');
webpack(webpackConfig, (err, stats) => {
  console.log(stats)
});