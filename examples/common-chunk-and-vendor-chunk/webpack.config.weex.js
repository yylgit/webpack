var path = require("path");

module.exports = {
	devtool: '',
	mode: "development" || "production",
	entry: {
		pageA: "./pageA"
	},
	optimization: {},
	output: {
		path: path.join(__dirname, "dist/weex"),
		filename: "[name].js"
	}
};
