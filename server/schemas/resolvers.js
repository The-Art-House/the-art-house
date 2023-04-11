const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { Listing } = require("../models");
const { Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    listings: async () => {
      return Listing.find().populate("userId");
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    listing: async (parent, { listingId }) => {
      return Listing.findOne({ _id: listingId });
    },

    orders: async () => {
      return Order.find();
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    addListing: async (parent, { imgURL, title, price, quantity, tags }, context) => {
      if (context.user) {
        return await Listing.create({ imgURL, title, price, quantity, tags, userId: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addOrder: async (parent, { listings, payment, isCompleted }) => {
      return await Order.create({ listings, payment, isCompleted });
    },

    updateListingQuantity: async (parent, { listingId, quantity }) => {
      return Listing.findOneAndUpdate(listingId, { quantity });
    },

    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
