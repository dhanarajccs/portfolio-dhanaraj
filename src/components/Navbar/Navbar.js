import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  )
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Dhanaraj Narasimmareddy</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems} 
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/dhanarajccs/portfolio-dhanaraj" target="_blank" className="btn" download="Document">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
