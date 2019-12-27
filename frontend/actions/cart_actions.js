export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

const addItem = item => ({
  type: ADD_ITEM,
  item
})

const removeItem = id => ({
  type: REMOVE_ITEM,
  id
})

export const addToCart = productId => dispatch => {
  dispatch(addItem(productId))
}

export const removeFromCart = productId => dispatch => {
  dispatch(removeItem(productId))
}

