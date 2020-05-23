const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const recordSchema = new Schema({
  name: {
    type: String
  },
  date: {
    type: String
  },
  amount: {
    type: Number
  },
  category: categorySchema
})


module.exports = mongoose.model('Record', recordSchema)
