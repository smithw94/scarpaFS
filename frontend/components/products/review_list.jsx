import React from 'react'

const ReviewList = ({ reviews }) => (
  <div>
    {reviews.map(review => (
      <div>
        {review.rating}
        <br/>
        {review.body}
        <br/>
      </div>
    ))}
  </div>
)

export default ReviewList;