import * as APIAttr from '../util/attributes_api_util';

export const RECEIVE_ALL_ATTRIBUTES = 'RECEIVE_ALL_ATTRIBUTES';
export const RECEIVE_ATTRIBUTE = 'RECEIVE_ATTRIBUTE';

const receiveAllAttributes = attributes => ({
  type: RECEIVE_ALL_ATTRIBUTES,
  attributes
})

const receiveAttribute = attribute => ({
  type: RECEIVE_ATTRIBUTE,
  attribute
})



export const fetchAttributes = () => dispatch => APIAttr.fetchAttrs()
  .then(attributes => dispatch(receiveAllAttributes(attributes)));

export const fetchAttribute = attrId => dispatch => APIAttr.fetchAttr(attrId)
  .then(attribute => dispatch(receiveAttribute(attribute)));