const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const create = require('./modules/new')
const edit = require('./modules/edit')
const del = require('./modules/delete')
const category = require('./modules/category')

router.use('/', home)
router.use('/new', create)
router.use('/edit', edit)
router.use('/delete', del)
router.use('/category', category)


module.exports = router