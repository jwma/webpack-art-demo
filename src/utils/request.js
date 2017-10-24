var $ = require('jquery')

module.exports = {
    send: function (options) {
        if (ENV === 'dev') {
            var data = options.data || {}
            data.dev = 1
            options.data = data
        }

        $.ajax(options)
    }
}