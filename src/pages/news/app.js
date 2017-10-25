var $ = require('jquery') // 引入jQuery
var render = require('./app.art') // 引入页面模板
var request = require('../../utils/request') // 引入封装好的Ajax请求库
require('./app.css') // 引入css

// 封装获取新闻列表接口
function fetchNews(successCallback) {
    request.send({
        url: '/news-api/api/getLayouts?sid=aomen&cid=10038',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var layouts = response.layouts
            var news = []
            for (var i = 0; i < layouts.length; i++) {
                var layout = layouts[i]
                if (layout.list && layout.list.length > 0) {
                    for (var j = 0; j < layout.list.length; j++) {
                        news.push(layout.list[j])
                    }
                }
            }

            typeof successCallback === 'function' && successCallback(news)
        }
    })
}

$(function () {
    $('#app').html('loading...')

    fetchNews(function(news) {
        // 渲染模板，获得模板字符串
        var newsListHtml = render({newsList: news})
        
        // 模拟更长的loading时间
        setTimeout(function() {
            // 将渲染得到的模板字符串显示在页面上
            $('#app').html(newsListHtml)
        }, 800)
    })
})