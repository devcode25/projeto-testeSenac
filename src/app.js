const express = require('express');
const app = express();

app.use(express.json())

const index = require('./routes/index');
const empresas = require('./routes/empresasTecRoutes');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") // informo que minha api poderá ser chamada de qualquer lugar. Por um browser, por exemplo.
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
    // como criei uma função dentro do app.use, preciso dar 
    //um "next()" para mandar ele seguir para a próxima middleware. 
    // se eu não faço isso, a requisição vai ficar travada aí.
})

app.use("/", index);
app.use("/empresas", empresas);

module.exports = app;
