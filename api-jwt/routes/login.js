require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

app.post("/login", (req, res, next) => {
  if (req.body.usuario === "luiz" && req.body.senha === "123") {
    const id = 1;
    const token = jwt.sign({ id }, process.env.SECRET);
    return res.send({ auth: true, token: token });
  }
  res.status(500).json({ message: "Login inválido!" });
});

module.exports = app;
