const webpack = require('webpack');
const config = require('./webpack.common.config');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
config.devServer = {
    hot: true,
    // contentBase: '/dist/',
    publicPath: '/nms/dist/',
    port: 8081,
    compress: true,
    headers: {
        'Provess-Env': 'develop'
    },
    historyApiFallback: {
        index: './server/tpl/development.html'
    },
    // open: true

};

config.plugins.push(new webpack.HotModuleReplacementPlugin());
// config.externals.push(nodeExternals())
module.exports = config;