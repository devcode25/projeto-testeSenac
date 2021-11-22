const empresas = require("../models/empresasTec.json")


const getAllEmpresas = (req, res) => {
    console.log(req.url)
    res.status(200).send(empresas)
}

module.exports = {
    getAllEmpresas,
}
