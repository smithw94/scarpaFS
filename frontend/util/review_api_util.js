export const createReview = review => (
  $.ajax({
    method: 'post',
    url: 'api/reviews',
    data: { review }
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'delete'
  })
)