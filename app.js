const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Record = require('./models/record')
const app = express()
const routes = require('./routes')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('method'))
app.use(routes)

mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(3000, () => {
  console.log(`App is listening on http://localhost:3000`)
})

