const express = require('express');
const router = express.Router();
const controller = require('../controller/empresasTecController')

router.get("/", controller.getAll);
router.get("/empresas", controller.getAll);

module.exports = router;