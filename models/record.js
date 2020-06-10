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
    type: String,
  },
  amount: {
    type: Number
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  category: categorySchema
})


module.exports = mongoose.model('Record', recordSchema)
