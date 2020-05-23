const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')

require('./config/mongoose')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('method'))
app.use(routes)

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.listen(3000, () => {
  console.log(`App is listening on http://localhost:3000`)
})

