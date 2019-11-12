import { connect } from 'react-redux';
import ReviewList from './review_list';
import { selectProductReviews } from '../../reducers/selectors';


const mSTP = (state, ownProps) => {
  let { users } = state.entities;
  let reviews = selectProductReviews(state.entities.reviews, ownProps.product)
  
  return {
    reviews: reviews,
    users: Object.values(users)
  }
}



export default connect(mSTP)(ReviewList);