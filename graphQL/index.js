import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'
import userMutation from './User/mutation'
import userResolver from './User/resolver'
import categoryMutation from './Category/mutation'
import categoryResolver from './Category/resolver'
import restoMutation from './Restaurant/mutation'
import restoResolver from './Restaurant/resolver'

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...userResolver,
    ...categoryResolver,
    ...restoResolver
  })
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutation,
    ...categoryMutation,
    ...restoMutation
  })
});

export default new GraphQLSchema({
  query,
  mutation
});