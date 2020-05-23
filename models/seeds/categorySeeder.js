// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/category', { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection
// const Category = require('../category')

// const categoryList = [
//   {
//     name: '家居物業',
//     icon: '<i class="fas fa-home"></i>'
//   },
//   {
//     name: '交通出行 ',
//     icon: '<i class="fas fa-shuttle-van"></i>'
//   },
//   {
//     name: '休閒娛樂',
//     icon: '<i class="fas fa-grin-beam"></i>'
//   },
//   {
//     name: '餐飲食品',
//     icon: '<i class="fas fa-utensils"></i>'
//   },
//   {
//     name: '其他 ',
//     icon: '<i class="fas fa-pen"></i>'
//   }
// ]

// db.once('open', () => {
//   for (let i = 0; i < 5; i++) {
//     Category.create({
//       id: i + 1,
//       name: categoryList[i].name,
//       icon: categoryList[i].icon
//     })
//   }
// })


mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true, useUnifiedTopology: true })

const ex1 = new Record({
  name: ex1,
  date: '2020-05-22',
  amount: 500
})

ex1.category = {
  name: '家居物業',
  icon: '<i class="fas fa-home"></i>'
}

const doc = ex1.save()
console.log(doc)
