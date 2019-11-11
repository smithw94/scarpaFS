import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE'

const receiveReview = review => {
  
  return {
  type: RECEIVE_REVIEW,
  review
  }
}

const receiveResponse = response => ({
  type: RECEIVE_RESPONSE,
  response
})

// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ), response => (
//     dispatch(receiveResponse(response.responseJSON))
//   ))
// );

export const createReview = review => dispatch => APIUtil.createReview(review)
  .then((review) => {
    return dispatch(receiveReview(review));
  })