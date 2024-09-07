const express = require('express')

const respuestas = require('../../red/respuestas')

const router = express.Router()

//Ruta Creada
router.get('/', (req, res) => {
    respuestas.success(req, res, 'TodoOK',200)
})

module.exports = router