const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');
const userMutation = require('./User/mutation')
const userResolver = require('./User/resolver')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...userResolver
  })
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutation
  })
});

const schema = new GraphQLSchema({
  query,
  mutation
})

module.exports = schema