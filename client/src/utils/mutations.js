import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        token
        user {
            _id
            firstName
            lastName
            email
        }
    }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}
`;

export const CREATE_WORKOUT = gql`
    mutation createWorkout($workoutName: String!, $selectedExercises: [String]!) {
        createWorkout(workoutName: $workoutName, selectedExercises: $selectedExercises) {
            _id
        }
    }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile(
    $age: Int
    $bio: String
    $height: String
    $weight: Int
    $weightGoal: Int
    $Goals: String
  ) {
    updateUserProfile(
      age: $age
      bio: $bio
      height: $height
      weight: $weight
      weightGoal: $weightGoal
      Goals: $Goals
    ) {
      _id
      age
      bio
      height
      weight
      weightGoal
      Goals
    }
  }
`;

