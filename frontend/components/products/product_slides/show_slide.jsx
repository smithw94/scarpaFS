import React from 'react'

class ShowSlide extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
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
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />

        <ImageSlide url={this.props.imgUrls[this.state.currentImageIndex]} />

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
    <div className="product-show-image" >
      <img className="index-image" src={`${url}`} alt="" />
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

export default ShowSlide