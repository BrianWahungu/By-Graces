import React from "react";
// import './navbar.css'
import { Link, useNavigate } from "react-router-dom";
 function NavBar({isLoggedIn, setIsLoggedIn}){
let navigate = useNavigate();
function handleLogout() {
setIsLoggedIn(false);
}
function handleLogin() {
 // redirect to authentication page
  setIsLoggedIn(true)
  navigate("/login");
}
  return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto ms-2 mt-2">
                    <li className="nav-item">
                      <Link className="active me-3 navbar-brand" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="active me-3 navbar-brand" to="/organiztion">Organisation</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="active me-3 navbar-brand" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="active me-3 navbar-brand" to="/contact">Contact</Link>
                    </li>
                    {/* <li>
                        <button className="btn btn-outline-warning" type="submit" >
                        <Link className= "navbar-brand" to="/donate">Donate</Link>
                        </button>
                    </li> */}
                    {/* <li class="nav-item">
                      <Link className="active me-3" to="/donate">Donate</Link>
                    </li> */}
                    {/* <li class="nav-item">
                      <Link className="active me-3" to="/signup">Sign Up</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/login">Login</Link>
                    </li> */}
                  </ul>
              </div>
                  <div>
                    <button className="btn btn-outline-warning" type="submit" >
                        <Link className= "navbar-brand" to="/donate">Donate</Link>
                    </button>
                  </div>
                  <div className="authorization">
                    {isLoggedIn? null :(
                        <button id="Sign-btn" className="btn btn-outline-info ms-2" type="button">
                        <Link className="active me-3 navbar-brand" to="/signup">Sign Up</Link>
                        </button>
                        )}
                        {isLoggedIn ? (
                         <button id="login-btn"
                         className="btn btn-outline-primary ms-2"
                          type="button"
                          onClick={handleLogout}
                          >Logout
                        {/* <Link className="active me-3 navbar-brand" to="/login">Login</Link> */}
                        </button>
                        ):(
                          <button id="login-btn"
                          className="btn btn-outline-primary ms-2"
                           type="button"
                           onClick={handleLogin}> Login
                          </button>
                        )}
                  </div>
                  {/* <ul>
                  <li class="nav-item">
                      <Link className="active me-3 navbar-brand" to="/signup">Sign Up</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="active me-3 navbar-brand" to="/login">Login</Link>
                    </li>
                  </ul>*/}
            </div>
        </nav>
      </div>
    );
}
export default NavBar;