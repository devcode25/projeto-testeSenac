const express = require('express');
const router = express.Router();
const controller = require('../controller/empresasTecController')

router.get("/", controller.getAllEmpresas);
router.post("/",  controller.createEmpresas);
router.get("/:id", controller.getEmpresas);
router.put("/:id", controller.updateEmpresas);
router.patch("/:id/vagas", controller.updateVagasStatus);


module.exports = router;
