const express = require('express')
const router = express.Router()
const getCategory = require('../../models/getCategory')

const Record = require('../../models/record')

//CREATE
router.get('/new', (req, res) => {
  const date = new Date
  const today = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).substr(-2)}-${('0' + date.getDate()).substr(-2)}`
  res.render('new', { today })
})

router.post('/new', (req, res) => {
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

//DELETE
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//EDIT
router.get('/edit/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then(record => { res.render('edit', { record }) })
    .catch(error => console.log(error))
})

router.put('/edit/:id', (req, res) => {
  const id = req.params.id
  const body = req.body
  Record.findById(id)
    .then((record) => {
      record.name = body.name
      record.date = body.date
      record.amount = body.amount
      record.category = getCategory(body.category)
      record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})



module.exports = router