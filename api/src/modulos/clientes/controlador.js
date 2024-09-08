const db = require('../../DB/mysql')
const TABLA = 'registro'

function datos() {
    return db.datos(TABLA)
}

module.exports = {
    datos
}