const express = require('express')

const router = express.Router()

//Ruta Creada
router.get('/', (req, res) => {
    res.send('Clientes OK')
})

module.exports = router