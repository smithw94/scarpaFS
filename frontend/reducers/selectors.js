// export const selectProduct = ( { products }, productId) => (
//   products[productId]
// );

export const selectProductAttrs = (attributes, product) => {
  let details = product.detail_ids;
  let productAttr = [];

  details.map(detailId => {
    productAttr.push(attributes[detailId])
  })
  return productAttr;
}

export const selectProductIds = (attributes, attrIds) => {
  let productIds = [];
  attrIds.forEach(id => (
    attributes[id].product_ids.forEach(prodId => (
      !productIds.includes(prodId) ? productIds.push(prodId) : null
    ))
  ))
  return productIds;
}

export const selectProducts = (products, productIds) => {
  let selectedProds = [];
  productIds.forEach(id => (
    selectedProds.push(products[id])
  ))
  return selectedProds;
}

export const selectProductReviews = (reviews, product) => {
  const reviewIds = product.review_ids;
  let selectedReviews = [];
  reviewIds.forEach(id => (
    selectedReviews.push(reviews[id])
  ))
  return selectedReviews;
}

