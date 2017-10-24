var request = require('../utils/request')

module.exports = {
    getGameInfo: function (callbacks) {
        request.send(Object.assign({
            url: '/activity/v1/game-info',
            dataType: 'json',
        }, callbacks))
    },
    doLuckyDraw: function (callbacks) {
        request.send(Object.assign({
            url: '/activity/v1/do-lucky-draw',
            method: 'POST',
            dataType: 'json'
        }, callbacks))
    }
}