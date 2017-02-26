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
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},
	watch: true
}