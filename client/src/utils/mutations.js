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
mutation createWorkout($email: String!, $workoutName: String!){
    createWorkout(email: $email, workoutName: $workoutName) {
        workout {
        _id
        workoutName
        }
    }
}
`;