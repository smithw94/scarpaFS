import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class SlideSet extends React.Component {
  render() {

    return (
      <Carousel>
        <div className="home-page1">
          <img className="home-photo2" src={"https://i.imgur.com/N0IHCVM.jpg"}/>
        </div>
        <div className="home-page1">
          <img className="home-photo2" src={"https://i.imgur.com/nOBv0lS.jpg"} />
        </div>
        <div className="home-page1">
          <img className="home-photo2" src={"https://i.imgur.com/QT35QLU.jpg"} />
        </div>
        <div className="home-page1">
          <img className="home-photo2" src={"https://i.imgur.com/O9cRUEZ.jpg"} />
        </div>
      </Carousel>
    )
  }
}



export default SlideSet