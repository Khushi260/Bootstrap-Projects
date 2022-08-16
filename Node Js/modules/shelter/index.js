module.exports = {
    name : 'javascript',
    popularity : 'high'
}

const blue = require('./blue');
const janet = require('./janet');

const all = [blue,janet]
console.log(all);

module.exports = all;