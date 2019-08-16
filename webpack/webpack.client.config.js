const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: ['./client.js'],
        vendor: [
            'react-redux',
            'redux',
            'redux-thunk'
        ]
    },

    externals: {
        'react-dom': 'ReactDOM',
        'react': 'React',
        'moment': 'moment',
        'jquery': 'jQuery',
        'react-router': 'ReactRouter'
    },

    output: {
        path: path.join(__dirname, '../public'),
        filename: 'dist/bundle.[hash].min.js',
        publicPath: '/'
    },

    plugins: [
        new AssetsPlugin({
            filename: '/etc/template/hash.json'
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CleanWebpackPlugin(
            ['dist/bundle.*.min.js', 'dist/vendor.*.min.js'],
            {
                root: path.join(__dirname, '../public'),
                verbose: true,
                dry: false
            }
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: 'dist/vendor.[hash].min.js',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                // exclude:/node_modules/, //按需加载时，没有样式  
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    // { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-1'],
                        plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-decorators', 'transform-runtime', ['import', {
                            libraryName: 'antd',
                            style: 'css'
                        }]]
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader?name=images/[name].[ext]'
            }
        ]
    }
};