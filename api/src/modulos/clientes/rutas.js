const db = require('../../DB/mysql')

const express = require('express')

const respuestas = require('../../red/respuestas')

const controlador = require('./controlador')

const router = express.Router()

//Ruta Creada
router.get('/', (req, res) => {
    const todos = controlador.datos()
    respuestas.success(req, res, todos,200)
})

module.exports = router