// import * as APIProduct from '../util/product_api_util';
import * as APIAttr from '../util/attributes_api_util';

// export const RECEIVE_ALL_ATTRIBUTES = 'RECEIVE_ALL_ATTRIBUTES';
export const RECEIVE_ATTRIBUTE = 'RECEIVE_ATTRIBUTE';

// const receiveAllAttributes = payload => ({
//   type: RECEIVE_ALL_ATTRIBUTES,
//   attributes: payload.details
// })

const receiveAttribute = attribute => ({
  type: RECEIVE_ATTRIBUTE,
  
})



// export const fetchAttributes = () => dispatch => APIProduct.fetchPayload()
//   .then(payload => dispatch(receiveAllAttributes(payload)));

export const fetchAttribute = attrId => dispatch => APIAttr.fetchAttr(attrId)
  .then(attribute => dispatch(receiveAttribute(attribute)));