import { ADD_ITEM, REMOVE_ITEM } from '../actions/cart_actions';

const cartReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case ADD_ITEM:
      let newState = state.map(el => el)
      newState.push(action.item)
      return newState;
    case REMOVE_ITEM:
      newState = [];
      for (let i = 0; i < state.length; i++) {
        if (action.id == i) {
          continue;
        } else {
          newState.push(state[i]);
        }
      }
      return newState;
    default:
      return state;
  }
}

export default cartReducer;