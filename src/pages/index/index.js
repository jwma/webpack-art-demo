const render = require('./template.art')
const data = {
    msg: 'My Page'
}

typeof document === 'object' && (document.body.innerHTML = render(data))

module.exports = render