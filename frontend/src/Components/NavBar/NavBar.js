import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function NavBar (){
    const auth = useSelector(state=>state); 
    return (
        <div className="bg-light ">
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <a className="navbar-brand" href="/">
                Welcome
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                   { auth.token.token !== ''? <li className="nav-item">
                    <Link className="nav-link active" to='/'>
                        Home
                    </Link>
                    </li> : '' }
               {  auth.token.token === ''? 
                    <li className="nav-item">
                    <Link className="nav-link active" to='/register'>
                        Register
                    </Link>
                    </li> :'' }
                    {  auth.token.token === ''?  <li className="nav-item">
                    <Link className="nav-link active" to='/login'>
                        Login
                    </Link>
                    </li> :'' }
                    
                </ul>
                </div>
            </nav>
      </div>
    );
  }

export default NavBar;
