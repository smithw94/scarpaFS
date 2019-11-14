import React from 'react';
import StarRatings from 'react-star-ratings';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }


  handleDelete() {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    let x = <button className="session-submit" onClick={this.handleDelete}>Delete</button>
    return (
      <div className="review-item">
        Author: {this.props.review.username}
        <br/>
        <StarRatings
          rating={ this.props.review.rating } 
          starRatedColor="black"
          numberOfStars={5}
          starDimension="13px"
          starSpacing="5px"
        />
        <br/>
        {this.props.review.body}
        <br/>

        {this.props.id === this.props.review.user_id ? x : null}
      </div>
    );
  }
}

export default ReviewItem;