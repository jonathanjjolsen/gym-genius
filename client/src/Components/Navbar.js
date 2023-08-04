import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  //TODO: check for log in on load 
  useEffect(() => {

  }, [])

  //temporary conditional data until we can use token or session data
  let loggedIn = false

  // if not logged in, display the login link 
  return (!loggedIn ?
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 " id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link to="/" className='text-decoration-none navbar-brand text-light fs-2' href="#page-top">
          Gym Genius
        </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto fs-4">
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" to={'/categories'} href="" id="">Categories</Link></li>
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" to={'/login'} href="#" id="">Workouts</Link></li>
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" to={'/login'} href="" id="">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav> :
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 " id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link to="/" className='text-decoration-none navbar-brand text-light fs-2' href="#page-top">
          Gym Genius
        </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto fs-4">
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" to={'/categories'} href="" id="">Categories</Link></li>
            {/* TODO: Pull user id from data to pass to workout route /workouts/:id*/}
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" href="" id="">Workouts</Link></li>
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" to={'/login'} href="" id="">Profile</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
