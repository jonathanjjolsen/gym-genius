import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="">
      <div className="">
        <h1 className="my-4">Sign Up</h1>

        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="form-control"
              placeholder="Your username"
              name="username"
              type="text"
              // value={username}
              // onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control"
              placeholder="Your email address"
              name="email"
              type="email"
              // value={email}
              // onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-control"
              placeholder="Your password"
              name="pwd"
              type="password"
              // value={password}
              // onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPwd">Confirm Password:</label>
            <input
              className="form-control"
              placeholder="Confirm your password"
              name="confirmPwd"
              type="password"
              // value={password}
              // onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary col-12 col-md-3 offset-md-9">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
