const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Record = require('./models/record')

mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true, useUnifiedTopology: true })


const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  Record.find()
    .sort({ _id: 'asc' })
    .lean()
    .then(list => {
      let totalAmount = 0
      list.forEach(index => totalAmount += index.amount)
      res.render('index', { list, totalAmount })
    })
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log(`App is listening on http://localhost:3000`)
})
