const path = require('path');

module.exports = {
    entry: "./client/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname , "../public/dist")
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,//不解析node_modules
                loader: 'ts-loader'
            },
        ]
    }
}