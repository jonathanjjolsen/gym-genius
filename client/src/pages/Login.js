import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';


function Login() {

  //form hander for login form
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    //form submission handler
    onSubmit: async values => {
      try {
        // TODO: submit api call to login user
      } catch (error) {
        console.log(error)
      }
    },
  });


  return (
    <div id="LoginPage">
      <h1 className="my-">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mx-auto text-center">
          <input type="email" required className="form-control rounded text-center mx-auto" id="email" placeholder="Email" onChange={formik.handleChange} values={formik.values.email} />
        </div>
        <div className="form-group mx-auto text-center">
          <input type="password" required className="form-control rounded text-center mx-auto" id="password" placeholder="Password" onChange={formik.handleChange} values={formik.values.password} />
        </div>
        <div className='mx-auto text-center'>
          <button type="submit" className="btn btn-primary text-center mx-auto">Submit</button>
        </div>
      </form>
      <p>New here? Click to <Link to={'/signUp'}>signup!</Link></p>
    </div>
  );
}

export default Login;