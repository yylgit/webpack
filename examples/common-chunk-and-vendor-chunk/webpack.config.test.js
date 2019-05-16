var path = require("path");
// 多页之间共享vendor
module.exports = {
	devtool: '',
	mode: "development" || "production",
	entry: {
		pageA: "./pageA",
		pageB: "./pageB",
		pageC: "./pageC",
		vendor: ["vue", "vue-router"] // 确保vendor只有这两个
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				manifest: {
					name: "manifest"
				},
				vendor: {
					test(module, chunks) {  // 确保vendor只有这两个
						let flag = false;
						// 如果是vendor入口有的
						chunks.forEach(item => {
							if (item.name === "vendor") {
								flag = true;
							}
						})
						return flag;
					},
					chunks: "all",
					minChunks: 2,
					name: "vendor",
					enforce: true
				},
				common: {
					test(module, chunks) {  // 确保vendor只有这两个
						let flag = true;
						// 如果是vendor入口有的
						chunks.forEach(item => {
							if (item.name === "vendor") {
								flag = false;
							}
						})
						return flag;
					},
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
		path: path.join(__dirname, "dist/test"),
		filename: "[name].js"
	}
};
