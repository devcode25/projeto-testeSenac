const app = require('./src/app');
const port = 8080;

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
});