import $ from 'jquery'

const render = require('./demo.art')
if (typeof document === 'object') {
    document.getElementById('app').innerHTML = render()
}

$(function() {
    $('#app').fadeIn()
    $('h1').css({'color': 'red'})
})

// module.exports = render