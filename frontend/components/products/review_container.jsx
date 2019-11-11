import { connect } from 'react-redux';
import Review from './review';
import { createReview } from '../../actions/review_actions';

// get product ID
const mSTP = (state, ownProps) => {
  return {
    productId: ownProps.id,
    rating: ownProps.rating,
    body: ownProps.body,
    onUpdate: ownProps.onUpdate,
    onSubmit: ownProps.onSubmit
  }
}

const mDTP = dispatch => ({
  // createReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(Review);