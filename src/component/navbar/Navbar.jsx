import React from "react";
import { LuBookOpenCheck } from "react-icons/lu";
import {Link} from 'react-router-dom';
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions }  from "../../store";

const  Navbar = () => {
  const isLoggedIn = useSelector((state) => state => state.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/"><b><LuBookOpenCheck/> &nbsp; TODO</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link active " aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/todo">
                TodoList
              </Link>
            </li>
            {!isLoggedIn && (
              <>
              <li className="nav-item  mx-2">
              <Link className="nav-link active btn-nav" aria-current="page" to="/signup">
                Sign Up
              </Link>
              </li>
              <li className="nav-item mx-2">
              <Link className="nav-link active btn-nav" aria-current="page" to="/signin">
                Sign In
               </Link>
              </li>
            </> 
            )}
            
            {isLoggedIn && (
              <div className="d-flex">
              <li className="nav-item mx-2" onClick={logout}>
              <Link className="nav-link active btn-nav" aria-current="page" to="#">
                Log Out
              </Link>
              
            </li>
            </div>
            )}
            <div className="d-flex">
             <li className="nav-item " >
              <Link className="nav-link active" aria-current="page" to="#">
                <img 
                  className="img-fluid user-image"
                  src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                  alt="/"
                />
              </Link>
            </li>
          </div>
          </ul>
        </div>
       </div>
      </nav>
    </div> 
  );
};

export default Navbar;
