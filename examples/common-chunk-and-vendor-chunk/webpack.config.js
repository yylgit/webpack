var path = require("path");

module.exports = {
	devtool: '',
	mode: "development" || "production",
	entry: {
		pageA: "./pageA",
		pageB: "./pageB",
		pageC: "./pageC"
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				manifest: {
					name: "manifest"
				},
				vendor: {
					// test: /node_modules/,
					chunks: "all",
					minChunks: 2,
					name: "vendor",
					enforce: true,
					minSize: 0 // This is example is too small to create commons chunks
				}
			}
		},
		runtimeChunk: {
			name: "vendor"
		}
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js"
	}
};
