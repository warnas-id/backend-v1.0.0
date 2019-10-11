import Restaurant from '../../models/Restaurant';
import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLInputObjectType
} from 'graphql';
import {
  restoType,
  locationType,
} from './type';

module.exports = {
  createResto: {
    type: restoType,
    args: {
      name: {
        type: GraphQLNonNull(GraphQLString)
      },
      // location: {
      //   name: 'location',
      //   type: {
      //     type: GraphQLInputObjectType({
      //       name: 'lokasion',
      //       fields: () => ({
      //         address: {
      //           type: GraphQLString
      //         },
      //         localcity: {
      //           type: GraphQLString
      //         },
      //         city: {
      //           type: GraphQLString
      //         },
      //         city_id: {
      //           type: GraphQLInt
      //         },
      //         latitude: {
      //           type: GraphQLFloat
      //         },
      //         longitude: {
      //           type: GraphQLFloat
      //         },
      //         zipcode: {
      //           type: GraphQLInt
      //         },
      //         country_id: {
      //           type: GraphQLInt
      //         },
      //         locality_verbose: {
      //           type: GraphQLInt
      //         }
      //       })
      //     })
      //   }
      // },
      featuredMenu: {
        name: 'feature',
        type: new GraphQLList(
          new GraphQLInputObjectType({
            name: 'MenuUtama',
            fields: {
              id: {
                name: 'id',
                type: GraphQLID
              },
              name: {
                name: 'MenuName',
                type: GraphQLString
              },
              price: {
                name: 'MenuPrice',
                type: GraphQLInt
              },
            }
          })
        )
      },
      categoryId: {
        type: GraphQLNonNull(GraphQLID)
      },
      delivery: {
        name: 'delivery',
        type: new GraphQLList(
          new GraphQLInputObjectType({
            name: 'choosedelivery',
            fields: {
              id: {
                name: 'iddelivery',
                type: GraphQLID
              },
              name: {
                name: 'name delivery',
                type: GraphQLString
              },
            }
          })
        )
      },
      payment: {
        name: 'payment',
        type: new GraphQLList(
          new GraphQLInputObjectType({
            name: 'choosepayment',
            fields: {
              id: {
                id: 'idpayment',
                type: GraphQLID
              },
              name: {
                id: 'paymentname',
                type: GraphQLString
              }
            }
          })
        )
      },
      price_range: {
        type: GraphQLString
      },
      timings: {
        type: GraphQLString
      },
      author: {
        type: GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (root, args) => {
      const resto = new Restaurant({
        name: args.name,
        $push: {
          featuredMenu: args.featuredMenu[0]
        },
        categoryId: args.categoryId,
        $push: {
          delivery: args.delivery
        },
        $push: {
          payment: args.payment
        },
        price_range: args.price_range,
        timings: args.timings,
        author: args.author
      })
      const result = await resto.save()

      console.log(result);
      return result
    },

  }
}