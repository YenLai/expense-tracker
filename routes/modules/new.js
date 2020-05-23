const express = require('express')
const router = express.Router()
const getCategory = require('../../models/getCategory')

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

module.exports = router