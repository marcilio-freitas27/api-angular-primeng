const express = require('express')
const app = express()
const port = 3000
const mssql = require('mssql/msnodesqlv8');
const mysql = require('mysql');

const con = new mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: '',
  database: 'dbplaylist'
})

app.get('/dados', (req, res)=>{
  con.query('SELECT * FROM tbmusico',(err, result) => {
    if(err) {
      throw err;
    }
    res.status(200).send(result);
  });
})

const conn = new mssql.ConnectionPool({
    driver: "msnodesqlv8",
    server: 'SQLEXPRESS',
    database: 'loja',
    user: 'Marcilio',
    password: ''
    // server: 'localhost',
    // database: 'WebBackEnd',
    // user: 'sa',
    // password: 'Sql2@18'
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cliente', (req, res) => {
  conn.connect().then((pool) => {
    // const queryStr = 'SELECT * FROM Clientes'
    const queryStr = 'SELECT * FROM produto'
    pool.query(queryStr).then((rows) => {
        res.send(rows.recordSet)
    })
  })
})

app.get('/dados', (req, res)=>{
  con.query('SELECT * FROM tbmusico',(err, result) => {
    if(err) {
      throw err;
    }
    res.status(200).send(result);
  });
})


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})
