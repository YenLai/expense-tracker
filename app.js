const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Record = require('./models/record')
const Category = require('./models/category')
let category = []

mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb://localhost/category', { useNewUrlParser: true, useUnifiedTopology: true })


const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  Record.find()
    .sort()
    .lean()
    .then(list => res.render('index', { list }))
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log(`App is listening on http://localhost:3000`)
})
