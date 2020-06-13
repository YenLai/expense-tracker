const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
  category: {
    name: { type: String, require: true },
    icon: { type: String, require: true }
  },
  merchant: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  }
})


module.exports = mongoose.model('Record', recordSchema)
