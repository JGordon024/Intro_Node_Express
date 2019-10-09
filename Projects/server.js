const express = require('express')
const fs = require('fs');
const app = express();
const fetch = require('node-fetch');
var port = 3000;

app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.use(express.static("public"))
app.get("/", (req, res) => res.send("Hello!"))

app.listen(port, ()=>console.log(`The server is ${port}`));