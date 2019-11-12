import React from 'react';

const ReviewItem = (props) => (
  <div className="Review Item">
    {props.review.user_id}
    <br/>
    {props.review.rating}
    <br/>
    {props.review.body}
    <br/>
  </div>
)

export default ReviewItem;