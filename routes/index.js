const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const records = require('./modules/records')
const category = require('./modules/category')
const users = require('./modules/users')

router.use('/users', users)
router.use('/records', records)
router.use('/category', category)
router.use('/', home)


module.exports = router