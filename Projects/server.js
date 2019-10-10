const express = require('express')
const fs = require('fs');
const app = express();
const fetch = require('node-fetch');
const port = 3000;
const path = require('path');
const router = express.Router;

<<<<<<< HEAD
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')
=======
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})
>>>>>>> master

app.use(express.static("public"))
app.get("/", (req, res) => res.render('index'))

app.listen(port, ()=>console.log(`The server is ${port}`));