var $ = require('jquery')
require('./css/index.css')

$(function() {
    // 渲染HTML
    const render = require('./templates/page.art')
    const data = {
        headerData: {
            title: '使用 art-template 作为前端模板语言'
        },
        msg: '这段话是编译模板时动态生成的'
    }
    $('#app').html(render(data))
})