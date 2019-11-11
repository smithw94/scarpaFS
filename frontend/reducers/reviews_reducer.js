import { RECEIVE_PRODUCTS } from '../actions/product_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.payload.reviews)
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review })
    default:
      return state;
  }
}

export default reviewsReducer;