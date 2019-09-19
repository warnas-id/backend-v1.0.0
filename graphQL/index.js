import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'
import userMutation from './User/mutation'
import userResolver from './User/resolver'
import categoryMutation from './Category/mutation'
import categoryResolver from './Category/resolver'

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...userResolver,
    ...categoryResolver
  })
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutation,
    ...categoryMutation
  })
});

export default new GraphQLSchema({
  query,
  mutation
});