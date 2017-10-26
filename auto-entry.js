const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 默认的基础模板文件
const defaultEntryTpl = './src/pages/base.art'

const mappings = {}

const entryFiles = glob.sync('./src/pages/**/app.js')
for (var i = 0; i < entryFiles.length; i++) {
    const currentEntry = entryFiles[i]
    const name = currentEntry.replace('./src/pages/', '').replace('/app.js', '')

    mappings[name] = {
        path: currentEntry,
        template: defaultEntryTpl
    }
}

const entryTplFiles = glob.sync('./src/pages/**/base.art')
for (var i = 0; i < entryTplFiles.length; i++) {
    const currentEntryTpl = entryTplFiles[i]
    const name = currentEntryTpl.replace('./src/pages/', '').replace('/base.art', '')

    // 如果存在自定义的基础模板文件，则使用自定义的基础模板
    mappings[name] && (Object.assign(mappings[name], { template: currentEntryTpl }))
}

const entry = {}
const plugins = []

for (name in mappings) {
    const currentEntry = mappings[name]

    entry[name] = currentEntry['path']
    plugins.push(new HtmlWebpackPlugin({
        template: currentEntry['template'], // 指定模板
        filename: name + '.html',           // 指定生成的文件名
        chunks: [name]                      // 指定要引入哪些js
    }))
}

module.exports = {
    entry: entry,
    plugins: plugins
}