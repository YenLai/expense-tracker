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
  const { category } = req.body
  Record.find({ 'category.name': getCategory(category).name, userId })
    .lean()
    .then((records => {
      let totalAmount = 0
      records.forEach(record => {
        totalAmount += record.amount
      })
      res.render('index', { records, totalAmount, categoryList, cate: getCategory(category).name })
    }))
    .catch(error => console.log(error))
})

module.exports = router