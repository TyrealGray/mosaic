const webpack = require('webpack'),
	merge = require('webpack-merge'),
	common = require('./webpack.common.js');

const webConfig = {
	devtool: 'eval-source-map',
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
		}),
	],
};

module.exports = merge(common, webConfig);