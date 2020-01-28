import React from 'react'
import ReviewItem from './review_item';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let { reviews, deleteReview } = this.props;
    let rows = [];
    reviews.forEach(review => (
      rows.push(
        <ReviewItem
          review={review}
          deleteReview={deleteReview}
          id={this.props.id}
        />
      )
    ))
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default ReviewList;