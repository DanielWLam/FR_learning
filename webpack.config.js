const path = require('path');

module.exports = {
	entry: __dirname + '/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname)
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname + '/node_modules')
				],
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		]
	},
	watch: true
}