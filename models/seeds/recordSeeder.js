const mongoose = require('mongoose')
const Record = require('../record')

const categoryList = [
  {
    name: '家居物業',
    icon: '<i class="fas fa-home"></i>'
  },
  {
    name: '交通出行 ',
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
    name: '其他 ',
    icon: '<i class="fas fa-pen"></i>'
  }
]



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
      category: categoryList[Math.floor(Math.random() * 5)]
    })
  }
  console.log('Done !')
})


