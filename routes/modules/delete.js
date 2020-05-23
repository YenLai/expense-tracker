const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router