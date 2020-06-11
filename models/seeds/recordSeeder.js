const Record = require('../record')
const User = require('../user')
const getCategory = require('../getCategory')
const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()
db = require('../../config/mongoose')

const SEED_USER = [
  {
    email: 'user1@example.com',
    password: '12345678'
  },
  {
    email: 'user2@example.com',
    password: '12345678'
  }
]

db.once('open', () => {
  return Promise.all(Array.from(
    { length: SEED_USER.length },
    (_, index) => {
      const { email, password } = SEED_USER[index]
      bcrypt.genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash =>
          User.create({
            email, password: hash
          }))
        .then(user => {
          const date = new Date
          const userId = user._id
          return Promise.all(Array.from(
            { length: 3 },
            (_, i) => Record.create({
              name: `cost-${i}`,
              date: `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).substr(-2)}-${('0' + date.getDate()).substr(-2)}`,
              amount: Math.floor(Math.random() * 1000),
              category: { name: getCategory(i).name, icon: getCategory(i).icon },
              userId
            })
          ))
        }).then(() => {
          console.log('done')
          // process.exit()
        })
    }
  ))
})




