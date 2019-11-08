import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';

const productAttrReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.payload.product_attributes)
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, action.payload.product_attributes)
    default:
      return state;
  }
}

export default productAttrReducer;