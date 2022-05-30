const express = require('express');
const { get } = require('http');

// permite via js, no navegador, acesso a outros domínios. Usar api de outros domínios, acesso entre domínios
const cors = require('cors');
const app = express();

// extenção do chrome: json-handle

app.get('/', (req , res) =>{
  res.send('{ "mensagem": "Hello World!" }');
})

app.get('/usuario',(req , res) =>{
  var usuarios = [];
  usuarios.push({
    id: 1,
    email:'',
    nome: '',
    sobrenome:''
  });
  usuarios.push({
    id: 2,
    email:'',
    nome: '',
    sobrenome:''
  });
  usuarios.push({
    id: 3,
    email:'',
    nome: '',
    sobrenome:''
  });
  res.status(200).send(usuarios);
})

app.get(`/usuario/1`,(req , res) =>{
  var usuario = ({
    id: 1,
    email:'',
    nome: '',
    sobrenome:''
  });
  res.status(200).send(usuario);
})

app.listen(3000, () =>{
  console.log('Example app listening on  http://localhost:3000');
});
