'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./dist/[name].css",
    disable: process.env.NODE_ENV === "development"
});

var path = require('path');

var webExport = {
    entry: {
        charterial: path.resolve(__dirname, 'src/charterial.ts'),
    },
    output: {
        path: path.resolve(__dirname),
        filename: './dist/[name].js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader?tsconfig=tsconfig.json',
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass
    ],
    watchOptions: {
        aggregateTimeout: 300
    }
};

module.exports = [webExport];
