
import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, cartLength }) => {
  const sessionLinks = () => (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/"><img src='/logo.png' className="nav-logo-img"/></Link>
      </div>

      <div className="nav-center">
        <Link to="/products">SHOP</Link>
        <Link to="https://github.com/smithw94"> GITHUB </Link>
        <Link to="https://www.linkedin.com/in/will-smith-0a958b198/"> LINKEDIN</Link>
        
      </div>

      <div className="nav-right">
        {
          currentUser ? <Link to="/" onClick={logout}>Log Out</Link> : 
          <Link to="/login">MY ACCOUNT </Link> 
        }
          <Link to="/cart"> CART ({cartLength})</Link>
      </div>
    </nav>
  );

  return sessionLinks();
};

export default Greeting;