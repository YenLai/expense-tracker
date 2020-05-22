const mongoose = require('mongoose')
const Record = require('../record')
const categorySeeder = require('./categorySeeder')

mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => console.log('mongodb error!'))
db.once('open', () => {

  console.log('mongodb connected!')
  console.log('creating record data ... ')

  for (let i = 0; i < 5; i++) {
    Record.create({
      name: `第${i}筆花費`,
      date: '2020-05-22',
      amount: Math.ceil(Math.random() * 1000),
      category: categorySeeder()
    })
  }
  console.log('Done !')
})





