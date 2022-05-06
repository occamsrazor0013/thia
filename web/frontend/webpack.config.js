const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function srcPaths(src) {
	return path.join(__dirname, src);
}

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
	entry: './src/index.tsx',
	target: 'web',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
		publicPath: '/',
	},
	mode: isEnvProduction ? 'production' : 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js', 'json'],
		alias: {
			_: srcPaths('src'),
			_public: srcPaths('public'),
			_resources: srcPaths('src/resources'),
			_firebase: srcPaths('src/firebase'),
			_rest: srcPaths('src/rest'),
		},
	},
	devServer: { contentBase: './dist', hot: true, historyApiFallback: true },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png|svg|ico|icns|woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: 'data/[name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: path.join(__dirname, 'src', 'public', 'index.html'),
		}),
	],
};
