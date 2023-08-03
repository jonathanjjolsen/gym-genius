import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
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
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" to="" href="" id="">Categories</Link></li>
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" to="" href="#" id="">Workouts</Link></li>
            <li className="nav-item"><Link className="nav-link text-light text-decoration-none" to="" href="" id="">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
