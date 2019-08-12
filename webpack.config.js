const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './common/app.ts',
    devtool: 'inline-source-map',
    mode: "none",
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    }
};