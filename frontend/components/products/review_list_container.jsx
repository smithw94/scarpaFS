import { connect } from 'react-redux';
import ReviewList from './review_list';
import { selectProductReviews } from '../../reducers/selectors';
import { deleteReview } from '../../actions/review_actions';


const mSTP = (state, ownProps) => {
  let { users } = state.entities;
  let { id } = state.session;
  let reviews = selectProductReviews(state.entities.reviews, ownProps.product)
  
  return {
    reviews: reviews,
    users: Object.values(users),
    id
  }
}

const mDTP = dispatch => ({
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
})



export default connect(mSTP, mDTP)(ReviewList);