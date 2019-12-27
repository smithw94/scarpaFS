import { ADD_ITEM } from '../actions/cart_actions';

const cartReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case ADD_ITEM:
      debugger
      let newState = state.map(el => el)
      newState.push(action.item)
      return newState;
    default:
      return state;
  }
}

export default cartReducer;