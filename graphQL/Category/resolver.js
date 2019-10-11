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
    description: 'find all category',
    type: GraphQLList(categoryType),
    resolve: (root, args) => {
      return Category.find().exec()
    }
  },

  categoryById: {
    type: categoryType,
    description: 'find category by id',
    args: {
      id: {
        description: 'input category ID',
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