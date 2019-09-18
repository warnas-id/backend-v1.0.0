import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const restoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    address: String,
    locality: String,
    city: String,
    city_id: Number,
    latitude: Number,
    longitude: Number,
    zipcode: Number,
    country_id: Number,
    locality_verbose: String
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  featuredMenu: [{
    name: String,
    price: Number
  }],
  delivery: {
    type: Array
  },
  payment: {
    type: Array
  },
  price_range: {
    type: String
  },
  likers: {
    type: Number
  },
  unlikers: {
    type: Number
  },
  timings: String,
  isPublish: {
    type: Boolean,
    default: false
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Restaurant = mongoose.model("Restaurant", restoSchema)
module.exports = Restaurant