const mysql = require('mysql')
const config = require('../config')

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

function connectMYSQL() {
    connection = mysql.createConnection(dbconfig)

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MYSQL: ' + err.stack)
            setTimeout(connectMYSQL,2000)
        }
        console.log('Connected to MYSQL as id ' + connection.threadId)
    })

    connection.on('error', (err) => {
        console.error('MYSQL error: ' + err)
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connectMYSQL()
        } else {
            throw err
        }
    })
}

connectMYSQL()

function datos(tabla) {
    return tabla
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