const { gql } = require('apollo-server-express');

const typeDefs = gql`


    input ExerciseInput {
        name: String!
        description: String!
        mainMuscles: String!
        minorMuscles: String!
        equipment: String!
        difficulty: String!
        instructions: String!
        url: String!
        category: String!
      }
      
      type Exercise {
        name: String!
        mainMuscles: String
        minorMuscles: String
        equipment: String
        difficulty: String
        instructions: String
        url: String
      }
    
      type Category {
        _id: ID!
        WorkoutName: String!
        exercises: [Exercise!]!
      }

    type Workout {
        _id: ID!
        workoutName: String!
        exercises: [Exercise]
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type Query {
        categories: [Category]
        user: User
        workout: Workout
        userProfile: [User]
    }

    type Auth {
        token: ID
        user: User
        userProfile: User
    }


    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createWorkout(email: String!, workoutName: String!): Workout
        addExerciseToWorkout(workoutName: String!, exerciseInput: ExerciseInput! ): Workout
    }

`;

module.exports = typeDefs;