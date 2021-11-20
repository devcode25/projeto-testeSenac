const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo:'Empresas tec legais para trampar',
        data: "26/09/2020"
    }) 
})

module.exports = router;