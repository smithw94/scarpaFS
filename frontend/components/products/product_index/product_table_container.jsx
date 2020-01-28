import { connect } from 'react-redux';
import { selectProductIds, selectProducts } from '../../../reducers/selectors';

import ProductTable from './product_tabel';

const mSTP = (state, {filter, filterAttrs}) => {
  let { products, attributes } = state.entities;
  if (filter > 0) filterAttrs.push(filter);

  let productIds = selectProductIds(attributes, filterAttrs)
  productIds.length !== 0 ? products = selectProducts(products, productIds) : products

  return {
    products: Object.values(products),
    attributes: Object.values(attributes)
  }
}



export default connect(mSTP)(ProductTable);