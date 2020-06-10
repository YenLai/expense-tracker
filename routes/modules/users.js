const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.get('logout', (req, res) => {

})

router.post('/login', (req, res) => {

})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.findOne({ email })
    .then(user => {
      if (user)
        return 'email exist.'
      return User.create({
        name, email, password
      })
    })
    .then(() => res.redirect('/users/login'))
    .catch(err => console.log(err))
})

module.exports = router
