const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoEntry = require('./auto-entry')
const qiniuConfig = require('./config/qiniu.config') // 引入七牛配置文件

module.exports = {
    entry: {},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        library: 'template',
        libraryTarget: 'umd'
    },
    externals: {
        jquery: 'jQuery',
    },
    devServer: {
        port: 9000,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        proxy: {
            '/news-api': {
                changeOrigin: true,
                target: 'http://h5.newaircloud.com',
                pathRewrite: { '^/news-api': '' }
            },
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }, {
            test: /\.(jpg|png|gif)$/i,
            use: ['file-loader']
        }, {
            test: /\.art$/,
            use: [
                { loader: 'art-template-loader' }
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin('styles/[name].css')
    ]
}

// 自动侦测项目的入口文件和对应的html文件
module.exports.entry = Object.assign(module.exports.entry, autoEntry.entry)
module.exports.plugins = (module.exports.plugins || []).concat(autoEntry.plugins)

// proudction config
if (process.env.NODE_ENV === 'prod') {
    // 配置七牛插件
    const QiniuPlugin = require('qiniu-webpack-plugin')
    const qiniuPlugin = new QiniuPlugin(qiniuConfig.pluginConfig)
    module.exports.output.publicPath = qiniuConfig.buildConfig.publicPath

    module.exports.plugins = (module.exports.plugins || []).concat([
        qiniuPlugin, // 启用七牛插件
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ])
}