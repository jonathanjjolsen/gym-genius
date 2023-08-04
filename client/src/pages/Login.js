import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {


  return (
    <div id="LoginPage">
      <h1 className="my-4">Login</h1>

      <div className="form-group">
        <input className="form-control"

          placeholder="Email"
          name="email"
          type="email"
        // value={email}
        // onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input className="form-control"

          placeholder="Password"
          name="pwd"
          type="password"
        // value={password}
        // onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary ">Submit</button>
    </div>
  );
}

export default Login;