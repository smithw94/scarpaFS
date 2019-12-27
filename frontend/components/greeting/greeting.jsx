
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
        <Link to="/"> COMMUNITY </Link>
        <Link to="/"> SUPPORT</Link>
      </div>

      <div className="nav-right">
        {
          currentUser ? <Link to="/" onClick={logout}>Log Out</Link> : 
          <Link to="/login">MY ACCOUNT </Link> 
        }
          <Link to="/cart"> CART ({cartLength})</Link>
        <a className="gitlink" href="https://github.com/smithw94"><img src={'/github.png'} className="search-icon" /></a>
        
      </div>
    </nav>
  );

  return sessionLinks();
};


export default Greeting;