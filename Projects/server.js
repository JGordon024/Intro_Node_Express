const express = require('express')
const fs = require('fs');
const app = express();
const fetch = require('node-fetch');
const port = 3000;
const path = require('path');
const router = express.Router;

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')

app.use(express.static("public"));

app.get("/fire", (req, res) => {
    
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json)
    .then(
        data => {
            console.log(data.name)
            res.render('fire',{pokemon: data.name})
        }
    )
})
app.get("/water", (req, res) => res.render('water'))
app.get("/electric", (req,res) => res.render('electric'))
app.get("/dragon", (req, res) => res.render("dragon"))
app.get("/earth", (req, res)=>res.render("earth"))


app.listen(port, ()=>console.log(`The server is ${port}`));