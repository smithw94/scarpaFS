import React from 'react';

const ReviewItem = (props) => (
  <div>
    {props.review.rating}
    <br/>
    {props.review.body}
    <br/>
  </div>
)

export default ReviewItem;