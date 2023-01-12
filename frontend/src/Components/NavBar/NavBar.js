import React from "react";
import { Link } from "react-router-dom";

function NavBar (){
    return (
        <div className="bg-light ">
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <a className="navbar-brand" href="/">
                Redux Auth
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link active" to='/'>
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to='/register'>
                        Register
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to='/login'>
                        Login
                    </Link>
                    </li>
                </ul>
                </div>
            </nav>
      </div>
    );
  }

export default NavBar;
