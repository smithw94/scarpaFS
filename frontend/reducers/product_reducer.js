import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';

const productsReducer = ( state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.payload.products);
    
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { [action.payload.product.id]: action.payload.product })
    default:
      return state;
  }
};

export default productsReducer;