const { gql } = require('apollo-server-express');

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
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
addListing( imgURL: String!, title: String, tags: [String]): Listing
addOrder(listings: [ID], payment: Int, isCompleted: Boolean): Order
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;