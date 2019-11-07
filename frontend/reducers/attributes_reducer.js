import { RECEIVE_ALL_ATTRIBUTES, RECEIVE_ATTRIBUTE } from '../actions/attribute_actions';

const attributesReducer = ( state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_ATTRIBUTES:
      return Object.assign({}, state, action.attributes);
    case RECEIVE_ATTRIBUTE:
      return Object.assign({}, state, { [action.attribute.id]: action.attribute })
    default:
      return state;
  }
};

export default attributesReducer;