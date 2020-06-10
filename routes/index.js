const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const records = require('./modules/records')
const category = require('./modules/category')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/records', authenticator, records)
router.use('/category', authenticator, category)
router.use('/', authenticator, home)


module.exports = router