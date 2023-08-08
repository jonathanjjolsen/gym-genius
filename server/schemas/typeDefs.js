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
        _id: ID!
        name: String!
        mainMuscles: String
        minorMuscles: String
        equipment: String
        difficulty: String
        instructions: String
        url: String
        category: Category!
      }
    
      type Category {
        _id: ID!
        CategoryName: String!
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
        age: Int
        bio: String
        height: String
        weight: Int
        weightGoal: Int
        Goals: String
        workouts: [Workout]
    }

    type Query {
        categories: [Category!]!
        user: User
        workout: Workout
        exercises: [Exercise]
    }

    type Auth {
        token: ID
        user: User

    }


    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createWorkout(workoutName: String!, selectedExercises: [String]!): Workout
        addExerciseToWorkout(workoutName: String!, exerciseInput: ExerciseInput! ): Workout
        updateUserProfile(
            age: Int
            bio: String
            height: String
            weight: Int
            weightGoal: Int
            Goals: String
        ): User
    }

`;

module.exports = typeDefs;