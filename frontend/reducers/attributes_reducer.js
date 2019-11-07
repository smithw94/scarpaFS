import { RECEIVE_ALL_ATTRIBUTES } from '../actions/attribute_actions';

const attributesReducer = ( state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_ATTRIBUTES:
      return Object.assign({}, state, action.attributes);
    default:
      return state;
  }
};

export default attributesReducer;