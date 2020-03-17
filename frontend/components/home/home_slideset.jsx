import React from 'react';
import { Link } from 'react-router-dom';

const imgUrls = [
  "https://i.imgur.com/WriL8qd.jpg",
  "https://i.imgur.com/tHtL5uX.jpg",
  "https://i.imgur.com/Upt7pWW.jpg"
];

class SlideSet extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  imageText() {
    if (this.state.currentImageIndex === 0) {
      return (
      <div className="inner-hp2">
        <h1 className="small-title">
          INSTINCT SERIES
        </h1>
        <p className="small-description">
          A collection of all-around climbing shoes that excel across a variety of technical styles and disciplines at the highest level.
        </p>
        <Link id="home-slide" to="/products">Shop Now</Link>
      </div>
      )
    } else if (this.state.currentImageIndex === 1) {
      return( 
      <div className="inner-hp2">
        <h1 className="small-title">
          ALL DAY PERFORMANCE
        </h1>
        <p className="small-description">
          These flat-lasted shoes strike the perfect balance between all-day comfort and performance.
        </p>
        <Link id="home-slide" to="/products">Shop Now</Link>
      </div>
      )
    } else {
      return (
      <div className="inner-hp2">
        <h1 className="small-title">
          APPROACH
        </h1>
        <p className="small-description">
          Sometimes getting to and from the route is half the battle. 
          The tough and functional models in our Approach collection will inspire climb-worthy confidence before and after the rope comes out.
        </p>
        <Link id="home-slide" to="/products">Shop Now</Link>
      </div>
      )
    }
  }

  render() {

    return (
      <div className="slideset">
        <Arrow 
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;"
        />

        <ImageSlide url={ imgUrls[this.state.currentImageIndex] } text = {this.imageText()} />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}

const ImageSlide = ({ url, text }) => {

  return (
    <div className="image-slide" >
      <img className="home-photo2" src={`${url}`} alt=""/>
          {text}
    </div>
  )
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}
  >
    {glyph}
  </div>
)




export default SlideSet
