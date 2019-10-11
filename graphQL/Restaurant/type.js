import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from 'graphql'


export const menuType = new GraphQLObjectType({
  name: 'FeaturedMenu',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    }
  })
})

export const objType = new GraphQLObjectType({
  name: 'obj',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  })
})

export const myResto = new GraphQLObjectType({
  name: 'myResto',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    author: {
      type: GraphQLString
    },
    timings: {
      type: GraphQLString
    }
  })
})


export const restoType = new GraphQLObjectType({
  name: "Restaurant",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    location: {
      type: new GraphQLObjectType({
        name: 'lokasi',
        fields: {
          address: {
            type: GraphQLString
          },
          localcity: {
            type: GraphQLString
          },
          city: {
            type: GraphQLString
          },
          city_id: {
            type: GraphQLInt
          },
          latitude: {
            type: GraphQLFloat
          },
          longitude: {
            type: GraphQLFloat
          },
          zipcode: {
            type: GraphQLInt
          },
          country_id: {
            type: GraphQLInt
          },
          locality_verbose: {
            type: GraphQLInt
          }
        }
      })
    },
    categoryId: {
      type: GraphQLID
    },
    featuredMenu: {
      type: new GraphQLList(menuType)
    },
    delivery: {
      type: GraphQLList(objType)
    },
    payment: {
      type: GraphQLList(GraphQLString)
    },
    price_range: {
      type: GraphQLString
    },
    timings: {
      type: GraphQLString
    },
    author: {
      type: GraphQLID
    }
  })
})