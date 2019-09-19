import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} from 'graphql'

export const categoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    msg: {
      type: GraphQLString
    }
  })
})