const Record = require('../record')
const getCategory = require('../getCategory')

require('../../config/mongoose')

db.once('open', () => {

  for (let i = 0; i < 5; i++) {
    Record.create({
      name: `第${i + 1}筆花費`,
      date: '2020-05-22',
      amount: Math.ceil(Math.random() * 1000),
      category: getCategory([Math.floor(Math.random() * 5)])
    })
  }
  console.log('Seed data created !')
})


