import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE'
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => {

  return {
  type: RECEIVE_REVIEW,
  review
  }
}

const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
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

export const deleteReview = reviewId => dispatch => APIUtil.deleteReview(reviewId)
  .then(() => dispatch(removeReview(reviewId)))