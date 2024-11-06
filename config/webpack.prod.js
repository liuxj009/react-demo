const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "./js/[name]-[hash].js",
        // publicPath:"/assets/"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: './images',
                        publicPath: '/images/',
                    }
                }
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, '../src/assets'),
            "@": path.resolve(__dirname, '../src')
        }
    },

    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        host: "localhost",
        compress: true,
        port: 8090
    },
    devtool: 'source-map',
    devtool: 'none',
    stats: {
        // all:true,
        timings: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/[name].css`
        }),
        new HtmlWebpackPlugin({
            title: "template",
            filename: `index.html`,
            template: `./public/index.html`,
            inject: 'body'
        })

    ]


}