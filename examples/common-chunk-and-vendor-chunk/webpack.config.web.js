var path = require("path");

module.exports = {
	devtool: '',
	mode: "development" || "production",
	entry: {
		pageA: "./pageA",
		vendor: ["vue", "vue-router"] // 除了vendor只有一个entry 所以只有这两个库
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				manifest: {
					name: "manifest"
				},
				vendor: {
					chunks: "all",
					minChunks: 2,
					name: "vendor",
					enforce: true
				}
			}
		},
		runtimeChunk: {
			name: "manifest"
		}
	},
	output: {
		path: path.join(__dirname, "dist/web"),
		filename: "[name].js"
	}
};
