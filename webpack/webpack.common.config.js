module.exports = {
    entry: "./client/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "../dist"
    },

    optimization: {
        splitChunks: {
            chunks: "async", //  async
            minSize: 400,
        }
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.scss$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.tsx?$/, exclude: /node_modules/, use: "ts-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { enforce: "pre", test: /\.js$/, use: "source-map-loader" }
        ]
    },

    plugins: [],

    externals: [

    ],

};