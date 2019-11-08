// import { RECEIVE_ATTRIBUTE } from '../actions/attribute_actions';
import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';

const attributesReducer = ( state = {}, action) => {
  Object.freeze(state)

  let attributes
  let attribute

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      attributes = action.payload.details
      return Object.assign({}, state, attributes);
    case RECEIVE_PRODUCT:
      attribute = action.payload.details
      return Object.assign({}, state, { [attribute.id]: attribute })
    default:
      return state;
  }
};

export default attributesReducer;