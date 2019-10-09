const express = require('express')
const fs = require('fs');
const app = express();
const fetch = require('node-fetch');
var port = 3000;

const jsesc = require('jsesc');
const pug = require('express-handlebars')({
    defaultLayout: 'main',
    extname: '.pug',
    helpers: {
      static(path) {
        return path;
      },
      escapeJSString(str) {
        if (! str) {
          return null;
        }
        return jsesc(str, {
          // escape everything to \xFF hex sequences so we don't have to worry about script tags and whatnot
          escapeEverything: true, 
          // wrap output with single quotes
          wrap: true 
        });
      }
    }
  });
  app.engine('pug', pug);
  app.set('view engine', 'pug');
  
app.get("/", (req, res) => {
  res.render('index', {
  });
});
app.get("/about", (req, res) => {
  res.render('about');
});
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});
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