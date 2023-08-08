import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import swal from 'sweetalert';

function SignUp() {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [addUser] = useMutation(ADD_USER);

  //handle form submit and pass variables to addUser mutation
  const handleFormSubmit = async event => {
    try {
      console.log(formState)
      event.preventDefault();
      const response = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = response.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      if (error.message.startsWith('E11000 duplicate key error')) {
        swal({
          title: "Sign Up Error",
          text: "An Account Already Exists With That Email!",
          icon: "warning",
          dangerMode: true,
        })
      } else {
        swal({
          title: "Error",
          text: "An Unknown Error Has Occurred",
          icon: "warning",
          dangerMode: true,
        })
      }
    }
  };

  //handle form change and update formState
  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div id="SignupForm">
      <h1 className="my-">Create An Account</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mx-auto text-center">
          <input type="firstName" name='firstName' required className="form-control rounded text-center mx-auto" id="firstName" placeholder="First Name" onChange={handleChange} />
        </div>
        <div className="form-group mx-auto text-center">
          <input type="lastName" name='lastName' required className="form-control rounded text-center mx-auto" id="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>
        <div className="form-group mx-auto text-center">
          <input type="email" name='email' required className="form-control rounded text-center mx-auto" id="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="form-group mx-auto text-center">
          <input type="password" name='password' required className="form-control rounded text-center mx-auto" id="password" placeholder="Password" onChange={handleChange} />
        </div>
        <div className='mx-auto text-center'>
          <button type="submit" className="btn btn-primary text-center mx-auto">Submit</button>
        </div>
        <p>Already have an Account? Click here to <Link to={'/signUp'}>Log In</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
