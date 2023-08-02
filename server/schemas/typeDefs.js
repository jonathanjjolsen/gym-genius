const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Exercise {
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

    type Workout {
        _id: ID!
        name: String!
        exercises: [Exercise]
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type Category {
        _id: ID!
        name: String!
        exercise: [Exercise]
    }

    type Query {
        exercises: [Exercise]
        user: [User]
        categories: [Category]
        workout: Workout
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addCategory(name: String!): Category
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;