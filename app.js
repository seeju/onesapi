const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotaUser = require('./routes/user');


app.use(bodyParser.urlencoded({ extended: false})); // apenas dados simples
app.use('/user', rotaUser);
app.use(bodyParser.json()); //json de entrada no body
//quando não encontra rota entra aqui:
app.use((req, res, next) => {
    const error = new Error('Não encontrado');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send ({
        error: {
            message: error.message
        }
    });
});

module.exports = app;