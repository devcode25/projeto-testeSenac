const empresas = require("../models/empresasTec.json")
const fs = require("fs")


const getAllEmpresas = (req, res) => {
    console.log(req.url)
    res.status(200).send(empresas)
}

const createEmpresas = (req, res) => {
    const { id, Nome, Atuação, Site, Telefone } = req.body
    empresas.push({ id, Nome, Atuação, Site, Telefone })
    fs.writeFile("./src/models/empresasTec.json", JSON.stringify(empresas), 'utf8', function (err) { // gravando novo filme no array de filmes
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const empresasFound = empresas.find(empresas => empresas.id == id) // recupero o filme que foi criei no array de filmes      
            res.status(200).send(empresasFound)
        }
    })
}

const getEmpresas = (req, res) => {
    const empresasId = req.params.id
    const empresasFound = empresas.find((empresas) => empresas.id == empresasId)
    if (empresasFound) {
        res.status(200).send(empresasFound)
    } else {
        res.status(404).send({ message: "Empresa não encontrada" })
    }
}



module.exports = {
    getEmpresas,
    createEmpresas,
    getAllEmpresas
}

