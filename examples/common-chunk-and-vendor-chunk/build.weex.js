const webpack = require('webpack');

const webpackConfig = require('./webpack.config.weex.js');
webpack(webpackConfig, (err, stats) => {
  console.log(stats)
});