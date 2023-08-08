import { gql } from '@apollo/client';

export const GET_EXERCISES = gql`
query exercises {
    exercises {
      _id
      name
      mainMuscles
      minorMuscles
      equipment
      difficulty
      instructions
      url
      category {
        _id
        CategoryName
      }
    }
  }
`;


export const GET_ME = gql`
    query user{
        user {
            _id
            email
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