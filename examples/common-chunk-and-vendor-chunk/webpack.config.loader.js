var path = require("path");
const loader1 = path.join(__dirname, './loaders/loader1.js');
const loader2 = path.join(__dirname, './loaders/loader2.js');
// 如果分开两个test写loader   处理文件时也会按照顺序同时生效 例如下面js文件的loader   [loader1,loader2]
// 使用 ! 为整个规则添加前缀，可以覆盖配置中的所有 loader 定义。
// 多页之间共享vendor
module.exports = {
	devtool: '',
	mode: "development" || "production",
	entry: {
		pageA: "./pageA",
		pageB: "./pageB",
		pageC: "./pageC",
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: [
					loader1
				]
			},
			{
				test: /.js$/,
				use: [
					loader2
				]
			}
		]
	},
	output: {
		path: path.join(__dirname, "dist/test"),
		filename: "[name].js"
	}
};
