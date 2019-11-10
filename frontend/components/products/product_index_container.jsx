import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { selectAttr, selectProducts } from '../../reducers/selectors';
// import { fetchAttributes } from '../../actions/attribute_actions';

import ProductIndex from './product_index';

const mSTP = (state, ownProps) => {
  let { products, attributes } = state.entities;

  let productIds = [];

  let filter = parseInt(ownProps.location.search.split('?').filter(String));
  debugger
  if (filter > 0) productIds = selectAttr(attributes, filter);

  productIds.length !== 0 ? products = selectProducts(products, productIds) : products
  debugger
  products = Object.values(products);
  debugger
  return {
    products,
    attributes: Object.values(attributes)
  }
};

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  // fetchAttributes: () => dispatch(fetchAttributes())
});

export default connect(mSTP, mDTP)(ProductIndex);