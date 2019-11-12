import React from 'react'
import ReviewItem from './review_item';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let { reviews } = this.props;
    let rows = [];
    reviews.forEach(review => (
      rows.push(
        <ReviewItem
          review={review}
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