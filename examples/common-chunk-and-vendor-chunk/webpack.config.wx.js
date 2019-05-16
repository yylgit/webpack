var path = require("path");

module.exports = {
	devtool: '',
	mode: "development" || "production",
	entry: {
		pageA: "./pageA",
		pageB: "./pageB",
		pageC: "./pageC",
		common: ["vue", "vue-router"]  // 保证这里的依赖肯定是放入common中
	},
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
		path: path.join(__dirname, "dist/wx"),
		filename: "[name].js"
	}
};
