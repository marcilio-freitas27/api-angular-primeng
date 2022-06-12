const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const cors = require('cors')

const con = new mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: '',
  database: 'dbplaylist'
})

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  })
);

app.get('/con', (req,res) => {
  try{
    if(con){
      res.status(200).send('Conectado');
    }
  }catch(e){
    res.status(404).send(`Falha ao conectar. ${e.message}`);
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dados', (req, res)=>{
  con.query('CALL sp_consulta_musicos()',(err, result) => {
    if(err) {
      throw err;
    }
    res.status(200).send(result);
  });
})

app.get('/dados/:id', (req, res)=>{
  const id  = req.params.id;
  con.query(`SELECT * FROM tbmusico WHERE CoMusico = ${id}`,(err, result) => {
    if(err) {
      throw err;
    }
    res.status(200).send(result);
  });
})

app.post('/dados', (req, res) => {
  const comusico =  req.body.CoMusico;
  const cobanda = req.body.CoBanda;
  const vasalario =  req.body.VaSalario;
  const invocal =  req.body.InVocal;
  con.query(`INSERT INTO tbmusico(CoMusico, CoBanda,VaSalario,InVocal) VALUES(${comusico}, ${cobanda},${vasalario},${invocal})`,(err, result) => {
    if(err){
      throw err;
    }
    res.status(200).send(result);
  });
})

app.delete('/dados/:id', (req, res) => {
  const id = req.params.id;
  con.query(`DELETE FROM tbmusico WHERE CoMusico = ${id}`, (err, result) =>{
    if(err){
      throw err;
    }
    res.status(200).send(result);
  })
})

app.put('/dados/:id', (req, res) => {
  const comusico =  req.body.CoMusico;
  const cobanda = req.body.CoBanda;
  const vasalario =  req.body.VaSalario;
  const invocal =  req.body.InVocal;
  con.query(`UPDATE tbmusico SET CoBanda = ${cobanda},
   VaSalario = ${vasalario},InVocal = ${invocal}
   WHERE CoMusico = ${comusico}`,(err , result) => {
    if(err){
      throw err;
    }
    res.status(200).send(result);
   });
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})
