import React from 'react';
import StarRatings from 'react-star-ratings';

const ReviewItem = (props) => (
  <div className="Review Item">
    {props.review.user_id}
    <br/>
    <StarRatings
      rating={ props.review.rating }
      starRatedColor="black"
      numberOfStars={5}
    />
    <br/>
    {props.review.body}
    <br/>
  </div>
)

export default ReviewItem;