import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'
import Category from '../../models/Category'
import {
  categoryType,
} from './type'

module.exports = {
  getCategories: {
    name: 'Categories',
    type: GraphQLList(categoryType),
    resolve: (root, args) => {
      return Category.find().exec()
    }
  },

  categoryById: {
    name: "categoryById",
    type: categoryType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (root, args) => {
      const fetchCategory = await Category.findById({
        _id: args.id
      })
      return {
        id: fetchCategory._id,
        name: fetchCategory.name
      }
    }
  }
}