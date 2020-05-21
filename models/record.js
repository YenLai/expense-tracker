const mongoose = require('mongoose')
const Category = require('./category')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category:
  {
    type: Object,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  amount: {
    type: Number,
    require: true
  }
})

module.exports = mongoose.model('Record', recordSchema)