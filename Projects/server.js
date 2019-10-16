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
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('fire',{
                charName: data.name,
                charWeight: data.weight,
                charHeight: data.height,
                charImg: img.front_default
            })
        } 
    )

    fetch('https://pokeapi.co/api/v2/pokemon/blaziken')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('fire', {
                blazName: data.name,
                blazWeight: data.weight,
                blazHeight: data.height,
                blazImg: img.front_default
            })
        } 
    )

    fetch('https://pokeapi.co/api/v2/pokemon/growlithe')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('fire',{
                growName: data.name,
                growWeight: data.weight,
                growHeight: data.height,
                growImg: img.front_default
            })
        } 
    )
})
app.get("/water", (req, res) => {
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('water',{
                squirtName: data.name,
                squirtWeight: data.weight,
                squirtHeight: data.height,
                squirtImg: img.front_default
            })
        } 
    )

    fetch('https://pokeapi.co/api/v2/pokemon/buizel')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('water',{
                buizName: data.name,
                buizWeight: data.weight,
                buizHeight: data.height,
                buizImg: img.front_default
            })
        } 
    )

    fetch('https://pokeapi.co/api/v2/pokemon/gyarados')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('water',{
                gyarName: data.name,
                gyarWeight: data.weight,
                gyarHeight: data.height,
                gyarImg: img.front_default
            })
        } 
    )

})
app.get("/electric", (req,res) => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('electric',{
                pikName: data.name,
                pikWeight: data.weight,
                pikHeight: data.height,
                pikImg: img.front_default
            })
        } 
    )

    fetch('https://pokeapi.co/api/v2/pokemon/zapdos')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('electric',{
                zapName: data.name,
                zapWeight: data.weight,
                zapHeight: data.height,
                zapImg: img.front_default
            })
        } 
    )
    
    fetch('https://pokeapi.co/api/v2/pokemon/magnezone')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('electric',{
                magName: data.name,
                magWeight: data.weight,
                magHeight: data.height,
                magImg: img.front_default
            })
        } 
    )
    
})
app.get("/dragon", (req, res) => {
    fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('dragon',{
                dragName: data.name,
                dragWeight: data.weight,
                dragHeight: data.height,
                dragImg: img.front_default
            })
        } 
    )
    fetch('https://pokeapi.co/api/v2/pokemon/salamence')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('dragon',{
                salaName: data.name,
                salaWeight: data.weight,
                salaHeight: data.height,
                salaImg: img.front_default
            })
        } 
    )

    fetch('https://pokeapi.co/api/v2/pokemon/rayquaza')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('dragon',{
                rayName: data.name,
                rayWeight: data.weight,
                rayHeight: data.height,
                rayImg: img.front_default
            })
        } 
    )
})
app.get("/earth", (req, res)=>{

    fetch('https://pokeapi.co/api/v2/pokemon/rhyhorn')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('earth',{
                
                rhyName: data.name,
                rhyWeight: data.weight,
                rhyHeight: data.height,
                rhyImg: img.front_default
            })
        } 
    )

    fetch('https://pokeapi.co/api/v2/pokemon/geodude')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('earth',{
                geoName: data.name,
                geoWeight: data.weight,
                geoHeight: data.height,
                geoImg: img.front_default
            })
        } 
    )

    fetch('https://pokeapi.co/api/v2/pokemon/aerodactyl')
    .then(res => res.json())
    .then(
        data => {
            const {...img} = data.sprites
            res.render('earth',{
                aeroName: data.name,
                aeroWeight: data.weight,
                aeroHeight: data.height,
                aeroImg: img.front_default
            })
        } 
    )
})


app.listen(port, ()=>console.log(`The server is ${port}`));