const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
        index:"./public/style/index.scss"
    },

    output:{
        path: path.join(__dirname, '../public'),
        filename: 'dist/bundle.css.js',
        publicPath: '/'
    },

    plugins: [
        new AssetsPlugin({
            filename: '/etc/template/style.json'
        }),
        new ExtractTextPlugin('dist/style.[hash].min.css'),
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'style.css'
        //})
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CleanWebpackPlugin(
            ['dist/style.*.min.css','dist/images'],
            {
                root: path.join(__dirname, '../public'),
                verbose:  true,
                dry:      false
            }
        )
    ],

    module:{
        rules: [
            {
                test:/\.css$/,
             // exclude:/node_modules/, 
                loader:"style-loader!css-loader"  
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options:{
                            minimize: true
                        }
                    }, 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader?name=images/[name].[ext]'
            }
        ]
    }
}