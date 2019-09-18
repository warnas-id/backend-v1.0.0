import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  contact: {
    type: String,
  },
  avatar: {
    type: String
  },
  description: {
    type: String
  },
  role: {
    type: String,
    default: 'member'
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User