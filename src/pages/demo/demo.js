var $ = require('jquery')
var request = require('../../utils/request')
var demoAPI = require('../../api/demo')

// 拼接中奖记录模板
function buildRecordTpl(drawRecords) {
    var drawRecordsTpl = ''
    for (var i = 0; i < drawRecords.length; i++) {
        var record = drawRecords[i]
        var txt = record.is_win ? '中奖了~' : '真可惜！'
        drawRecordsTpl += '<li style="padding: 5px;">' + txt + ' ' + record.created_at + '</li>'
    }

    return drawRecordsTpl
}

$(function () {
    const render = require('./demo.art')
    typeof document === 'object' && (document.getElementById('app').innerHTML = render())

    demoAPI.getGameInfo(function (response) {
        $('#app').fadeIn()
        $('#nickname').text(response.game_info.nickname)
        $('#avatar').attr('src', response.game_info.avatar)
        $('#records').append(buildRecordTpl(response.game_info.draw_records))

        setTimeout(function () {
            $('#loading').hide()
            $('#info').fadeIn()
        }, 800)
    })

    var canDrawNow = true
    $('#drawBtn').on('click', function () {
        if (!canDrawNow) {
            alert('别太急')
            return
        }

        $('#drawBtn').text('抽奖中...')
        canDrawNow = false

        demoAPI.doLuckyDraw(function (response) {
            // 前端阻止重复点击
            setTimeout(function () {
                canDrawNow = true
            }, 500)
            $('#drawBtn').text('点击抽奖')

            if (response.new_draw_record.is_win) {
                alert('中奖了~')
            } else {
                alert('真可惜!')
            }

            $('#records').append(buildRecordTpl([response.new_draw_record]))
        })
    })
})