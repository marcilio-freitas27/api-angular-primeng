
// functions
const verifyJWT = require('./functions/verifyJWT');
const cors = require('cors');

//routes
const index = require('./routes/index');
const clientes = require('./routes/clientes');
const login = require('./routes/login');
const logout = require('./routes/logout');

const express = require('express');
const app = express();


app.use(express.json());
app.use(cors());

app.get('/', index);
app.get('/clientes', verifyJWT ,clientes);
app.post('/login', login);
app.post('/logout', logout);

app.listen(2000, () => {
  console.log("Serve on http://localhost:2000")
});





