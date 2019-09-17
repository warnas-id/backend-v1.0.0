const User = require('../../models/User');
const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql');
const {
  encode
} = require('../../helpers/encrypt')
const userType = require('./type')

module.exports = {
  register: {
    type: userType,
    args: {
      name: {
        type: GraphQLNonNull(GraphQLString)
      },
      email: {
        type: GraphQLNonNull(GraphQLString)
      },
      password: {
        type: GraphQLNonNull(GraphQLString)
      },
      contact: {
        type: GraphQLNonNull(GraphQLString)
      }
    },
    resolve: async (root, args, context, info) => {
      try {
        const existingUser = await User.findOne({
          email: args.email
        });
        if (existingUser) {
          throw new Error('User already exists.');
        }
        const hashedPassword = await encode(args.password);
        const user = new User({
          email: args.email,
          password: hashedPassword,
          name: args.name,
          contact: args.contact
        });
        const result = await user.save();
        return {
          ...result._doc,
          password: null,
          _id: result.id
        };
      } catch (err) {
        throw err;
      }
    }
  }
}