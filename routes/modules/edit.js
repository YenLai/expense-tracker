const express = require('express')
const router = express.Router()
const getCategory = require('../../models/getCategory')

const Record = require('../../models/record')

router.get('/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then(record => { res.render('edit', { record }) })
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
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