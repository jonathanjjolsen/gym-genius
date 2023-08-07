import { gql } from '@apollo/client';

export const GET_EXERCISES = gql`
query exercises {
    exercises {
      name
      mainMuscles
      minorMuscles
      equipment
      difficulty
      instructions
      url
      category
    }
  }
`;


export const GET_ME = gql`
    query user{
        user {
            _id
            firstName
            lastName
            age 
            bio
            height
            weight
            weightGoal
        }
    }
`;