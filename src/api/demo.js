var request = require('../utils/request')

module.exports = {
    getGameInfo: function (callback) {
        request.send({
            url: '/activity/v1/game-info',
            dataType: 'json',
            success: function (response) {
                typeof callback === 'function' && callback(response)
            }
        })
    },
    doLuckyDraw: function (callback) {
        request.send({
            url: '/activity/v1/do-lucky-draw',
            method: 'POST',
            dataType: 'json',
            success: function (response) {
                typeof callback === 'function' && callback(response)
            }
        })
    }
}