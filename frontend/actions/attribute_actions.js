import * as APIAttr from '../util/attributes_api_util';

export const RECEIVE_ALL_ATTRIBUTES = 'RECEIVE_ALL_ATTRIBUTES';

const receiveAllAttributes = attributes => ({
  type: RECEIVE_ALL_ATTRIBUTES,
  attributes
})

export const fetchAttributes = () => dispatch => APIAttr.fetchAttrs()
  .then(attributes => dispatch(receiveAllAttributes(attributes)));