var webpack = require("webpack");
var path = require("path");

let environment = "production";
let folderDestination = "dist";

module.exports = {
	entry: {
		app:"./src/index"
	},
	output: {
		path: path.join(__dirname, folderDestination),
		filename: "bundle.js",
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(environment)
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true
			},
			output: {
				comments: false,
			},
			exclude: [/\.min\.js$/gi] // skip pre-minified libs
		})
	],
	module: {
		rules: [
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				exclude : /(node_modules)/,
				use:["file-loader?name=public/fonts/[name].[ext]"],
				include: /src/
			},
			{
				test: /\.scss$/,
				exclude : /(node_modules)/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude : /(node_modules)/,
				use: [
					"url-loader"
				]
			},
			{
				test: /\.jsx?$/,
				exclude : /(node_modules)/,
				use: ["babel-loader"],
				include: path.join(__dirname, "src")
			}
		]
	}
};
