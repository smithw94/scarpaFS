import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  
  <div className="homePage1">
    <div>
      <span>SCARPA</span>
      <h1>ROCK CLIMBING</h1>
    </div>
    <div className="product-nav">
      <Link to="/products">Shop all</Link>
      <Link to="/products">Rock Shoes</Link>
      <Link to="/products">Approach</Link>
    </div>
  </div>
    
  
);
  

export default Home;