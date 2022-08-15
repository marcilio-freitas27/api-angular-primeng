require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

const password = '12345';

app.post('/login', (req, res, next) => {
    // req.body.user ='luiz';
    // req.body.pwd = '123';
    if(req.body.usuario === 'luiz' && req.body.senha === '123'){
      const id = 1;
      const token = jwt.sign({ id }, password);
      // const token2 = jwt.sign({ id }, process.env.SECRET);
      return res.send({ auth: true, token: token});
    }
    res.status(500).json({message: 'Login inválido!'});
})

module.exports = app;
