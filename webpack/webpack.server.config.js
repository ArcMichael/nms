const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
module.exports = {

    entry: {
        main: [path.resolve(__dirname, '../server.js')]
    },

    output: {
        // filename: 'server.bundle.js'
        path: path.resolve(__dirname, '../serve'),
        filename: 'server.bundle.js'
    },

    target: 'node',

    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, '../node_modules')).concat([
        'react-dom/server'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext;
    }, {}),

    node: {
        __filename: false,
        __dirname: false
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader?name=images/[name].[ext]'
            }
        ]
    }
};
