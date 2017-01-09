var HtmlWebpackPlugin = require('html-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/autocomp.js',
    module: {
        loaders: [
            {test: /\.css/, loader: "style-loader!css-loader"},
            {test: /\.html/,   loader: 'html-loader'}
        ]
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'auto complete example',         
            inject: 'head',
            filename: 'index.html',
            template: './template/index.html'
        }),
        new ScriptExtHtmlWebpackPlugin({
			inline: ['bundle.js']
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
    ]
};
