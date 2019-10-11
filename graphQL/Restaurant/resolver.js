import Restaurant from '../../models/Restaurant'
import {
  GraphQLList
} from 'graphql'
import {
  restoType,
  myResto
} from './type'

module.exports = {
  getResto: {
    name: 'Restaurants',
    type: GraphQLList(restoType),
    resolve: (root, args) => {
      return Restaurant.find().populate('categoryId').populate('author').exec()
    }
  }
}