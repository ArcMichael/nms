const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './public/style/index.scss',
        './client'
        // './common/routes',
    ],
    externals:{
        'react-dom':'ReactDOM',
        'react':'React',
        'moment':'moment',
        'jquery':'jQuery',
        'react-router':'ReactRouter'
    },
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['es2015', 'react'],
                        plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-decorators', 'transform-runtime', ['import', {
                            libraryName: 'antd',  
                            style: 'css'
                        }]]  
                    }
                }
            },
            {
                test:/\.css$/,
             // exclude:/node_modules/, 
                loader:"style-loader!css-loader"  
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader?name=images/[name].[ext]'
            }
        ]
    }
};
