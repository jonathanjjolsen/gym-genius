const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Exercises {
        _id: ID!
        name: String!
        description: String!
        mainMuscles: String!
        minorMuscles: String!
        equipment: String!
        difficulty: String!
        instructions: String!
        url: String!
    }

    type Users {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type Categories {
        _id: ID!
        name: String!
    }

    type Query {
        categories: [Categories]
    }
`;

module.exports = typeDefs;