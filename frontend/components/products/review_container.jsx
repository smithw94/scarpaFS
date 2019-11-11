import { connect } from 'react-redux';
import Review from './review';
import createReview from '../../actions/review_actions';

// get product ID
const mSTP = (state, ownProps) => {
  debugger
  return {
    productId: ownProps.product.id
  }
}

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(Review);