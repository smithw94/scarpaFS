import { connect } from 'react-redux';
import { selectProductIds, selectProducts } from '../../../reducers/selectors';

import ProductTable from './product_tabel';

const mSTP = (state, ownProps) => {
  let { products, attributes } = state.entities;
  let productIds = selectProductIds(attributes, ownProps.filterAttrs)
  productIds.length !== 0 ? products = selectProducts(products, productIds) : products

  return {
    products: Object.values(products),
    attributes: Object.values(attributes)
  }
}



export default connect(mSTP)(ProductTable);