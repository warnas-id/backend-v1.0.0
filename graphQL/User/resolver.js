const {
  GraphQLList
} = require('graphql')
const User = require('../../models/User')
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