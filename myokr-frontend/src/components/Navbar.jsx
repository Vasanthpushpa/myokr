import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyOKR</div>
      <ul className="navbar-links">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
