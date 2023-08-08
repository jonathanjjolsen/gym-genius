import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import swal from 'sweetalert';

function Login() {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [loginUser] = useMutation(LOGIN_USER);

  //handles form submit and passes variables to loginUser mutation
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await loginUser({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const token = response.data.login.token;
      Auth.login(token);
    }
    catch (error) {
      if (
        error.message &&
        error.message.includes('Incorrect credentials')
      ) {
        // Handle incorrect credentials error here
        swal({
          title: "Login Error",
          text: "Password and Email Combination Do Not Match",
          icon: "warning",
          dangerMode: true,
        })
      } else {
        console.log(error)
      }
    }
  };

  //handles form change and updates formState
  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };


  return (
    <div id="LoginPage">
      <h1 className="">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mx-auto text-center">
          <input type="email" required className="form-control rounded text-center mx-auto" name='email' id="email" placeholder="Email" onChange={handleFormChange} />
        </div>
        <div className="form-group mx-auto text-center">
          <input type="password" required className="form-control rounded text-center mx-auto" name='password' id="password" placeholder="Password" onChange={handleFormChange} />
        </div>
        <div className='mx-auto text-center'>
          <button type="submit" className="btn text-center mx-auto">Submit</button>
        </div>
      </form>
      <p className='pt-4'>New here? Click to <Link to={'/signUp'}>Sign up!</Link></p>
    </div>
  );
}

export default Login;