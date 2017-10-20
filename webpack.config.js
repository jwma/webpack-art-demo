const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const qiniuConfig = require('./config/qiniu.config') // 引入七牛配置文件

module.exports = {
    entry: {
        index: path.join(__dirname, 'src/pages/index', 'index.js'),
        demo: path.join(__dirname, 'src/pages/demo', 'demo.js')
    },
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
        port: 8080,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        proxy: {
        }
    },
    module: {
        rules: [{
            test: /\.jpg$/,
            loader: 'file-loader'
        }, {
            test: /\.png$/,
            loader: 'url-loader?minetype=image/png'
        }, {
            test: /\.art$/,
            loader: 'art-template-loader',
            options: {}
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/pages', 'base.art'),  // 指定模板
            filename: 'index.html',  // 指定生成的文件名
            chunks: ['index']  // 指定要引入哪些js
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/pages', 'base.art'),  // 指定模板
            filename: 'demo.html',  // 指定生成的文件名
            chunks: ['demo']  // 指定要引入哪些js
        })
    ]
}

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