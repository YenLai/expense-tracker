const express = require('express')
const router = express.Router()
const getCategory = require('../../models/getCategory')

const Record = require('../../models/record')

router.get('/:cate', (req, res) => {
  const cate = getCategory(req.params.cate).name
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


module.exports = router