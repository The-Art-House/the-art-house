const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Listing {
    _id: ID
    userId: Profile
    imgURL: String
    title: String
    price: Int
    quantity: Int
    tags: [String]
  }

  type Order {
    _id: ID
    listings: [Listing]
    payment: Int
    isCompleted: Boolean
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    listings: [Listing]!
    orders: [Order]!
    profile(profileId: ID!): Profile
    listing(listingId: ID!): Listing
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addListing(imgURL: String!, title: String, price: Float, quantity: Int, tags: [String]): Listing
    addOrder(listings: [ID], payment: Int, isCompleted: Boolean): Order
    updateListingQuantity(listingId: ID!, quantity: Int!): Listing
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
