const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('./package.json');

module.exports = {
    entry: {
        app: "./src/app.ts",
        controller: "./src/controller.ts"
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            title: "Home",
            myPageHeader: "Hello World",
            chunks: ['app'],
            filename: "./views/index.html"
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/controller.html",
            title: "Controller",
            myPageHeader: "Hello World",
            chunks: ['app','controller'],
            filename: "./views/controller.html"
        })
    ],
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
};

/* 
new CopyPlugin({
    patterns: [
        { from: path.join(__dirname, "src"), to: path.join(__dirname, "dist/") }
    ]
}), */
