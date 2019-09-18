import mongoose from 'mongoose'
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: {
    type: String,
  },
  deleteAt: {
    type: Date,
    default: null
  },
}, {
  timestamps: true
});

const Category = mongoose.model('Category', categorySchema)
module.exports = Category