
import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/"><img src={ window.logo } className="nav-logo-img"/></Link>
      </div>

      <div className="nav-center">
        <Link to="/products">SHOP</Link>
        <Link to="/"> COMMUNITY </Link>
        <Link to="/"> SUPPORT</Link>
      </div>

      <div className="nav-right">
        {
          currentUser ? <Link to="/" onClick={logout}>Log Out</Link> : 
          <Link to="/login">MY ACCOUNT </Link> 
        }
        <Link to="/cart"> CART (0)</Link>
        <a href="https://github.com/smithw94"><img src={window.magni} className="search-icon" /></a>
        
      </div>
    </nav>
  );

  return sessionLinks();
};


export default Greeting;