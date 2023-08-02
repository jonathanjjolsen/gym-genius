import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {


  return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <h1 className="my-4">Login</h1>

              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input className="form-control"

                  placeholder="Your email address"
                  name="email"
                  type="email"
                // value={email}
                // onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input className="form-control"

                  placeholder="Your password"
                  name="pwd"
                  type="password"
                // value={password}
                // onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary col-12 col-md-3 offset-md-9">Submit</button>
            </div>
          </div>
        </div>
  );
}

export default Login;