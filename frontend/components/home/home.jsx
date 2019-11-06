import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from 'https://i.imgur.com/liak4zT.png';



const Home = () => (
  <div className="homePage">
    <div className="homePage1">
      <img className="homePhoto1" src={"https://i.imgur.com/liak4zT.png"} alt="asdfasdf"/>
      <div className="homePage1b">
        <span>SCARPA</span>
        <h1>ROCK CLIMBING</h1>
      </div>
      <div className="product-nav">
        <Link to="/products">Shop all</Link>
        <Link to="/products">Rock Shoes</Link>
        <Link to="/products">Approach</Link>
      </div>
    </div>
  </div>
 
    
  
);
  

export default Home;