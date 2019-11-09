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