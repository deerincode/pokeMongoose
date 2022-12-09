require("dotenv").config()
const mongoose = require("mongoose")
const express = require('express')
const app = express()
const port = 3000
const Pokemon = require('./models/pokemon.js')

// Global config
db = mongoose.connection

app.use(express.urlencoded({ extended: false }))
mongoose.set("strictQuery", true)

//app setup
app.set('view engine','jsx')
app.engine('jsx',  require('express-react-views').createEngine())

// mongoose setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

// Index
app.get('/pokemon', (req, res) =>{
    Pokemon.find({}, (error, allPokemon) =>{
       res.render('Index', {pokemon: allPokemon}) 
    })
    
})

// New
app.get('/pokemon/new', (req,res) => {
    res.render('New')
})

// Create
app.post('/pokemon', (req, res) => {
    console.log(req.body)
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})

//Show routes
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {
            mon: foundPokemon,
        })
    })
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})