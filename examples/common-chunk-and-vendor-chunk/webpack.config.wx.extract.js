var path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	devtool: '',
	mode: "development" || "production",
	entry: {
		pageA: "./pageA",
		pageB: "./pageB",
		pageC: "./pageC",
		common: ["vue", "vue-router"]  // 保证这里的依赖肯定是放入common中
	},
	module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ],
      },
    ],
  },
	plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css'
    }),
  ],
	optimization: {
		splitChunks: {
			cacheGroups: {
				manifest: {
					name: "manifest"
				},
				common: {
					chunks: "all",
					minChunks: 2,
					name: "common",
					enforce: true
				}
			}
		},
		runtimeChunk: {
			name: "manifest"
		}
	},
	output: {
		path: path.join(__dirname, "dist/wxextract"),
		filename: "[name].js"
	}
};
