const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Record = require('./models/record')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))

mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
  Record.find()
    .sort({ _id: 'asc' })
    .lean()
    .then(records => {
      let totalAmount = 0
      records.forEach(record => {
        totalAmount += record.amount
      })
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.log(error))
})

app.get('/new', (req, res) => {
  const date = new Date
  const today = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).substr(-2)}-${('0' + date.getDate()).substr(-2)}`
  res.render('new', { today })
})

app.get('/edit/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then(record => { res.render('edit', { record }) })
    .catch(error => console.log(error))
})

app.get('/category/:id', (req, res) => {
  const cate = getCategory(req.params.id).name
  Record.find({ 'category.name': cate })
    .lean()
    .then((records => {
      let totalAmount = 0
      records.forEach(record => {
        totalAmount += record.amount
      })
      res.render('index', { records, totalAmount, cate })
    }))
    .catch(error => console.log(error))
})

app.post('/new', (req, res) => {
  const body = req.body
  Record.create({
    name: body.name,
    date: body.date,
    amount: body.amount,
    category: getCategory(body.category)
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.post('/delete/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.post('/edit/:id', (req, res) => {
  const id = req.params.id
  const body = req.body
  Record.findById(id)
    .then((record) => {
      record.name = body.name
      record.date = body.date
      record.amount = body.amount
      record.category = getCategory(body.category)
      record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


app.listen(3000, () => {
  console.log(`App is listening on http://localhost:3000`)
})


function getCategory(_id) {

  const categoryList = [
    {
      name: '家居物業',
      icon: '<i class="fas fa-home"></i>'
    },
    {
      name: '交通出行',
      icon: '<i class="fas fa-shuttle-van"></i>'
    },
    {
      name: '休閒娛樂',
      icon: '<i class="fas fa-grin-beam"></i>'
    },
    {
      name: '餐飲食品',
      icon: '<i class="fas fa-utensils"></i>'
    },
    {
      name: '其他',
      icon: '<i class="fas fa-pen"></i>'
    }
  ]
  // if input category name , find the index of category name and output an Object of it.
  return categoryList[_id] || categoryList[categoryList.findIndex(category => category.name === _id)]

}
