import $ from 'jquery'
require('./css/index.css')

$(function() {
    // 渲染HTML
    const render = require('./templates/page.art')
    const data = {
        headerData: {
            title: 'using art-template'
        },
        msg: "it's works!"
    }
    $('#app').html(render(data))
})