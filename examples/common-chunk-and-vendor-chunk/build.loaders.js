const webpack = require('webpack');

const webpackConfig = require('./webpack.config.loader.js');
webpack(webpackConfig, (err, stats) => {
  // console.log(stats)
});