import User from '../../models/User';
import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import {
  encode,
  decode
} from '../../helpers/encrypt'
import {
  userType,
  authData
} from './type'
import jwt from 'jsonwebtoken'

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
  },

  login: {
    type: authData,
    args: {
      email: {
        type: GraphQLNonNull(GraphQLString)
      },
      password: {
        type: GraphQLNonNull(GraphQLString)
      }
    },
    resolve: async (root, args) => {
      const user = await User.findOne({
        email: args.email
      });
      if (!user) {
        throw new Error('User does not exist!');
      }
      const isEqual = await decode(args.password, user.password);
      if (!isEqual) {
        throw new Error('Password is incorrect!');
      }
      const {
        id,
        email
      } = user
      const token = jwt.sign({
          userId: id,
          email: email
        },
        'somesupersecretkey', {
          expiresIn: '1h'
        }
      );
      return {
        userId: id,
        token: token,
        tokenExpiration: 1
      };
    }
  }
}