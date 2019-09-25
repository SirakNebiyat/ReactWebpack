const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const dev = process.env.NODE_ENV !== "production";
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    title: "ReactHooked",
    template: "index.html"
});
const DefinePluginConfig = new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production"),
});
module.exports = {
    mode: dev ? "development" : "production",
    entry: {
        index: path.resolve(__dirname, "./src/index.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        filename: "[name].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {},
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "babel-loader",
            exclude: /node_modules/,
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
        },
        {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader",
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "url-loader",
            options: {
                limit: 10000,
            },
        },
        ],
    },
    devServer: {
        port: 3000,
        inline: true,
        historyApiFallback: true,
    },
    plugins: dev ? [
        HTMLWebpackPluginConfig,
    ] : [
            HTMLWebpackPluginConfig,
            DefinePluginConfig,
        ],
}