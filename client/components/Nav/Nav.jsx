import React from 'react';
import './Nav.css';

const Nav = ({ handleEditFormClick }) => {

  return (
    <div className="nav-grid">
    <div className="mobile-menu">
      &#9662;
    </div>
      <div className="nav-col logo"></div>
      <div className="nav-col search">
        <input type="text" placeholder="search" />
      </div>
      <div className="nav-col nav">
        <ul id="menu">
          <li onClick= {handleEditFormClick }>Edit Photo</li>
          <li>Become a host</li>
          <li>Help</li>
          <li>Sign up</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;