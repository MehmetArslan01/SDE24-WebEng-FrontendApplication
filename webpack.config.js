const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return {
        mode: argv.mode,
        entry: './src/main.ts',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: isDevelopment ? '/' : '/SDE24-WebEng-FrontendApplication/',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDevelopment ? 'inline-source-map' : 'source-map',
        devServer: {
            static: {
                directory: __dirname,
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
            }),
            new HtmlWebpackPlugin({
                filename: 'pages/about.html',
                template: './pages/about.html',
            }),
            new HtmlWebpackPlugin({
                filename: 'pages/favorites.html',
                template: './pages/favorites.html',
            }),
            new HtmlWebpackPlugin({
                filename: 'pages/form.html',
                template: './pages/form.html',
            }),
            new MiniCssExtractPlugin(),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(argv.mode),
                'process.env.API_KEY': JSON.stringify('your_api_key'),
            }),
        ],
        optimization: {
            minimize: !isDevelopment,
        },
    };
};
