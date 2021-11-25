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



const updateEmpresas = (req, res) => {
    try {
        const empresasId = req.params.id
        const empresasToUpdate = req.body //Pego o corpo da requisição com as alterações 

        const empresasFound = empresas.find(empresas => empresas.id == empresasId) // separo o item que irei atualizar      
        const empresasIndex = empresas.indexOf(empresasFound) // separo o indice do item no array de empresas

        if (empresasIndex >= 0) { // verifico se o dado existe no array de filmes
            empresas.splice(empresasIndex, 1, empresasToUpdate) //busco no array o dado, excluo o registro antigo e substituo pelo novo 
        } else {
            res.status(404).send({ message: "Filme não encontrado para ser atualizado" })
        }

        fs.writeFile("./src/models/empresasTec.json", JSON.stringify(empresas), 'utf8', function (err) { // gravo meu json de empresas atualizado
            if (err) {
                res.status(500).send({ message: err }) // caso dê erro retorno status 500
            } else {
                console.log("Arquivo de filmes atualizado com sucesso!")
                const empresasUpdated = empresas.find(empresas => empresas.id == empresasId) // separo o dado que modifiquei no array
                res.status(200).send(empresasUpdated) // envio o dado modificado como resposta
            }
        })
    } catch (err) {
        res.status(500).send({ message: err }) // caso dê erro retorno status 500
    }
}


module.exports = {
    updateEmpresas,
    getEmpresas,
    createEmpresas,
    getAllEmpresas
}


