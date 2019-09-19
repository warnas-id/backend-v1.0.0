import {
  GraphQLList
} from 'graphql'
import User from '../../models/User'
import {
  userType
} from './type'

module.exports = {
  getUser: {
    name: 'Users',
    type: GraphQLList(userType),
    resolve: (root, args, context, info) => {
      return User.find().exec()
    }
  }
}