const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.ts', // Entry point is the compiled JavaScript file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output bundled file to the 'dist' directory
        publicPath: '/SDE24-WebEng-FrontendApplication/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
            directory: __dirname, // Serve static files from the root directory
        },
    },
};
