import Category from '../../models/Category'
import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';
import {
  categoryType
} from './type'

module.exports = {
  addCategory: {
    type: categoryType,
    args: {
      name: {
        type: GraphQLNonNull(GraphQLString)
      }
    },
    resolve: async (root, args) => {
      try {
        const exitingCategory = await Category.findOne({
          name: args.name
        });
        if (exitingCategory) {
          throw new Error('Category already exists');
        }
        const category = new Category({
          name: args.name
        })
        const result = await category.save()
        return {
          id: result._id,
          name: result.name,
          msg: `Succesfully add category`
        };
      } catch (err) {
        throw err
      }
    }
  },

  updateCategory: {
    type: categoryType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLNonNull(GraphQLString)
      }
    },
    resolve: async (root, args) => {
      const result = await Category.findByIdAndUpdate(args.id, args);
      if (!result) {
        throw new Error('Data Not Found')
      }
      return {
        name: result.name,
        id: result.id,
        msg: `Succesfully Update`
      }
    }
  },

  deleteCategory: {
    type: categoryType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (root, args) => {
      const removedCategory = await Category.findByIdAndRemove(args.id)
      if (!removedCategory) {
        throw new Error('Data Not Found')
      }
      return {
        msg: `Succesfully Removed`
      }
    }
  },


}