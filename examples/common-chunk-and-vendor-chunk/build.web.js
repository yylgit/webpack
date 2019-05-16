const webpack = require('webpack');

const webpackConfig = require('./webpack.config.web.js');
webpack(webpackConfig, (err, stats) => {
  console.log(stats)
});