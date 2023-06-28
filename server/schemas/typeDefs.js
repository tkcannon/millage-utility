const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Trip {
    _id: ID
    millageStart: String
    millageEnd: String
    date: String
    description: String
    purpose: Bool
  }

  type User {
    _id: ID
    username: String
    email: String
    trips: [Trip]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    trips(_id: ID!): [Trip]
  }

  type Mutation {
    addTrip(
      millageStart: String!
      millageEnd: String!
      date: String!
      description: String
      purpose: Bool
    ): Trip
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
