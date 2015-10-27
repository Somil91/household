'use strict';

var webpack = require('webpack');
var path = require('path');

// config goes here
var config = {

    context: path.join(__dirname, "app"),
    entry: {
        // app: './index.js'
            app: ['webpack/hot/dev-server', './index.js']
    },
    output: {
        path: path.join(__dirname, "app"),
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },

    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
        // new BowerWebpackPlugin({
        //     modulesDirectories: ["bower_components"],
        //     manifestFiles: "bower.json",
        //     includes: /.*/,
        //     excludes: [],
        //     searchResolveModulesDirectories: true
        // })
    ],


    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'ng-annotate!babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'raw-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
            exclude: /node_modules/
        }],

        exports: {
            resolve: {
                root: path.join(__dirname, "app")
            }
        },
    }
};

// if (process.env.NODE_ENV === 'production') {
//     config.output.path = __dirname + '/dist';
//     config.plugins.push(new webpack.optimize.UglifyJsPlugin());
//     config.devtool = 'source-map';
// }

module.exports = config;
