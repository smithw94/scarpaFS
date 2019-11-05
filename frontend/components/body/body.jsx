import React from 'react';

class Body extends React.Component {


  render() {

    return(
      <div className="parentDiv">
        <div>
          <h1>Fit Please</h1>
        </div>
        <div className="backgroundImg">
          <img src={ window.homePage1 } alt="Background Img"/>
        </div>
      </div>
    );
  }
}

export default Body;