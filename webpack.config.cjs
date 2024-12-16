const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: './src/main.js', // Main JavaScript file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Cleans the dist folder before each build
    },
    devServer: {
        static: './dist', // Serve files from dist folder
        port: 3000, // Port for the dev server
        open: true, // Automatically open the browser
        hot: true, // Hot Module Replacement
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // For SCSS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/, // For HTML files
                use: ['html-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Your HTML template
        }),
    ],
    resolve: {
        extensions: ['.js', '.scss'], // Extensions Webpack will resolve
    },
};
