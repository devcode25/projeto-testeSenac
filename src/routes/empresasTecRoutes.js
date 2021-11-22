const express = require('express');
const router = express.Router();
const controller = require('../controller/empresasTecController')

router.get("/", controller.getAllEmpresas);


module.exports = router;
