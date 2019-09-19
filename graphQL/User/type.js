import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt
} from 'graphql'

export const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    contact: {
      type: GraphQLString
    }
  })
})

export const authData = new GraphQLObjectType({
  name: 'Auth',
  fields: () => ({
    userId: {
      type: GraphQLID
    },
    token: {
      type: GraphQLString
    },
    tokenExpiration: {
      type: GraphQLInt
    }
  })
})