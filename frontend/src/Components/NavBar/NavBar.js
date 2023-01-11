import React from "react";
import { Link } from "react-router-dom";

function NavBar (){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Redux Auth
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/register'>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/login'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default NavBar;
