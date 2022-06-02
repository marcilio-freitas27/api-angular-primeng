const express = require('express')
const app = express()
const port = 3000
const mssql = require('mssql/msnodesqlv8');

const conn = new mssql.ConnectionPool({
    driver: "msnodesqlv8",
    server: 'localhost',
    database: 'WebBackEnd',
    user: 'sa',
    password: 'Sql2@18'
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cliente', (req, res) => {
    conn.connect().then((pool) => {
        const queryStr = 'SELECT * FROM Clientes'
        pool.query(queryStr).then((rows) => {
            res.send(rows.recordSet)
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})