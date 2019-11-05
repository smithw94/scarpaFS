
import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/"><img src={ window.logo } className="nav-logo-img"/></Link>
      </div>

      <div className="nav-center">
        <Link to="/">SHOP</Link>
        <Link to="/"> COMMUNITY </Link>
        <Link to="/"> SUPPORT</Link>
      </div>

      <div className="nav-right">
        <Link to="/login">MY ACCOUNT </Link>
        <Link to="/cart"> CART ()</Link>
        <Link to="/"><img src={ window.magni } className="search-icon"/></Link>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;