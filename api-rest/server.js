const express = require('express');
const { get } = require('http');
const bodyParser = require('body-parser');

// permite via js, no navegador, acesso a outros domínios. Usar api de outros domínios, acesso entre domínios
const cors = require('cors');
const app = express();
var usuarios = [];

// extenção do chrome: json-handle
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req , res) => {
  res.send('{ "mensagem": "Hello World!" }');
})

app.post('/inserir', (req , res) => {
  var {
    id,
    email,
    nome,
    sobrenome
  } = req.body;

  res.send(usuarios.push({
    id,
    email,
    nome,
    sobrenome
  }));
})

app.get('/usuario',(req , res) =>{
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
