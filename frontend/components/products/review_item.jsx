import React from 'react';
import StarRatings from 'react-star-ratings';

const ReviewItem = (props) => (
  <div className="review-item">
    Author: {props.review.username}
    <br/>
    <StarRatings
      rating={ props.review.rating } 
      starRatedColor="black"
      numberOfStars={5}
      starDimension="13px"
      starSpacing="5px"
    />
    <br/>
    {props.review.body}
    <br/>
  </div>
)

export default ReviewItem;