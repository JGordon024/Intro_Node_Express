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

    // fetch('https://pokeapi.co/api/v2/pokemon/growlithe')
    // .then(res => res.json())
    // .then(
    //     data => {
    //         const {...img} = data.sprites
    //         res.render('fire',{
    //             growName: data.name,
    //             growWeight: data.weight,
    //             growHeight: data.height,
    //             growImg: img.front_default
    //         })
    //     } 
    // )
})
app.get("/water", (req, res) => {
    res.render('water')
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
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

    fetch('https://pokeapi.co/api/v2/pokemon/buizel')
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

    fetch('https://pokeapi.co/api/v2/pokemon/gyarados')
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

})
app.get("/electric", (req,res) => {
    res.render('electric')
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
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

    fetch('https://pokeapi.co/api/v2/pokemon/garchomp')
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

    fetch('https://pokeapi.co/api/v2/pokemon/rayquaza')
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
})
app.get("/dragon", (req, res) => {
    res.render("dragon")
    fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
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
})
app.get("/earth", (req, res)=>{
    res.render("earth")

    fetch('https://pokeapi.co/api/v2/pokemon/electabuzz')
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

    fetch('https://pokeapi.co/api/v2/pokemon/electabuzz')
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

    fetch('https://pokeapi.co/api/v2/pokemon/electabuzz')
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
})


app.listen(port, ()=>console.log(`The server is ${port}`));