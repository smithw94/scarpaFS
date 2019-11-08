import * as APIProduct from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveProducts = payload => ({
  type: RECEIVE_PRODUCTS,
  payload
})

const receiveProduct = payload => ({
  type: RECEIVE_PRODUCT,
  payload
})

export const fetchProducts = () => dispatch => {
  APIProduct.fetchPayload().then(payload => {
    dispatch(receiveProducts(payload));
    return payload
  });
}

export const fetchProduct = (productId) => dispatch => {
  APIProduct.fetchProduct(productId).then(payload => {
    dispatch(receiveProduct(payload));
    return payload
  });
}