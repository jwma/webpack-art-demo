var $ = require('jquery')

module.exports = {
    send: function (options) {
        if (ENV === 'dev') {
            var data = options.data || {}
            data.dev = 1
            options.data = data
        }

        var successCallback = options.successCallback
        var failCallback = options.failCallback

        options.success = options.success || function(response) {
            typeof successCallback === 'function' && successCallback(response)
        }

        options.fail = options.fail || function(response) {
            typeof failCallback === 'function' && failCallback(response)
        }

        $.ajax(options).error(function(error) {
            typeof failCallback === 'function' && failCallback(error)
        })
    }
}