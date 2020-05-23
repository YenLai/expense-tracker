const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.get('/', (req, res) => {
  const date = new Date
  const today = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).substr(-2)}-${('0' + date.getDate()).substr(-2)}`
  res.render('new', { today })
})

router.post('/', (req, res) => {
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

module.exports = router