const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send({
        titulo:'Empresas tec legais para trampar',
        data: '26/09/2020'
    }) 
})

module.exports = router; 
