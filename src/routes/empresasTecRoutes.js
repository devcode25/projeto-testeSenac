const express = require('express');
const router = express.Router();
const controller = require('../controller/empresasTecController')

router.get("/", controller.getAllEmpresas);
router.post("/",  controller.createEmpresas);
router.get("/:id", controller.getEmpresas);


module.exports = router;
