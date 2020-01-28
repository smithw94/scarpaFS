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

  
  if (attrIds.length === 0 ) {

    return productIds
  
  } else if (attrIds.length === 1) {
    productIds = attributes[attrIds[0]].product_ids
    
    return productIds
  
  } else {
    let count = {};
    let temp;
    attrIds.forEach(attrId => {
      temp = attributes[attrId].product_ids;
      productIds = productIds.concat(temp);
    })

    productIds.forEach(id => {
      count[id] = count[id] || 0;
      count[id] += 1;
      return count;
    })

    const ans = Object.keys(count).filter(id => count[id] > (attrIds.length - 1));
    
    return ans;
  }
}

export const selectProducts = (products, productIds) => {
  let selectedProds = [];
  productIds.forEach(id => (
    selectedProds.push(products[id])
  ))
  return selectedProds;
}

export const selectProductReviews = (reviews, product) => {
  
  let x = Object.values(reviews);
  let selectedReviews = [];

  x.forEach(review => {
    if (review.product_id === product.id) {
      selectedReviews.push(reviews[review.id])
    }
  })

  return selectedReviews;
}


