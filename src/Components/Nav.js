import React, { Component } from 'react';
import "./Nav.css";

class Nav extends Component {
    render() {
        return (
          <div className="nav-container">
          
            <nav>
              
    <div className="nav-wrapper">
    
    <a className="navbar-brand" href="#">
          <img src="../images/acumen2.png" />
        </a>
        <div id="nav-buttons">

<a href="" class="waves-effect waves-teal btn-flat" id="nav1">Platform</a>

<a href="" class="waves-effect waves-teal btn-flat" id="nav2">Product</a>

<a href="" class="waves-effect waves-teal btn-flat" id="nav3">Company</a>

<a href="#modal1" class="waves-effect waves-teal btn-flat" id="nav4">Login</a>

</div>
    </div>
    
  </nav>

  </div>
  

        )


    }




}

export default Nav;

