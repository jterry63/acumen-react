import React, { Component } from 'react';
import "./Nav.css";

class Nav extends Component {
  render() {
    return (

      <div className="img-nav-container">
        <img id="hero-img" src="../images/5.jpg" />



<div className="card-panel z-depth-0 center-align" id="slogan">
        <span className="white-text" id="slogan-text">When employees are happy, your organization succeeds
        </span>
        <br />
        <br />
        <a href="" className="btn-flat center-align" id="getStarted">Get Started</a>
      </div>




        <nav className="nav-master z-depth-0">
          <div className="navbar-fixed">

            <a className="navbar-brand" href="#">
              <img src="../images/acumen-white.png" />
            </a>
            <div id="nav-buttons">

              <a href="" class="btn-flat" id="nav1">Platform</a>

              <a href="" class="btn-flat" id="nav2">Product</a>

              <a href="" class="btn-flat" id="nav3">Company</a>

              <a href="" class="btn-flat" id="nav4">Contact</a>

              
          
           

            <div id="login-buttons">
            
            <a href="" class="btn-flat" id="loginBtn">Log In</a>

<a href="" class="btn-flat" id="signUpBtn">Sign Up</a>
            </div>
          </div>
          </div>
        </nav>




      </div>


















    )


  }




}

export default Nav;

