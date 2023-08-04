import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'

function SignUp() {
  return (
    <div id="SignupForm">
      <h1 id="SignupHeading">Sign Up</h1>
      <div>

        <form>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Full Name"
              name="username"
              type="text"
            // value={username}
            // onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
            // value={email}
            // onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              name="pwd"
              type="password"
            // value={password}
            // onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Gender"
              name="Gender"
              type="text"
            // value={gender}
            // onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Weight"
              name="Weight"
              type="text"
            // value={Weight}
            // onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary ">
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}

export default SignUp;
