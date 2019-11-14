import React from 'react';

const imgUrls = [
  "https://i.imgur.com/N0IHCVM.jpg",
  "https://i.imgur.com/nOBv0lS.jpg",
  "https://i.imgur.com/QT35QLU.jpg",
  "https://i.imgur.com/O9cRUEZ.jpg",
  "https://i.imgur.com/3iesvuH.jpg"
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

  render() {

    return (
      <div className="slideset">
        <Arrow 
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;"
        />

        <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}

const ImageSlide = ({ url }) => {

  return (
    <div className="image-slide" >
      <img className="home-photo2" src={`${url}`} alt=""/>
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
