const express = require('express')
const { categoryList } = require('../../models/categoryList')
const getCategory = require('../../models/getCategory')
const router = express.Router()

const Record = require('../../models/record')

router.get('/', (req, res) => {
  const userId = req.user._id
  Record.find({ userId })
    .lean()
    .sort('-date')
    .then(records => {
      let totalAmount = 0
      records.forEach(record => {
        totalAmount += record.amount
      })
      res.render('index', { records, totalAmount, categoryList })
    })
    .catch(error => console.log(error))
})

// SEARCH
router.post('/search', (req, res) => {
  const userId = req.user._id
  console.log(req.body)
  const { category, month } = req.body
  // if category/month 不存在，設成一個一定會過的東西。
  const category_name = !category ? { $nin: [] } : getCategory(category).name
  const date = !month ? '-' : `-${('0' + month).substr(-2)}-`


  Record.find({ 'category.name': category_name, 'date': { $regex: date }, userId })
    .lean()
    .sort('-date')
    .then((records => {
      let totalAmount = 0
      records.forEach(record => {
        totalAmount += record.amount
      })
      res.render('index', {
        records,
        totalAmount,
        categoryList,
        category,
        month,
        cate: getCategory(category).name
      })
    }))
    .catch(error => console.log(error))
})


module.exports = router