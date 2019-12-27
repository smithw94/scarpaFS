export const ADD_ITEM = 'ADD_ITEM';

const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const addToCart = (productId) => dispatch => {
  dispatch(addItem(productId))
}