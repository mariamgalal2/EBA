import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isAdmin, onJoinClick }) => {
  return (
<header className="navbar">
  <div className="navbarContent">
    <div className="logoContainer">
      <img src="/EBA_Logo_for_webiste.svg" alt="EBA Logo" style={{ height: '35px' }} />
    </div>
    <div className="navWrapper">
      <nav className="navbar-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        {isAdmin && <Link to="/admin" className="nav-link">Admin</Link>}
        <button className="join-button" onClick={onJoinClick}>Join Now</button>
      </nav>
    </div>
  </div>
</header>

  );
};

export default Navbar;
