const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', (req, res, next) => {
    res.status(200).send({
        title: "API",
        version: "1.0.0",
        environment: process.env.ENVIRONMENT
    });
});

module.exports = app;