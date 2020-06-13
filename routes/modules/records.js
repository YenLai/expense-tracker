const express = require('express')
const router = express.Router()
const { categoryList } = require('../../models/categoryList')
const getCategory = require('../../models/getCategory')
const Record = require('../../models/record')

//CREATE
router.get('/new', (req, res) => {
  const date = new Date
  const today = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).substr(-2)}-${('0' + date.getDate()).substr(-2)}`
  res.render('new', { today, categoryList })
})

router.post('/new', (req, res) => {
  const userId = req.user._id
  const { name, date, amount, category, merchant } = req.body
  Record.create({
    name,
    date,
    amount,
    userId,
    merchant,
    category: { name: getCategory(category).name, icon: getCategory(category).icon }
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//DELETE
router.delete('/delete/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//EDIT
router.get('/edit/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOne({ _id, userId })
    .lean()
    .then(record => { res.render('edit', { record, categoryList }) })
    .catch(error => console.log(error))
})

router.put('/edit/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, date, amount, category, merchant } = req.body
  Record.findOne({ _id, userId })
    .then((record) => {
      record.name = name
      record.date = date
      record.amount = amount
      record.category = getCategory(category)
      record.merchant = merchant
      record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})



module.exports = router