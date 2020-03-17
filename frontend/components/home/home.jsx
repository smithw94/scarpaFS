import React from 'react';
import { Link } from 'react-router-dom';
import SlideSet from './home_slideset';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts() 
  }
  
  render() {
    return (
    <div className="home-page">
      <div className="home-page1">
        <img className="home-photo1" src={"https://i.imgur.com/liak4zT.png"} alt="asdfasdf"/>
        <div className="inner-hP1">
          <div className="labels-hP1">
            <span>SCARPA</span>
            <h1>ROCK CLIMBING</h1>
          </div>
          <div className="product-nav">
            <Link to="/products" >Shop all</Link>
            <Link to="/products/?34" >Bouldering</Link>
            <Link to="/products/?33">Approach</Link>
          </div>
        </div>
      </div>

      <div className="carousel">
        <SlideSet />
      </div>
    </div>
  )}
};
  

export default Home;