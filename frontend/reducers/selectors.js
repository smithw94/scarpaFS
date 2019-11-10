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


export const selectAttr = (attributes, attrId) => {
  return attributes[attrId].product_ids
}

export const selectProducts = (products, productIds) => {
  let selectedProds = [];
  productIds.forEach(id => (
    selectedProds.push(products[id])
  ))
  debugger
  return selectedProds
}

