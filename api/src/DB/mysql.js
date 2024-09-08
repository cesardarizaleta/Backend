const mysql = require('mysql')
const config = require('../config')

const prueba = {
    name: 'Cesar',
    apellido: 'Novedoso'
}

function datos(tabla) {
    return prueba
}

function dato(tabla,id) {

}

function crear(tabla, datos) {

}

function eliminar(tabla,id) {

}

module.exports = {
    datos,
    dato,
    crear,
    eliminar
}