import { connect } from 'react-redux';
import ReviewList from './review_list';
import { selectProductReviews } from '../../reducers/selectors';


const mSTP = (state, ownProps) => {
  let reviews = selectProductReviews(state.entities.reviews, ownProps.product)
  debugger
  return {
    reviews: reviews
  }
}

const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(ReviewList);