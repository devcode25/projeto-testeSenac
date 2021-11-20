const express = require('express');
const app = express();

const index = require('./routes/index');
const empresas = require('./require/empresasTecRoutes');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');

    next()
});

app.use('/', index);
app.use('/empresas', empresas);

module.exports = app;