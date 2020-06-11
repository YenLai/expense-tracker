const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  category: {
    name:
    {
      type: String,
    },
    icon:
    {
      type: String,
    }
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  }
})


module.exports = mongoose.model('Record', recordSchema)
