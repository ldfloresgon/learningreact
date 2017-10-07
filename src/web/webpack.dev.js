const webpack = require("webpack");
const openBrowserPlugin = require("open-browser-webpack-plugin");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";


module.exports = {
	entry: [
		"./src/index.js"
	],
	output : {
		path: __dirname,
		filename: "bundle.js"
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new openBrowserPlugin({ url: `http://localhost:${PORT}` })    
	],
	devServer:{
		port : PORT,
		host : HOST,
		historyApiFallback: true
	},
	module:{
		rules:[
			{
				test: /\.scss$/,
				include: /src/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.jsx?$/,
				include: /src/,
				use: ["babel-loader"]                
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					"url-loader"
				]
			}
		]
	}
};